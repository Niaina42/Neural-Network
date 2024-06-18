import {
  Grid,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../Common/Table/Table";
import { LineChart } from "@mui/x-charts";
import StyledPaper from "../Common/StyledPaper/StyledPaper";
import Layout from "../Common/Layout/Layout";

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
  const [errorNMSE, setErrorNMSE] = useState([]);
  const [errorLine, setErrorLine] = useState([]);

  const applyWeight = () => {
    const W = apprentissage.gradient.W;
    const poids = [];
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
    applyWeight();
    applyNMSE();
  }, []);

  return (
    <Layout title={"Apprentissage du modèle"}>
      <Grid container mb={2}>
        <Grid item xs={12} md={6}>
          <Table
            title={"Valeur du poid après apprentissage"}
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
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography color="white" pl={2} variant="body1" mt={2} mb={2}>
            Erreur Quadratique NMSE
          </Typography>
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

      <Table
        title={"Valeur d'erreur NMSE"}
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
    </Layout>
  );
};
export default Training;
