import { createTheme } from "@mui/material";

// create a new theme for our user interface (UI) and give it a name "theme".
export const theme = createTheme({
  // "palette" is like a box of colors we can use.
  palette: {
    // setting the mode of the theme to "dark".
    mode: "dark",
    // primary color. This color is used for important things, like buttons and headings.
    primary: {
      main: "#f44336",
    },
    // secondary color is used for other things, like links and some other elements.
    secondary: {
      main: "#3f51b5",
    },
  },
});
