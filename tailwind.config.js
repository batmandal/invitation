/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        upthenscale: {
          "0%": { transform: "translateY(250px)" },
          "50%": { transform: "translateY(0)" },
          "60%": { height: "100px", width: "90px", transform: "translateY(0)" },
          "100%": {
            height: "250px",
            width: "100%",
            transform: "translateY(0)",
          },
        },
        scalethendown: {
          "0%": { height: "250px", width: "100%", transform: "translateY(0)" },
          "50%": { height: "100px", width: "90px", transform: "translateY(0)" },
          "60%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(250px)" },
        },
        waitfade: {
          "0%, 50%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        wiggle: {
          "0%": { transform: "translateY(310px) rotate(0)" },
          "25%": { transform: "translateY(310px) rotate(2deg)" },
          "50%": { transform: "translateY(310px) rotate(0deg)" },
          "75%": { transform: "translateY(310px) rotate(-2deg)" },
          "100%": { transform: "translateY(310px) rotate(0)" },
        },
      },
      animation: {
        upthenscale: "upthenscale 0.6s forwards",
        scalethendown: "scalethendown 0.4s forwards",
        waitfade: "waitfade 1.5s forwards",
        wiggle: "wiggle 0.3s 0.2s infinite",
      },
    },
  },
  plugins: [],
};
