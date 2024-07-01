import React from "react";
import { Typography, Box } from "@mui/material";

const PoweredBy = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: 0,
        width: "100vw",
      }}
    >
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 3
        }}
      >
        <Typography variant="caption" sx={{ textAlign: "left" }}>
          Powered By: Niaina Christopher
        </Typography>
        <Typography variant="caption" sx={{ textAlign: "left" }}>
          IGGLIA4 n°18
        </Typography>
      </Box>
    </div>
  );
};
export default PoweredBy;
