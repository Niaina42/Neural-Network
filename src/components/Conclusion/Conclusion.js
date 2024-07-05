import React from "react";
import Layout from "../Common/Layout/Layout";
import { Box, Typography } from "@mui/material";

const Conclusion = () => {
  return (
    <Layout title={"Remarque par rapport aux prédictions"}>
      <Box sx={{width: "50%"}}>
        <Typography variant="body1">
          Dans notre situation, les résultats de la prédiction à un pas et de la
          prédiction à plusieurs pas montrent que leur évolution sont Stable.
        </Typography>
      </Box>
    </Layout>
  );
};

export default Conclusion;