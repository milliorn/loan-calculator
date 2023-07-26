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

  // Create an array of slider configurations
  const sliders = [
    {
      label: "Loan Amount",
      max: loanLimit,
      min: 0,
      steps: 100,
      unit: "$",
      value: props.data.loanAmount,
      onChange: (event: Event, value: number | number[]) => {
        if (typeof value === "number") {
          // Ensure loanAmount at least 1, at most the loanLimit
          const loanAmount = Math.min(Math.max(1, value), loanLimit);
          // Update state with new loanAmount value
          props.setData({
            ...props.data,
            loanAmount: Number(loanAmount.toFixed(0)),
          });
        }
      },
    },
    {
      label: "Interest Rate",
      max: 100,
      min: 0,
      steps: 0.1,
      unit: "%",
      value: props.data.interestRate,
      onChange: (event: Event, value: number | number[]) => {
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
      },
    },
    {
      label: "Down Payment",
      max: props.data.loanAmount,
      min: 0,
      steps: 100,
      unit: "$",
      value: props.data.downPayment,
      onChange: (event: Event, value: number | number[]) => {
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
      },
    },
  ];

  return (
    <div>
      {/* Map over the sliders array and render each SliderContainer */}
      {sliders.map((slider, index) => (
        <SliderContainer
          amount={slider.value}
          defaultValue={slider.value}
          key={index} // Add a unique key for each slider
          label={slider.label}
          max={slider.max}
          min={slider.min}
          onChange={slider.onChange}
          steps={slider.steps}
          unit={slider.unit}
          value={slider.value}
        />
      ))}
    </div>
  );
};

export default SliderSelect;
