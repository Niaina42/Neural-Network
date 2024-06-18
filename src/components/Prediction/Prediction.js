import React from "react";
import {
  Box,
  Grid,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import Layout from "../Common/Layout/Layout";

const Prediction = ({ prediction }) => {
  console.log(prediction);

  return (
    <Layout title={"Prediction un pas"}>
      <Grid container mb={5}>
        <Grid item xs={12} md={6}>
          <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                sx={{ background: "white" }}
                label="Pas a prédire"
              >
                <MenuItem value={1}>Un pas</MenuItem>
                <MenuItem value={20}>Trois pas</MenuItem>
                <MenuItem value={30}>Dix pas</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Prediction;
