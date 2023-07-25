import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";

// Define the type of props this component will receive (it doesn't receive any props in this case)
type Props = {};

// custom-made navigation bar for our app
const Navbar = (props: Props) => {
  return (
    // The "AppBar" component from MUI is like the top bar of our navigation
    // It's like a header or a menu at the top of the app
    <AppBar position="static">
      {/* The "Container" component helps keep our content centered */}
      {/* The "maxWidth" prop tells the container to adjust its width based on screen size */}
      <Container maxWidth="xl">
        {/* The "Toolbar" component is a container for the content inside the AppBar */}
        {/* It helps arrange the elements in a row inside the AppBar */}
        <Toolbar>
          {/* The "Typography" component is a text element with style options from MUI */}
          {/* The "variant" prop changes the font size and style, and "sx" is for additional custom styles */}
          <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
            Loan Calculator
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
