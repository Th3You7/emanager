import { useEffect, useState } from "react";

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
    type: localStorage.getItem("theme") || "light",
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
      primary: !localStorage.getItem("theme")
        ? "#333333"
        : localStorage.getItem("theme") === "dark"
        ? "#fff"
        : "#333333",
      secondary: !localStorage.getItem("theme")
        ? "#828282"
        : localStorage.getItem("theme") === "dark"
        ? "rgba(255, 255, 255, 0.7)"
        : "#828282",
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
  const [type, setType] = useState("");
  useEffect(() => {
    const themeType = localStorage.getItem("theme");
    if (themeType) {
      themeType === "light" ? setType("light") : setType("dark");
    } else {
      setType("light");
      localStorage.setItem("theme", "light");
    }
  }, []);
  // const {
  //   palette: { type },
  // } = theme;

  const toggleTheme = () => {
    if (type === "light") {
      setType("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setType("light");
      localStorage.setItem("theme", "light");
    }
    const updatedTheme = {
      ...theme,
      palette: {
        ...theme.palette,
        type: localStorage.getItem("theme") || "light",
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
          primary: !localStorage.getItem("theme")
            ? "#333333"
            : localStorage.getItem("theme") === "dark"
            ? "#fff"
            : "#333333",
          secondary: !localStorage.getItem("theme")
            ? "#828282"
            : localStorage.getItem("theme") === "dark"
            ? "rgba(255, 255, 255, 0.7)"
            : "#828282",
        },
      },
    };

    setTheme(updatedTheme);
  };

  return [theme, toggleTheme];
};

export default useDarkTheme;
