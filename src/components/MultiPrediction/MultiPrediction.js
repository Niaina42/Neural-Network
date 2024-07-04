import React, { useEffect, useState } from "react";
import { Box, Grid, Typography } from "@mui/material";
import Layout from "../Common/Layout/Layout";
import StyledTitle from "../Common/StyledTitle/StyledTitle";
import Table from "../Common/Table/Table";
import PredictChart from "./PredictChart/PredictChart";
import { styled } from "@mui/material/styles";

const ChangeBox = styled(Box)(({ theme }) => ({
  borderRadius: 3,
  padding: "6px 15px",
  cursor: "pointer",
}));

const MultiPrediction = ({ prediction }) => {
  const [expectedValues, setExpectedValues] = useState([]);
  const [predictedValues, setPredictedValues] = useState([]);
  const [pasActive, setPasActive] = useState(3);
  const [data, setData] = useState([]);

  const changePas = (pas) => {
    setPasActive(pas);
  };

  useEffect(() => {
    if (prediction) {
      let pred = prediction.plusieursPas(10, 0);
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
    <Layout title={"Prédiction plusieurs pas"}>
      <Box
        sx={{ display: "flex", justifyContent: "space-around", width: "100%" }}
      >
        <ChangeBox
          onClick={() => changePas(3)}
          mb={5}
          sx={{
            background: pasActive == 3 ? "#9c27b0" : "#eeeeee",
            color: pasActive == 3 ? "white" : "#9c27b0",
          }}
        >
          <Typography variant="body1">3 pas</Typography>
        </ChangeBox>
        <ChangeBox
          onClick={() => changePas(10)}
          mb={5}
          sx={{
            background: pasActive == 10 ? "#9c27b0" : "#eeeeee",
            color: pasActive ==  10 ? "white" : "#9c27b0",
          }}
        >
          <Typography variant="body1">10 pas</Typography>
        </ChangeBox>{" "}
        <ChangeBox
          onClick={() => changePas(20)}
          mb={5}
          sx={{
            background: pasActive == 20 ? "#9c27b0" : "#eeeeee",
            color: pasActive == 20 ? "white" : "#9c27b0",
          }}
        >
          <Typography variant="body1">20 pas</Typography>
        </ChangeBox>
      </Box>
      <Grid container mb={5}>
        <Grid item xs={12} md={12}>
          <StyledTitle title={`Prédiction ${pasActive} pas`} />
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

export default MultiPrediction;
