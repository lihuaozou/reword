#!/usr/bin/env node
import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { spawnSync } from "node:child_process";

const root = process.cwd();
const flags = new Set(process.argv.slice(2));
const requireAndroid = flags.has("--require-android") || flags.has("--require-apk");
const requireApk = flags.has("--require-apk");
let failed = false;

function rel(path) {
  return path.replaceAll("\\", "/");
}

function full(path) {
  return join(root, path);
}

function ok(message) {
  console.log(`[ok] ${message}`);
}

function warn(message) {
  console.log(`[warn] ${message}`);
}

function fail(message) {
  failed = true;
  console.log(`[fail] ${message}`);
}

function checkFile(path, required = true) {
  const exists = existsSync(full(path));
  if (exists) ok(`${rel(path)} exists`);
  else if (required) fail(`${rel(path)} is missing`);
  else warn(`${rel(path)} is missing`);
  return exists;
}

function checkPackageDependency(name) {
  const pkgPath = full("package.json");
  const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
  const version = pkg.dependencies?.[name] || pkg.devDependencies?.[name];
  if (version) ok(`${name} ${version}`);
  else fail(`${name} is missing from package.json`);
}

function parseJavaMajor(output) {
  const match = output.match(/version "(\d+)(?:\.|")/);
  return match ? Number(match[1]) : null;
}

function checkJava(required = false) {
  const result = spawnSync("java", ["-version"], { encoding: "utf8" });
  const output = `${result.stdout || ""}${result.stderr || ""}`;
  const major = parseJavaMajor(output);

  if (!major) {
    if (required) fail("Java is not available. Install JDK 21 for Capacitor Android 8.");
    else warn("Java is not available locally. GitHub Actions will install JDK 21.");
    return null;
  }

  ok(`Java ${major} detected`);
  return major;
}

function getRequiredJavaMajor() {
  const capacitorGradle = full("node_modules/@capacitor/android/capacitor/build.gradle");
  if (!existsSync(capacitorGradle)) return null;

  const source = readFileSync(capacitorGradle, "utf8");
  const match = source.match(/JavaVersion\.VERSION_(\d+)/);
  return match ? Number(match[1]) : null;
}

console.log("Reword Android build check");
console.log(`root: ${root}`);

checkFile("package.json");
checkFile("package-lock.json");
checkFile("capacitor.config.ts");
checkFile("dist/index.html");
checkFile("dist/manifest.json");
checkPackageDependency("@capacitor/core");
checkPackageDependency("@capacitor/cli");
checkPackageDependency("@capacitor/android");

const requiredJava = getRequiredJavaMajor();
const javaMajor = checkJava(requireAndroid);
if (requiredJava) {
  ok(`@capacitor/android compileOptions require Java ${requiredJava}`);
  if (javaMajor && javaMajor < requiredJava) fail(`Java ${javaMajor} is too old. Use JDK ${requiredJava} or newer.`);
}

if (existsSync(full("android"))) {
  ok("android project directory exists");
} else if (requireAndroid) {
  fail("android project directory is missing. Run npx cap add android, then npx cap sync android.");
} else {
  warn("android project directory is not present yet. The workflow will create it with npx cap add android.");
}

if (requireAndroid || existsSync(full("android"))) {
  checkFile("android/gradlew", requireAndroid);
  const hasSettings = checkFile("android/settings.gradle", false) || checkFile("android/settings.gradle.kts", false);
  if (!hasSettings && requireAndroid) fail("android/settings.gradle or android/settings.gradle.kts is missing");
  const hasRootBuild = checkFile("android/build.gradle", false) || checkFile("android/build.gradle.kts", false);
  if (!hasRootBuild && requireAndroid) fail("android/build.gradle or android/build.gradle.kts is missing");
  const hasAppBuild = checkFile("android/app/build.gradle", false) || checkFile("android/app/build.gradle.kts", false);
  if (!hasAppBuild && requireAndroid) fail("android/app/build.gradle or android/app/build.gradle.kts is missing");
}

if (requireApk) {
  const apkPath = "android/app/build/outputs/apk/debug/app-debug.apk";
  if (checkFile(apkPath, true)) {
    const size = statSync(full(apkPath)).size;
    if (size > 0) ok(`${rel(apkPath)} size ${size} bytes`);
    else fail(`${rel(apkPath)} is empty`);
  }
}

if (failed) {
  console.log("Android build check failed.");
  process.exit(1);
}

console.log("Android build check passed.");
