/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        rubik: ['Rubik', 'sans-serif'],
      },
      extend: {},
      screens: {
        xs: "375px",
        xss: "410px",
        ssm: "530px",
        sm: "640px",
        md: "768px",
        smd: "890px",
        lmd: "990px",
        lg: "1024px",
        xl: "1150px",
        "2xl": "1536px",
        "3xl": "1890px",
      },
    },
  },
  plugins: [],
}

