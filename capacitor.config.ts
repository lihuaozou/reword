import type { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.reword.kaoyan",
  appName: "2027考研英语记忆系统",
  webDir: "dist",
  server: {
    url: "https://lihuaozou.github.io/reword/",
    cleartext: false,
  },
};

export default config;
