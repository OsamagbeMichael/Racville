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
        brand: {
          dark:    "#0f5c2e", // deep forest green — navbar, footer, dark sections
          DEFAULT: "#1a7a3c", // primary green — headings, icons
          mid:     "#2db84b", // bright green — accent text, highlighted words
          light:   "#e8f7ed", // pale green — stats bg, hover tints
          btn:     "#1db954", // CTA button green
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["'Montserrat'", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(to right, rgba(0,0,0,0.72) 38%, rgba(0,0,0,0.18) 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
