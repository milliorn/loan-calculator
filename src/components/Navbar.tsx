import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

// navigation bar component for our app
const Navbar = () => {
  return (
    // top bar navigation
    <AppBar position="static">
      {/* helps keep content centered */}
      {/* tells container to adjust width based on screen size */}
      <Container maxWidth="xl">
        {/* container for content inside AppBar */}
        {/* arrange elements in a row inside AppBar */}
        <Toolbar
          // Custom styles for the Toolbar component based on the screen size
          sx={{
            textAlign: "center", // Center the content horizontally
          }}
        >
          {/* text element with style options from MUI */}
          {/* "variant" prop changes font size, style, and "sx" is for additional custom styles */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Calculator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
