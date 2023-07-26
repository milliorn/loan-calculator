import ChartResults from "./components/ChartResults";
import LoanLength from "./components/LoanLength";
import Navbar from "./components/Navbar";
import SliderSelect from "./components/SliderSelect";

import { Grid } from "@mui/material";
import { Container } from "@mui/system";

import { useState } from "react";

function App() {
  const [data, setData] = useState({
    downPayment: 0,
    interestRate: 0,
    loanAmount: 0,
    loanTerm: 1,
  });

  return (
    <div className="App">
      <Navbar />

      {/* helps keep our content centered */}
      {/* "sx" prop is for additional custom styles */}
      <Container maxWidth="xl" sx={{ marginTop: 4 }}>
        {/* grid system that organize content */}
        {/* The "container" tells Grid to be the main container */}
        <Grid container spacing={5} alignItems="center">
          {/* "Grid" items are cells in the grid system */}
          {/* "xs" prop specifies item's size for extra-small screens */}
          {/* "md" prop specifies item's size for medium screens */}
          <Grid item xs={12} sm={6}>
            {/* displayed in the left half of the screen for medium screens */}
            <SliderSelect data={data} setData={setData} />
            <LoanLength data={data} setData={setData} />
          </Grid>
          <Grid item xs={12} sm={6}>
            {/* displayed in the right half of the screen for medium screens */}
            <ChartResults data={data} />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
