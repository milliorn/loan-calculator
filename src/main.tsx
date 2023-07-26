import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

// contains styling instructions for our app
import { theme } from "../theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // Wrapping our app with "React.StrictMode" to perform extra checks in development mode
  <React.StrictMode>
    {/* styling our app with the "theme" object */}
    <ThemeProvider theme={theme}>
      {/* contains our app's UI */}
      <App />
      {/* resetting browser's default styles */}
      <CssBaseline />
    </ThemeProvider>
  </React.StrictMode>
);
