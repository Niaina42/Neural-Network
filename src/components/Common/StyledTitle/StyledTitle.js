import React from "react";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTypo = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  textAlign: "center",
  background: "#9c27b0",
  borderRadius: 5,
  width: "80%",
}));

const StyledBox = styled(Typography)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const StyledTitle = ({ title, mb, mt }) => {
  return (
    <StyledBox>
      <StyledTypo variant="body1" mb={mb} mt={mt}>
        {title}
      </StyledTypo>
    </StyledBox>
  );
};
export default StyledTitle;
