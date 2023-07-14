/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "header-section": "url('/images/header-section-bg-image.jpg')",
      },
      colors: {
        primaryColor: {
          light: "#e8fbfb",
          DEFAULT: "#00c2c5",
        },
        textColor: {
          primary: {
            day: "#152f2e",
            night: "#ffffff",
          },
          secondary: {
            day: "#90adac",
            night: "#ffffff",
          },
        },
        backgroundColor: {
          day: "#ffffff",
          night: "#000000",
          primary: "#152f2e",
          card: {
            day: "#ebebeb",
            night: "#1f2028",
          },
        },
        error: "#ff3333",
        borderColor: {
          DEFAULT: "#d4d4d4",
        },
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
