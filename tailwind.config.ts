import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgColor: "#FFF5EE",
        mainColor: "#000000",
        mainColorLight: "#171717",
        secondaryColor: "#ffffff",
        activeColorG: "#B0CFB1",
        activeColorB: "#8CBFE2",
        activeColorR: "#FDD0B0",
        activeColorRBetween: "#FFEBDD",
        activeColorRDark: "#fdd0b0",
      },
    },
  },
  plugins: [],
};
export default config;
