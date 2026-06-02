import { readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const distSwPath = join(process.cwd(), "dist", "sw.js");
const version = process.env.GITHUB_SHA?.slice(0, 12) || new Date().toISOString().replace(/[-:.TZ]/g, "").slice(0, 14);
const source = readFileSync(distSwPath, "utf8");
const output = source.replaceAll("__REWORD_CACHE_VERSION__", version);

writeFileSync(distSwPath, output);
console.log(`Injected service worker cache version: ${version}`);
