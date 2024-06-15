import React, { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Paper,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Statistics from "./Statstics/Statistics";

const Function = ({ architecture }) => {
  const navigate = useNavigate();
  const [XValues, setXValues] = useState([]);
  const [YValues, setYValues] = useState([]);

  const insertValues = (values, setter, model) => {
    let parsedValue = [];
    values.map((x, idx) => {
      switch (model) {
        case "y":
          parsedValue.push({
            id: idx,
            yn: idx,
            fyn: x.toFixed(6),
          }) 
          break;
        default:
          parsedValue.push({
            id: idx,
            xn: idx,
            fxn: x.toFixed(6),
          }) 
          break;
      }
    })
    setter(parsedValue)
  }

  useEffect(() => {
    const values = architecture.generateValues(500);

    if(values) {
      insertValues(values[0], setXValues, "x")
      insertValues(values[1], setYValues, "y")
    }
  }, [])

  return (
    <Container>
      <Box mt={5} sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon />
        </IconButton>

        <Typography variant="h5" mt={2} mb={2}>
          Série de Hennon
        </Typography>
      </Box>

      <Grid container mb={2}>
        <Grid item xs={12} md={6}>
          <Table
            columns={[
              {
                field: "xn",
                headerName: "Xn",
                flex: 1.5,
                minWidth: 150,
              },
              {
                field: "fxn",
                headerName: "F(Xn)",
                flex: 1,
                minWidth: 200,
                sortable: false,
              },
            ]}

            rows={XValues}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Table
            columns={[
              {
                field: "yn",
                headerName: "Xn",
                flex: 1.5,
                minWidth: 150,
              },
              {
                field: "fyn",
                headerName: "F(Yn)",
                flex: 1,
                minWidth: 200,
                sortable: false,
              },
            ]}
            rows={YValues}
          />
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <Grid item xs={12} md={12}>
          <Paper
            sx={{ display: "flex", justifyContent: "center", width: "100%" }}
            elevation={0}
          >
            <Box>
              <Statistics architecture={architecture} />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

const rows = [
  {
    id: 1,
    xn: "Urgent Safety Recall",
    fxn: "06/04/2022",
  },
  {
    id: 2,
    xn: "Urgent Safety Recall",
    fxn: "06/04/2022",
  }
];
export default Function;
