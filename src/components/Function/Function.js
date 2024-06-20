import React, { useEffect, useState } from "react";
import Table from "../Common/Table/Table";
import {
  Box,
  Grid,
  Typography
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Statistics from "./Statstics/Statistics";
import StyledPaper from "../Common/StyledPaper/StyledPaper";
import Layout from "../Common/Layout/Layout";
import StyledTitle from "../Common/StyledTitle/StyledTitle";

const Function = ({ architecture }) => {
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
            fyn: x.toFixed(7),
          });
          break;
        default:
          parsedValue.push({
            id: idx,
            xn: idx,
            fxn: x.toFixed(7),
          });
          break;
      }
    });
    setter(parsedValue);
  };

  useEffect(() => {
    const values = architecture.generateValues(500);

    if (values) {
      insertValues(values[0], setXValues, "x");
      insertValues(values[1], setYValues, "y");
    }
  }, []);

  return (
    <Layout title={"Fonction d'itération"}>
      <Grid container mb={5}>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Représentation graphique de Yn en fontcion de Xn"} />
          <StyledPaper>
            <Box>
              <Statistics architecture={architecture} />
            </Box>
          </StyledPaper>
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Les 500 premières valuers de Xn et Yn"} />
          <StyledPaper>
            <Grid container sx={{ margin: 1 }}>
              <Grid item xs={12} md={6}>
                <Table
                  columns={[
                    {
                      field: "xn",
                      headerName: "Xn",
                      flex: 1.5,
                    },
                    {
                      field: "fxn",
                      headerName: "F(Xn)",
                      flex: 1,
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
                      headerName: "Yn",
                      flex: 1.5,
                    },
                    {
                      field: "fyn",
                      headerName: "F(Yn)",
                      flex: 1,
                      sortable: false,
                    },
                  ]}
                  rows={YValues}
                />
              </Grid>
            </Grid>
          </StyledPaper>
        </Grid>
      </Grid>
    </Layout>
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
  },
];
export default Function;
