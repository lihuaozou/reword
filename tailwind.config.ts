import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#17212b",
        slateblue: "#334155",
        paper: "#fbfaf6",
        mist: "#e7f3f1",
        harbor: "#0f6d72",
        copper: "#d46b4c",
        spruce: "#2b7a68",
        saffron: "#f3b23f",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(23, 33, 43, 0.05), 0 16px 38px rgba(23, 33, 43, 0.08)",
        lifted: "0 1px 0 rgba(23, 33, 43, 0.08), 0 22px 50px rgba(23, 33, 43, 0.14)",
        dock: "0 -14px 44px rgba(23, 33, 43, 0.16)",
      },
      fontFamily: {
        sans: ["Avenir Next", "Noto Sans SC", "Microsoft YaHei", "Segoe UI", "sans-serif"],
        display: ["Noto Serif SC", "Songti SC", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
