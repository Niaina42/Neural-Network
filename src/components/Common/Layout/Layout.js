import { Box, Container, IconButton, Typography } from "@mui/material";
import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import Header from "./Header/Header";
import ParticleBackground from "./ParticleBackground/ParticleBackground";

const Layout = ({ children, title }) => {
  const navigate = useNavigate();

  return (
    <>
      <ParticleBackground />
      <Container>
        <Header />
        <Box mt={3} sx={{ display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => navigate(-1)}>
            <ArrowBackIcon sx={{ color: "#fff" }} />
          </IconButton>

          <Typography variant="h5" mt={2} mb={2}>
            {title}
          </Typography>
        </Box>
        {children}
      </Container>
    </>
  );
};
export default Layout;
