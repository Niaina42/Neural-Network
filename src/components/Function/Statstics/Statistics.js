import React, { useEffect, useState } from "react";
import { ScatterChart } from "@mui/x-charts/ScatterChart";

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
      width={800}
      height={500}
      series={[
        {
          data: data.map((v) => ({ x: v.x, y: v.y, id: v.id })),
        },
      ]}
    />
  );
};
export default Statistics;
