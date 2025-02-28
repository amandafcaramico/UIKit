/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        pulse: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
        shake: {
          "0%, 100%": { transform: "translateX(0)" },
          "25%": { transform: "translateX(-4px)" },
          "50%": { transform: "translateX(4px)" },
          "75%": { transform: "translateX(-4px)" },
        },
      },
      animation: {
        pulse: "pulse 1s infinite",
        shake: "shake 0.5s ease-in-out",
      },
      colors: {
        primary: {
          DEFAULT: "#4F46E5", // Indigo-600
        },
        secondary: {
          DEFAULT: "#9333EA", // Purple-600
        },
        state: {
          info: "#3B82F6", // Blue-600
          success: "#22C55E", // Green-500
          warning: "#FACC15", // Yellow-400
          error: "#DC2626", // Red-600
        },
        purple: {
          text: "#20207E",
          background: "#2E2836",
          disabled: "#A1A1E1",
        },
        "background-grey": {
          DEFAULT: "#1F2937",
        },
        "off-white": {
          DEFAULT: "#F3F4F6",
        },
        "off-black": {
          DEFAULT: "#0D0215",
        },
        "light-gray": {
          DEFAULT: "#D9D9D9",
        },
        "deep-dark": {
          DEFAULT: "#140A2E",
        },
      },
    },
  },
  variants: {
    fill: ["hover", "focus"],
  },
};
