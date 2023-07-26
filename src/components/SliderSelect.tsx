import SliderContainer from "./SliderContainer";

// Define the Props type
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

const SliderSelect = (props: Props) => {
  // maximum limit for loan amount
  const loanLimit = 100000;

  return (
    <div>
      {/* Loan Amount Slider */}
      <SliderContainer
        onChange={(event: Event, value: number | number[]) => {
          if (typeof value === "number") {
            // Ensure loanAmount at least 1, at most the loanLimit
            const loanAmount = Math.min(Math.max(1, value), loanLimit);
            // Update state with new loanAmount value
            props.setData({
              ...props.data,
              loanAmount: Number(loanAmount.toFixed(0)),
            });
          }
        }}
        amount={props.data.loanAmount}
        defaultValue={props.data.loanAmount}
        label="Loan Amount"
        max={loanLimit}
        min={0}
        steps={100}
        unit="$"
        value={props.data.loanAmount}
      />

      {/* Interest Rate Slider */}
      <SliderContainer
        onChange={(event: Event, value: number | number[]) => {
          if (typeof value === "number") {
            // Update state with new interestRate value, rounded to 1 decimal place
            props.setData({
              ...props.data,
              interestRate: Number(value.toFixed(1)),
            });
          } else if (Array.isArray(value)) {
            // If the value is an array (should not happen in this case), take first element and update state
            props.setData({
              ...props.data,
              interestRate: Number(value[0].toFixed(1)),
            });
          }
        }}
        amount={props.data.interestRate}
        defaultValue={props.data.interestRate}
        label="Interest Rate"
        max={100} // Set maximum value to 100 (representing 100%)
        min={0} // Set minimum value to 0
        steps={0.1} // Set step size to 0.1 (representing 0.1%)
        unit="%"
        value={props.data.interestRate}
      />

      {/* Down Payment Slider */}
      <SliderContainer
        onChange={(event: Event, value: number | number[]) => {
          if (typeof value === "number") {
            // Ensure downPayment at least 0, at most the loanAmount
            // Update state with new downPayment value
            props.setData({
              ...props.data,
              downPayment: Number(
                Math.min(Math.max(0, value), props.data.loanAmount).toFixed(0)
              ),
            });
          }
        }}
        amount={props.data.downPayment}
        defaultValue={props.data.downPayment}
        label="Down Payment"
        max={props.data.loanAmount}
        min={0}
        steps={100}
        unit="$"
        value={props.data.downPayment}
      />
    </div>
  );
};

export default SliderSelect;
