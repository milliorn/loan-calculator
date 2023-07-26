import { Typography } from "@mui/material";
import Slider from "@mui/material/Slider";
import { Stack } from "@mui/system";

// Define the prop types
type Props = {
  amount: number;
  defaultValue: number;
  label: string;
  max: number;
  min: number;
  onChange: (event: Event, value: number | number[]) => void; // Event handler function that receives the event and slider value
  steps: number;
  unit: string;
  value: number; // current value of the slider
};

// renders the slider UI
function SliderContainer(props: Props) {
  return (
    <>
      {/* Stack for label and value display */}
      <Stack my={2}>
        <Stack gap={2}>
          {/* label for slider */}
          <Typography variant="subtitle2">{props.label}</Typography>
          {/* current value of slider */}
          <Typography variant="h6">
            {props.unit} {props.amount}
          </Typography>
        </Stack>
      </Stack>

      {/* Material-UI */}
      <Slider
        aria-label="Default"
        defaultValue={props.defaultValue} // initial value of slider
        marks // Display marks on slider track
        max={props.max} // maximum value of slider
        min={props.min} // minimum value of slider
        onChange={props.onChange} // update value when slider is moved
        step={props.steps} // step size which the slider value changes
        value={props.value} // current value of slider
        valueLabelDisplay="auto" // value label next to slider thumb
      />

      {/* Stack to min and max values of the slider */}
      <Stack direction="row" justifyContent="space-between">
        {/* minimum value with the unit */}
        <Typography variant="caption" color="text.secondary">
          {props.unit} {props.min}
        </Typography>
        {/* maximum value with the unit */}
        <Typography variant="caption" color="text.secondary">
          {props.unit} {props.max}
        </Typography>
      </Stack>
    </>
  );
}

export default SliderContainer;
