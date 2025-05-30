/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        headerbackgroundcolor: "#f4f4f4",
        headertextcolor: "#272727",
        headertexthoverandactive: "#822EC8",
        backgroundcolor: "#faf3ef",
        primarytextcolor: "#333333",
        footerbackgrouncolor: "#cccccc",
        primary: "#822EC8",
        secondary: "#007acc",
        tertiary: "#2773A7",
        bordercolor: "rgb(255,173,140)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
        "custom-gradient":
          "linear-gradient(90deg, rgba(160, 136, 223, 0.257) 0%, rgba(218,218,218,0.6125043767507004) 100%)",
        "backgro-gradient":
          "linear-gradient(90deg, rgba(123, 83, 242, 0.568) 0%, rgba(152, 108, 213, 0.493) 100%);",
        "backgro-gradient-revert":
          "linear-gradient(90deg, rgba(164,164,164,0.6125043767507004) 0% ,rgba(123, 83, 242, 0.568) 100%);",
      },
    },
  },
  plugins: [],
};
