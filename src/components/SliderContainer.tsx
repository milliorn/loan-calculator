import Slider from "@mui/material/Slider";
import { Typography } from "@mui/material";
import { Stack } from "@mui/system";

// Defining the type of props that this component will receive
type Props = {
  amount: number;
  defaultValue: number;
  label: string;
  max: number;
  min: number;
  onChange: any;
  steps: number;
  unit: string;
  value: number;
};

// Our custom slider control for our app
const SliderContainer = (props: Props) => {
  return (
    <>
      {/* "Stack" is a container to organize elements in a stack */}
      {/* Adds margin on the top and bottom of the stack */}
      <Stack my={4}>
        {/* Stack the label and the current value */}
        {/* Adds space between the label and value */}
        <Stack gap={1}>
          {/* "Typography" is a text element with style options from MUI */}
          {/* Here, we display the label for the slider */}
          <Typography variant="subtitle2">{props.label}</Typography>
          <Typography variant="h5">
            {/* Here, we display the current value */}
            {props.unit} {props.amount}
          </Typography>
        </Stack>
      </Stack>

      {/* "Slider" is a control that users interact with */}
      {/* It allows them to choose a value between the min and max values */}
      <Slider
        aria-label="Default"
        defaultValue={props.defaultValue}
        marks // This adds marks at specified values on the slider track
        max={props.max} // The maximum value for the slider
        min={props.min} // The minimum value for the slider
        onChange={props.onChange} // The function to call when the slider value changes
        step={props.steps} // The increment/decrement value for the slider
        value={props.value} // The current value of the slider
        valueLabelDisplay="auto" // This shows a label with the current value next to the thumb
      />

      {/* Horizontal container */}
      {/* It helps us arrange elements in a row with space in between */}
      <Stack direction="row" justifyContent="space-between">
        {/* Here, we display the minimum value with the unit */}
        <Typography variant="caption" color="text.secondary">
          {props.unit} {props.min}
        </Typography>
        {/* Here, we display the maximum value with the unit */}
        <Typography variant="caption" color="text.secondary">
          {props.unit} {props.max}
        </Typography>
      </Stack>
    </>
  );
};

export default SliderContainer;
