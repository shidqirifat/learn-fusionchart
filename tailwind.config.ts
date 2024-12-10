import type { Config } from "tailwindcss";
import Colors from "tailwindcss/colors";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        gray: {
          ...Colors.gray,
          DEFAULT: "#D2D2D2",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
