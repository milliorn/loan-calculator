import { Stack, Typography } from "@mui/material";
import { ArcElement, Chart as ChartJS, Legend, Tooltip } from "chart.js";
import { Pie } from "react-chartjs-2";

type Props = {
  data: {
    downPayment: number;
    interestRate: number;
    loanAmount: number;
    loanTerm: number;
  };
};

ChartJS.register(ArcElement, Tooltip, Legend); // register chart.js components

const ChartResults = (props: Props) => {
  const { downPayment, interestRate, loanAmount, loanTerm } = props.data; // destructure data from props

  const interestPerMonth = interestRate / 12 / 100; // calculate interest per month
  const loanAmountWithDownPayment = loanAmount - downPayment; // adjust loan amount with down payment
  const totalLoanMonths = loanTerm * 12; // calculate total number of months for loan term

  const monthlyPayment =
    (loanAmountWithDownPayment *
      interestPerMonth *
      (1 + interestPerMonth) ** totalLoanMonths) /
    ((1 + interestPerMonth) ** totalLoanMonths - 1); // calculate monthly payment

  const totalInterest =
    monthlyPayment * totalLoanMonths - loanAmountWithDownPayment; // calculate total interest

  // define data for pie chart
  const pieChartData = {
    labels: ["Total Loan Amount", "Total Interest"],
    datasets: [
      {
        backgroundColor: ["#FF6384", "#36A2EB"],
        borderColor: ["#FF6384", "#36A2EB"],
        borderWidth: 1,
        data: [loanAmountWithDownPayment, totalInterest],
        hoverOffset: 4,
        label: "Total Loan Amount",
        responsive: true,
      },
    ],
  };

  const monthlyTotal =
    monthlyPayment.toFixed(2) === "NaN" ? "0.00" : monthlyPayment.toFixed(2); // format monthly payment

  return (
    <Stack sx={{ width: "100%" }} spacing={2} gap={2}>
      <Typography variant="h4" textAlign={"center"}>
        Monthly Payment: ${monthlyTotal}
      </Typography>
      <Stack direction={"row"} spacing={2} justifyContent={"center"}>
        <div>
          <Pie data={pieChartData} />
        </div>
      </Stack>
    </Stack>
  );
};

export default ChartResults;
