import {
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import ErrorChart from "./ErrorChart/ErrorChart";
import ErrorTable from "./ErrorTable/ErrorTable";
import Layout from "../Common/Layout/Layout";
import StyledTitle from "../Common/StyledTitle/StyledTitle";

const Architecture = ({ architecture, network }) => {
  const valeurPropres = architecture.valpropre;
  const error = architecture.error;

  return (
    <Layout title={"Architecture optimale du réseau"}>
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
          <StyledTitle title={"Représentation graphique de l'erreur d'approximation"} mb={1} />
          <ErrorChart valeurPropres={valeurPropres} />
        </Grid>
        <Grid item xs={12} md={6}>
          <StyledTitle title={"Valeurs propres et valeurs d'erreur"} />
          <ErrorTable valeurPropres={valeurPropres} error={error} />
        </Grid>
      </Grid>
    </Layout>
  );
};
export default Architecture;