/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: "Poppins",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(244.6deg, #7545FB 14.17%, #2A3FCC 92.43%)",
      },
    },
  },
  plugins: [],
};
