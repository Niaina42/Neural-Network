import { LineChart } from "@mui/x-charts";
import React from "react";
import StyledPaper from "../../Common/StyledPaper/StyledPaper";

const PredictChart = ({ expected, predicted }) => {
  return (
    <StyledPaper>
      <LineChart
        sx={{
          "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
            fill:"#FFFFFF"
          },
          "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
            fill:"#FFFFFF"
           },
           "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
            stroke:"#FFFFFF"
           },
           "& .MuiChartsAxis-left .MuiChartsAxis-line":{
            stroke:"#FFFFFF"
           },
           "& .MuiChartsAxis-left .MuiChartsAxis-tick":{
            stroke:"#FFFFFF"
           },
           "& .MuiChartsAxis-bottom .MuiChartsAxis-tick":{
            stroke:"#FFFFFF"
           },
           "& .MuiChartsLegend-series": {
            color: "white"
           }
        }}
        series={[
          { label: "Valeur prédite", curve: "natural", data: predicted, color: "#f28e2c" },
          { label: "Valeur attendue",curve: "natural", data: expected },
        ]}
        height={500}
      />
    </StyledPaper>
  );
};

export default PredictChart;