/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: ({ opacityValue }) =>
          `rgba(var(--primary), ${opacityValue || 1})`,
        secondary: ({ opacityValue }) =>
          `rgba(var(--secondary), ${opacityValue || 1})`,
        "primary-accent": ({ opacityValue }) =>
          `rgba(var(--primary-accent), ${opacityValue || 1})`,
        "secondary-accent": ({ opacityValue }) =>
          `rgba(var(--secondary-accent), ${opacityValue || 1})`,
        "green-accent": ({ opacityValue }) =>
          `rgba(var(--green-accent), ${opacityValue || 1})`,
        "gray-accent": ({ opacityValue }) =>
          `rgba(var(--gray-accent), ${opacityValue || 1})`,
        "black-accent": ({ opacityValue }) =>
          `rgba(var(--black-accent), ${opacityValue || 1})`,
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
    screens: {
      sm: "480px",
      md: "840px",
      lg: "1024px",
      xl: "1240px",
    },
  },
  plugins: [],
};
