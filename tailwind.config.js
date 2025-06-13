/* eslint-disable @typescript-eslint/naming-convention */
module.exports = {
  content: ["./pages/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gameBlack: "#1a1a1a",
        gameGray: "#f5f5f5",
        gameAccent: "#ff6b6b",
        // Professional gradient colors
        primary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
        },
        neutral: {
          50: "#fafafa",
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
      },
      fontFamily: {
        game: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Helvetica Neue",
          "Hiragino Kaku Gothic ProN",
          "メイリオ",
          "sans-serif",
        ],
      },
      animation: {
        float: "float 3s ease-in-out infinite",
        pulseSlow: "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        bounceSlow: "bounce 2s infinite",
        fadeInUp: "fadeInUp 0.8s ease-out forwards",
        fadeInScale: "fadeInScale 1s ease-out forwards",
        slideInLeft: "slideInLeft 0.6s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          from: { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
          to: { transform: "translateY(0)" },
        },
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        fadeInScale: {
          from: { opacity: "0", transform: "scale(0.95)" },
          to: { opacity: "1", transform: "scale(1)" },
        },
        slideInLeft: {
          from: { opacity: "0", transform: "translateX(-30px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
        shimmer: {
          from: { backgroundPosition: "-200% 0" },
          to: { backgroundPosition: "200% 0" },
        },
      },
      backgroundImage: {
        ramen: "url('/img/ramen.svg')",
        heroGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        professionalGradient:
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        blueGradient: "linear-gradient(135deg, #4f46e5 0%, #06b6d4 100%)",
        shimmer:
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
      },
      backgroundSize: {
        size200: "200% 100%",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
  ],
};
