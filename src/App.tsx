import "./App.css";
import Navbar from "./components/Navbar";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";

function App() {
  return (
    <div className="App">
      <Navbar />

      {/* The "Container" component helps keep our content centered */}
      {/* The "sx" prop is for additional custom styles */}
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        {/* The "Grid" component is a grid system that organize content */}
        {/* The "container" tells Grid to be the main container */}
        <Grid container spacing={5} alignItems="center">
          {/* The "Grid" items are cells in the grid system */}
          {/* The "xs" prop specifies the item's size for extra-small screens */}
          {/* The "md" prop specifies the item's size for medium screens */}
          <Grid item xs={12} md={6}>
            {/* This will be displayed in the left half of the screen for medium screens */}
          </Grid>
          <Grid item xs={12} md={6}>
            {/* This will be displayed in the right half of the screen for medium screens */}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
