import React from "react";
import Table from "./Table/Table";
import { Box, Container, Grid, Typography, IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";

const Function = () => {
  const navigate = useNavigate();

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
      <Grid container>
        <Grid item xs={12} md={6}>
          <Table />
        </Grid>
        <Grid item xs={12} md={6}>
          <Table />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Function;
