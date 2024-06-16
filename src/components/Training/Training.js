import { Box, Container, Grid, IconButton, Paper, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Table from "../Common/Table/Table";
import { LineChart } from "@mui/x-charts";

const Training = ({ architecture, apprentissage }) => {
  const navigate = useNavigate();
  const [weightValue, setWeightValue] = useState([])
  const [errorNMSE, setErrorNMSE] = useState([])
  const [errorLine, setErrorLine] = useState([])

  const applyWeight = () => {
    const W = apprentissage.gradient.W
    const poids = []
    W.forEach((firstElement, firstIdx) => {
      firstElement.forEach((secondElement, secondIdx) => {
        secondElement.forEach((thirdElement, thirdIdx) => {
          poids.push({
            id: `W${firstIdx+1}<${secondIdx + 1},${thirdIdx + 1}>`,
            w: `W${firstIdx+1}<${secondIdx + 1},${thirdIdx + 1}>`,
            val: thirdElement.toFixed(6)
          })
        })
      })  
    });
    setWeightValue(poids)
  }

  const applyNMSE = () => {
    const NMSE = apprentissage.gradient.NMSE
    setErrorLine(NMSE)
    const error = []
    NMSE.forEach((err, idx) => {
      error.push({
        id: idx,
        epoch: idx+1,
        error: err.toFixed(6),
      })
    })
    setErrorNMSE(error)
  }

  useEffect(() => {
    applyWeight()
    applyNMSE()
  }, [])

  return (
    <Container>
      <Box mt={5} sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5" mt={2} mb={2}>
          Apprentissage du modèle
        </Typography>
      </Box>

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
        </Grid>
      </Grid>

      <Paper
        sx={{ display: "flex", justifyContent: "center" }}
        elevation={0}
      >
        <Typography pl={3} variant="body1" mt={2} mb={2}>
          Erreur Quadratique NMSE
        </Typography>
        <LineChart
          series={[
            {
              data: errorLine,
            },
          ]}
          width={800}
          height={600}
        />
      </Paper>
    </Container>
  );
};
export default Training;
