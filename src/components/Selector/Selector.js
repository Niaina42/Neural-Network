import { Paper, Grid, Container, Typography, Box } from "@mui/material";
import React, { useState } from "react";
import Factor from "./Factor/Factor";
import { data } from "./data";

const Selector = () => {
  return (
    <>
      <Box mt={5}>
        <Typography variant="h4" sx={{textAlign: "center"}}>Série de Henon</Typography>
      </Box>
      <Container sx={{ marginTop: "10%" }}>
        <Grid container rowGap={3.75}>
          <Grid item xs={12}>
            <Grid container spacing={3.75}>
              {data.map((factor) => {
                return (
                  <Grid item xs={12} sm={6} lg={4}>
                    <Factor factor={factor} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Selector;
