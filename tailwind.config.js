module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gameBlack: '#1a1a1a',
        gameGray: '#f5f5f5',
        gameAccent: '#ff6b6b',
      },
      fontFamily: {
        game: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Helvetica Neue', 'Hiragino Kaku Gothic ProN', 'メイリオ', 'sans-serif'],
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
        pulseSlow: 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        bounceSlow: 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
          '100%': { transform: 'translateY(0)' },
        }
      },
      backgroundImage: {
        ramen: "url('/img/ramen.svg')",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
