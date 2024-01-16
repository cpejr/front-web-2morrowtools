const theme = "Darks";
export const colors = {
  blue: {
    background: theme === "Dark" ? "#080B10" : "#F4EFF9",
    accent: "#013C9D",
    light: "#639dff",
    accentShadow: "rgba(1, 60, 157, 0.25)",
    dark: "#232A36",
    hover: "#1655BC",
    whiteBlue: theme === "Dark" ? "#FFF" : "#240079",
  },
  grey: {
    cardBackground: theme === "Dark" ? "#111720" : "#FFF",
    veryLight: "#d9d9d9",
    cardHover: theme === "Dark" ? "#1c2431" : "#FFF",
  },
  white: theme === "Dark" ? "#FFF" : "#000",
  black: theme === "Dark" ? "#000" : "#FFF",
  veryLightGrey: "#d9d9d9",
  transparent: "rgba(0, 0, 0, 0)",
  shadow: "rgba(0, 0, 0, 0.25)",
  boxShadow: "#1A212D",
};

export const fonts = {
  Exo2: "'Exo 2', sans-serif",
};

export const breakpoints = {
  desktop: "1370px",
  tablet: "1024px",
  smallTablet: "800px",
  mobile: "700px",
  smallMobile: "500px",
  smallDevice: "350px",
};
