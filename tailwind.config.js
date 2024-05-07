/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '540px',
        // tablet
        md: '768px',
        // tablet
        lg: '1024px',
        // tablet grande e notebook pequeno
        xl: '1280px',
        // notebook
        '2xl': '1536px',
        // desktop
      },
      colors: {
        nbwhite: "#ffffff",
        nbblack: "#000000",
        nbgreydark: "#2b535d",
        nbgreymiddark: "#517a86",
        nbgreymain: "#90b0b9",
        nbgreylight: "#e9eff0",
        nbgreendark: "#186a5c",
        nbgreenmain: "#46bea4",
        nbgreenlight: "#9ed8d2",
        nbbluedark: "#117094",
        nbbluemain: "#31aff6",
        nbbluelight: "#98ddf6",
        nbpurpledark: "#241a9a",
        nbpurplemain: "#5f52f1",
        nbpurplelight: "#c9b9f8",
        nbpinkdark: "#a47d7d",
        nbpinkmain: "#fdb09f",
        nbpinklight: "#ffd7d7",
        nbreddark: "#a0250a",
        nbredmain: "#f4451e",
        nbredlight: "#fbd0b8",
        nbyellowdark: "#736309",
        nbyellowmain: "#ebc90d",
        nbyellowlight: "#f8eba3",
        nborangedark: "#b87108",
        nborangemain: "#e9a743",
        nborangelight: "#ffe1b5",
      },
      fontFamily: {
        "h1-primetitle": ['"Vampiro One"', "Helvetica", "sans-serif"],
        "h2-title": [
          '"Chakra Petch"',
          "Helvetica",
          "sans-serif",
          "ui-sans-serif",
          "system-ui",
        ],
        "h3-subtitle": ['"Space Mono"', "ui-serif", "Georgia"],
        "h4-lead": ['"Source Code Pro"', "u-monospace", "SFMono-Regular"],
        "p-paragraph": ['"Libre Franklin"', "Helvetica", "sans-serif"],
        "a-anchor": [
          '"Chakra Petch"',
          "Helvetica",
          "sans-serif",
          "ui-sans-serif",
          "system-ui",
        ],
        "button": [
          '"Chakra Petch"',
          "Helvetica",
          "sans-serif",
          "ui-sans-serif",
          "system-ui",
        ],
      },
    },
  },
  plugins: [],
};
