import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./index.css";

// Importing a theme object that contains styling instructions for our app
import { theme } from "../theme";

// Creating a root element on the HTML page where our app will be rendered
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Wrapping our app with "React.StrictMode" to perform extra checks in development mode
  <React.StrictMode>
    {/* The "ThemeProvider" component for styling our app with the "theme" object */}
    <ThemeProvider theme={theme}>
      {/* The "App" component that contains our app's UI */}
      <App />
      {/* The "CssBaseline" component for resetting browser's default styles */}
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
