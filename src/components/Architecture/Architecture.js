import {
  Box,
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ErrorChart from "./ErrorChart/ErrorChart";
import ErrorTable from "./ErrorTable/ErrorTable";

const Architecture = ({ architecture, network }) => {
  const navigate = useNavigate();
  const valeurPropres = architecture.valpropre;
  const error = architecture.error;

  return (
    <Container>
      <Box mt={5} sx={{ display: "flex", alignItems: "center" }}>
        <IconButton onClick={() => navigate(-1)}>
          <ArrowBackIcon sx={{ color: "#fff" }} />
        </IconButton>

        <Typography variant="h5" mt={2} mb={2}>
          Architecture optimale du réseau
        </Typography>
      </Box>
      <Grid container mb={2}>
        <Grid item xs={12} md={4} textAlign={"center"}>
          <Typography variant="body1" mt={2} mb={2}>
            Couche d'entrée: {network[0]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"center"}>
          <Typography variant="body1" mt={2} mb={2}>
            Couche caché: {network[1]}
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} textAlign={"center"}>
          <Typography variant="body1" mt={2} mb={2}>
            Couche de sortie: {network[2]}
          </Typography>
        </Grid>
      </Grid>
      <Grid container mb={2}>
        <Grid item xs={12} md={6} textAlign={"center"}>
          <ErrorChart valeurPropres={valeurPropres} />
        </Grid>
        <Grid item xs={12} md={6}>
          <ErrorTable valeurPropres={valeurPropres} error={error} />
        </Grid>
      </Grid>
    </Container>
  );
};
export default Architecture;