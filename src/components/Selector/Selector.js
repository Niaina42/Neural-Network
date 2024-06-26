import { Grid, Container, Typography, Box } from "@mui/material";
import React from "react";
import Factor from "./Factor/Factor";
import { data } from "./data";
import CircularProgress from "@mui/material/CircularProgress";
import ParticleBackground from "../Common/Layout/ParticleBackground/ParticleBackground";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css";
import PoweredBy from "../Common/PoweredBy/PoweredBy";

const Selector = ({ archLoading }) => {
  const henonEquations = `
  \\begin{cases}
      x_{n+1} = 1 - ax_n^2 + y_n \\\\
      y_{n+1} = b x_n
  \\end{cases}
`;
  return archLoading ? (
    <>
      <Box
        mt={5}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          height: "50vh",
        }}
      >
        <Typography mb={2} variant="h5" sx={{ textAlign: "center" }}>
          Chargement des données...
        </Typography>
        <CircularProgress color="inherit" />
      </Box>
      <PoweredBy />
    </>
  ) : (
    <>
      <ParticleBackground />
      <Box mt={5}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Série de Hénon
        </Typography>
      </Box>
      <Box mt={5}>
        <Typography variant="body1" sx={{ textAlign: "center" }}>
          <BlockMath math={henonEquations} />
        </Typography>
      </Box>
      <Container sx={{ marginTop: "5%" }}>
        <Grid container rowGap={3.75}>
          <Grid item xs={12}>
            <Grid container spacing={3.75}>
              {data.map((factor, idx) => {
                return (
                  <Grid key={idx} item xs={12} sm={6} lg={4}>
                    <Factor factor={factor} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
      <PoweredBy />
    </>
  );
};

export default Selector;
