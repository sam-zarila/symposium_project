import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'scroll-left-to-right': 'scrollLeftToRight 20s linear infinite',
        'scroll-right-to-left': 'scrollRightToLeft 20s linear infinite',
      },
      keyframes: {
        scrollLeftToRight: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
        scrollRightToLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
    
  },
  plugins: [],
} satisfies Config;
