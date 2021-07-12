import { useState } from "react";

const initTheme = {
  overrides: {
    MuiCardContent: {
      root: {
        //padding: "8px",
        "&:last-child": {
          paddingBottom: 8,
        },
      },
    },
  },
  props: {
    MuiLink: {
      underline: "none",
      color: "textPrimary",
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 576,
      md: 768,
      lg: 992,
      xl: 1200,
    },
  },
  palette: {
    type: "light",
    primary: {
      main: "#333333",
      light: "#5c5c5c",
      dark: "#0c0c0c",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#f8d9e0",
      dark: "#c5a7ae",
      contrastText: "#333333",
    },
    text: {
      primary: "#333333",
      secondary: "#828282",
    },
  },
  typography: {
    body2: {
      fontWeight: "700",
    },
  },
};

const useDarkTheme = () => {
  const [theme, setTheme] = useState(initTheme);
  const {
    palette: { type },
  } = theme;

  const toggleTheme = () => {
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: type === "light" ? "dark" : "light",
        background: {
          //default: type === "dark" ? "#ebeff1" : "#303030",
        },
      },
    };

    setTheme(updatedTheme);
  };

  return [theme, toggleTheme];
};

export default useDarkTheme;
