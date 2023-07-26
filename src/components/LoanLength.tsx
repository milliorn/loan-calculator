import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
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
    // Update state in the parent component with the selected value
    props.setData({ ...props.data, loanTerm: event.target.value });
  };

  // An array to define available loan terms and their corresponding labels
  const loanTerms = [
    { value: 1, label: "1 year" },
    { value: 2, label: "2 years" },
    { value: 3, label: "3 years" },
    { value: 4, label: "4 years" },
    { value: 5, label: "5 years" },
    { value: 6, label: "6 years" },
    { value: 7, label: "7 years" },
    { value: 8, label: "8 years" },
    { value: 9, label: "9 years" },
    { value: 10, label: "10 years" },
    { value: 15, label: "15 years" },
    { value: 20, label: "20 years" },
    { value: 25, label: "25 years" },
    { value: 30, label: "30 years" },
  ];

  return (
    // create a form control
    <FormControl fullWidth sx={{ marginY: 4 }}>
      {/* creates a label for the Select */}
      <InputLabel id="loan-length-select-label">Tenure</InputLabel>
      {/* provides a dropdown menu for the user to select a loan term */}
      <Select
        // Set the default value for the Select to 1
        defaultValue={1}
        id="loan-length-select"
        // Set labelId to associate the label with the Select
        label="Loan Length"
        labelId="loan-length-select-label"
        // Call the function when the user selects a new value
        onChange={handleChange}
        // Set the current value of the Select to loanTerm from props
        value={props.data.loanTerm}
      >
        {/* Dynamically generate menu items based on the loanTerms array */}
        {loanTerms.map((term) => (
          <MenuItem key={term.value} value={term.value}>
            {term.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default LoanLength;
