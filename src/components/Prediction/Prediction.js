import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import Layout from "../Common/Layout/Layout";
import StyledTitle from "../Common/StyledTitle/StyledTitle";
import Table from "../Common/Table/Table";
import PredictChart from "./PredictChart/PredictChart";

const Prediction = ({ prediction }) => {
  const [expectedValues, setExpectedValues] = useState([]);
  const [predictedValues, setPredictedValues] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    if (prediction) {
      let pred = prediction.unPas(10, 0);
      let tableData = [];
      setExpectedValues(pred[1]);
      setPredictedValues(pred[0]);
      pred[0].forEach((predicted, idx) => {
        tableData.push({
          id: parseInt(idx) + 1,
          expected: pred[1][idx].toFixed(7),
          predicted: predicted.toFixed(7),
          ecart: Math.abs(predicted - pred[1][idx]).toFixed(7),
        });
      });
      setData(tableData);
    }
  }, []);

  return (
    <Layout title={"Prediction un pas"}>
      <Grid container mb={5}>
        <Grid item xs={12} md={12}>
          <StyledTitle title={"Prédiction un pas pour 10 valeurs"} />
          <Table
            columns={[
              {
                field: "id",
                headerName: "Itération",
                flex: 1.5,
              },
              {
                field: "expected",
                headerName: "Valeurs attendues",
                flex: 1.5,
              },
              {
                field: "predicted",
                headerName: "Valeurs prédites",
                flex: 1,
                sortable: false,
              },
              {
                field: "ecart",
                headerName: "Écarts",
                flex: 1,
                sortable: false,
              },
            ]}
            rows={data}
          />
        </Grid>
      </Grid>
      <Grid container mb={5}>
        <Grid item xs={12} md={12}>
          <StyledTitle title={"Représentation graphique"} />
          <PredictChart expected={expectedValues} predicted={predictedValues} />
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Prediction;
