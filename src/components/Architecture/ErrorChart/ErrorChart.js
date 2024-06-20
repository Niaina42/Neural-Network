import { Paper } from "@mui/material";
import { LineChart } from "@mui/x-charts";
import React from "react";
import StyledPaper from "../../Common/StyledPaper/StyledPaper";

const ErrorChart = ({ valeurPropres }) => {
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
        }}
        series={[
          {
            data: valeurPropres,
          },
        ]}
        width={550}
        height={500}
      />
    </StyledPaper>
  );
};
export default ErrorChart;
