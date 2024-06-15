import { Paper } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";

const ErrorChart = ({ valeurPropres }) => {
  return (
    <Paper
      sx={{ display: "flex", justifyContent: "center", width: "100%" }}
      elevation={0}
    >
      <LineChart
        series={[
          {
            data: valeurPropres,
          },
        ]}
        width={800}
        height={600}
      />
    </Paper>
  );
};
export default ErrorChart;
