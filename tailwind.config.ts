import type { Config } from "tailwindcss";

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
        primary: "#2df",
        secondary: "#72f",
        tertiary: "hsl(20, 20, 90)",
        quaternary: "#dee2e6",
        dark: "#111111",
        light: "#f8f9fa",
        gray: {
          lightest: "#f3f4f6",
          light: "#e9ecef",
          DEFAULT: "#dee2e6",
          dark: "#ced4da",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      backgroundImage: {
        game: "url('/1.webp')",
        gradientcolor: "linear-gradient(to bottom, #2fe, #52f)",
        logo: "url('/Dot.webp')",
        progr: "url('/channels4_banner.webp')",
        guitar: "url('/guitar.webp')",
        music: "url('/channels_music_banner.webp')",
        clips: "url('/channel_clips_banner.webp')",
        antro: "url('/channel_antro_banner.webp')",
      },
      textColor: {
        colortext: "#dadada",
      },
    },
  },
  plugins: [],
} satisfies Config;
