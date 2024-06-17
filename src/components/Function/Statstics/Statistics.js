import React, { useEffect, useState } from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

const chartStyle = {
  //change left yAxis label styles
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel":{
    fill:"#FFFFFF"
  },
  // change bottom label styles
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel":{
      fill:"#FFFFFF"
   },
    // bottomAxis Line Styles
   "& .MuiChartsAxis-bottom .MuiChartsAxis-line":{
    stroke:"#FFFFFF",
   },
   // leftAxis Line Styles
   "& .MuiChartsAxis-left .MuiChartsAxis-line":{
    stroke:"#FFFFFF",
   },
   "& .MuiChartsAxis-left .MuiChartsAxis-tick":{
    stroke:"#FFFFFF",
   },
   "& .MuiChartsAxis-bottom .MuiChartsAxis-tick":{
    stroke:"#FFFFFF",
   },
}

const Statistics = ({ architecture }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const values = architecture.generateValues(500);

    let parsedValue = values[0].map((x, index) => {
      return {
        id: index,
        x: x,
        y: values[1][index],
      };
    });
    setData(parsedValue);
  }, []);

  return (
    <ScatterChart
      width={550}
      height={500}
      series={[
        {
          data: data.map((v) => ({ x: v.x, y: v.y, id: v.id })),
        },
      ]}
      sx={chartStyle}
    />
  );
};
export default Statistics;