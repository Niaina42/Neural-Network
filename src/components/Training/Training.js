import { Grid, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../Common/Table/Table";
import { LineChart } from "@mui/x-charts";
import StyledPaper from "../Common/StyledPaper/StyledPaper";
import Layout from "../Common/Layout/Layout";
import StyledTitle from "../Common/StyledTitle/StyledTitle";

const chartStyle = {
  //change left yAxis label styles
  "& .MuiChartsAxis-left .MuiChartsAxis-tickLabel": {
    fill: "#FFFFFF",
  },
  // change bottom label styles
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tickLabel": {
    fill: "#FFFFFF",
  },
  // bottomAxis Line Styles
  "& .MuiChartsAxis-bottom .MuiChartsAxis-line": {
    stroke: "#FFFFFF",
  },
  // leftAxis Line Styles
  "& .MuiChartsAxis-left .MuiChartsAxis-line": {
    stroke: "#FFFFFF",
  },
  "& .MuiChartsAxis-left .MuiChartsAxis-tick": {
    stroke: "#FFFFFF",
  },
  "& .MuiChartsAxis-bottom .MuiChartsAxis-tick": {
    stroke: "#FFFFFF",
  },
};

const Training = ({ architecture, apprentissage }) => {
  const navigate = useNavigate();
  const [weightValue, setWeightValue] = useState([]);
  const [initialWeightValue, setinitialWeightValue] = useState([]);
  const [errorNMSE, setErrorNMSE] = useState([]);
  const [errorLine, setErrorLine] = useState([]);

  const applyInitialWeigth = () => {
    const initialW = apprentissage.gradient.initialW;
    let poids = [];
    initialW.forEach((firstElement, firstIdx) => {
      firstElement.forEach((secondElement, secondIdx) => {
        secondElement.forEach((thirdElement, thirdIdx) => {
          poids.push({
            id: `W${firstIdx + 1}<${secondIdx + 1},${thirdIdx + 1}>`,
            w: `W${firstIdx + 1}<${secondIdx + 1},${thirdIdx + 1}>`,
            val: thirdElement.toFixed(7),
          });
        });
      });
    });
    setinitialWeightValue(poids);
  };

  const applyWeight = () => {
    const W = apprentissage.gradient.W;
    let poids = [];
    W.forEach((firstElement, firstIdx) => {
      firstElement.forEach((secondElement, secondIdx) => {
        secondElement.forEach((thirdElement, thirdIdx) => {
          poids.push({
            id: `W${firstIdx + 1}<${secondIdx + 1},${thirdIdx + 1}>`,
            w: `W${firstIdx + 1}<${secondIdx + 1},${thirdIdx + 1}>`,
            val: thirdElement.toFixed(7),
          });
        });
      });
    });
    setWeightValue(poids);
  };

  const applyNMSE = () => {
    const NMSE = apprentissage.gradient.NMSE;
    setErrorLine(NMSE);
    const error = [];
    NMSE.forEach((err, idx) => {
      error.push({
        id: idx,
        epoch: idx + 1,
        error: err.toFixed(7),
      });
    });
    setErrorNMSE(error);
  };

  useEffect(() => {
    Promise.all([applyWeight(), applyNMSE(), applyInitialWeigth()]);
  }, []);

  return (
    <Layout title={"Apprentissage du modèle"}>
      <Grid container mb={2}>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Valeur du poid avant apprentissage"} />
          <Box p={1}>
            <Table
              columns={[
                {
                  field: "w",
                  headerName: "w",
                  flex: 1.5,
                  minWidth: 150,
                },
                {
                  field: "val",
                  headerName: "Valeur",
                  flex: 1,
                  minWidth: 200,
                  sortable: false,
                },
              ]}
              rows={initialWeightValue}
            />
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Valeur du poid après apprentissage"} />
          <Box p={1}>
            <Table
              columns={[
                {
                  field: "w",
                  headerName: "w",
                  flex: 1.5,
                  minWidth: 150,
                },
                {
                  field: "val",
                  headerName: "Valeur",
                  flex: 1,
                  minWidth: 200,
                  sortable: false,
                },
              ]}
              rows={weightValue}
            />
          </Box>
        </Grid>
      </Grid>

      <Grid container mb={2}>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Valeur d'erreur NMSE"} mt={4} />
          <Table
            columns={[
              {
                field: "epoch",
                headerName: "Epoch",
                flex: 1.5,
                minWidth: 150,
              },
              {
                field: "error",
                headerName: "NMSE",
                flex: 1,
                minWidth: 200,
                sortable: false,
              },
            ]}
            rows={errorNMSE}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Erreur Quadratique NMSE"} mb={1} mt={4}  />
          <StyledPaper
            style={{
              flexDirection: "column",
            }}
          >
            <LineChart
              series={[
                {
                  data: errorLine,
                },
              ]}
              width={550}
              height={500}
              sx={chartStyle}
            />
          </StyledPaper>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Training;
