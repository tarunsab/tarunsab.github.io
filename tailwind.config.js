/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Neue Montreal"', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        display: ['"Neue Montreal"', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        dennis: {
          dark: '#1C1D20',
          darker: '#141517',
          light: '#FFFFFF',
          gray: '#999D9E',
          lightgray: '#E9EAEB',
          offwhite: '#F4F4F4',
          blue: '#455CE9',
          bluedark: '#334BD3',
          border: 'rgba(28, 29, 32, 0.175)',
          borderLight: 'rgba(255, 255, 255, 0.175)',
        },
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
