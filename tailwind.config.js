/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          50: '#F0F6FE',
          100: '#DEEBFB',
          200: '#C4DDF9',
          300: '#9CC8F4',
          400: '#6DA9ED',
          500: '#4B89E6',
          600: '#366CDA',
          700: '#2D59C8',
          800: '#2B49A2',
          900: '#274181',
          950: '#243464',
        },
        secondary: {
          50: '#FEF8EC',
          100: '#FCEDC9',
          200: '#F8D98F',
          300: '#F3B944',
          400: '#F1A82E',
          500: '#EA8616',
          600: '#CF6310',
          700: '#AC4511',
          800: '#8C3514',
          900: '#732D14',
          950: '#421506',
        },
        natural_gray: {
          50: '#F5F7F8',
          100: '#F0F2F5',
          200: '#DEE3E7',
          300: '#C9D0D8',
          400: '#B2BBC7',
          500: '#98A2B3',
          600: '#878FA4',
          700: '#747B8E',
          800: '#5F6574',
          900: '#50545F',
          950: '#2F3237',
        },
      },
      fontFamily: {
        'iransansNum': ['IRANSansXFaNum', 'sans-serif'],
        'iransans': ['IranSans', 'sans-serif'],
        'morabba': ['morabba', 'sans-serif'],
        'Inner': ['Inner', 'sans-serif'],
        'Metal': ['Metal', 'sans-serif'],
        'josefin': ['josefin', 'sans-serif'],
        sans: [
          {
            fontFeatureSettings: '"cv11", "ss01"',
            fontVariationSettings: '"opsz" 32'
          },
        ],
      },
    },
  },
  plugins: [require("@nextui-org/react")],
};
