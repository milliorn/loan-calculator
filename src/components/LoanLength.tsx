import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

// Define the Props
type Props = {
  data: {
    downPayment: number;
    interestRate: number;
    loanAmount: number;
    loanTerm: number;
  };
  setData: React.Dispatch<
    React.SetStateAction<{
      downPayment: number;
      interestRate: number;
      loanAmount: number;
      loanTerm: number;
    }>
  >;
};

const LoanLength = (props: Props) => {
  // called when the user selects a new loan term
  const handleChange = (event: { target: { value: any } }) => {
    // Update state in parent component with selected value
    props.setData({ ...props.data, loanTerm: event.target.value });
  };

  return (
    // create a form control
    <FormControl fullWidth sx={{ marginY: 4 }}>
      {/* creates a label the Select */}
      <InputLabel id="loan-length-select-label">Tenure</InputLabel>
      {/* provides dropdown menu for user to select loan term */}
      <Select
        // Set labelId to associate label with Select
        labelId="loan-length-select-label"
        id="loan-length-select"
        // Set current value of Select to loanTerm from props
        value={props.data.loanTerm}
        label="Loan Length"
        // Set default value for Select to 1
        defaultValue={1}
        // Call function when user selects a new value
        onChange={handleChange}
      >
        {/* Define available options */}
        <MenuItem value={1}>1 year</MenuItem>
        <MenuItem value={2}>2 years</MenuItem>
        <MenuItem value={3}>3 years</MenuItem>
        <MenuItem value={4}>4 years</MenuItem>
        <MenuItem value={5}>5 years</MenuItem>
        <MenuItem value={6}>6 years</MenuItem>
        <MenuItem value={7}>7 years</MenuItem>
        <MenuItem value={8}>8 years</MenuItem>
        <MenuItem value={9}>9 years</MenuItem>
        <MenuItem value={10}>10 years</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LoanLength;
