import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#19212c",
        slateblue: "#334155",
        paper: "#f8fbff",
        mist: "#eaf5ff",
        harbor: "#235a74",
        copper: "#b86b39",
        spruce: "#2e6d58",
      },
      boxShadow: {
        soft: "0 1px 0 rgba(25, 33, 44, 0.05), 0 10px 24px rgba(25, 33, 44, 0.06)",
        lifted: "0 1px 0 rgba(25, 33, 44, 0.08), 0 8px 16px rgba(25, 33, 44, 0.10)",
      },
      fontFamily: {
        sans: ["Noto Sans SC", "Microsoft YaHei", "Segoe UI", "sans-serif"],
        display: ["Georgia", "Times New Roman", "Noto Serif SC", "serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
