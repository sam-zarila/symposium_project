import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      animation: {
        'move-left-to-right': 'moveLeftToRight 15s linear infinite',
        'move-left-to-right-sm': 'moveLeftToRight 10s linear infinite', // Faster for small screens
        'move-right-to-left': 'moveRightToLeft 15s linear infinite',
        'move-right-to-left-sm': 'moveRightToLeft 10s linear infinite', // Faster for small screens
      },
      keyframes: {
        moveLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        moveRightToLeft: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
