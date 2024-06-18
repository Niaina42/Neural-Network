import { Box, Container, Stack } from "@mui/material";
import React from "react";
import PsychologyIcon from "@mui/icons-material/Psychology";
import HeaderItem from "./HeaderItem/HeaderItem";
import FunctionsIcon from "@mui/icons-material/Functions";
import AddchartIcon from "@mui/icons-material/Addchart";
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import HandymanIcon from '@mui/icons-material/Handyman';
import ViewStreamIcon from '@mui/icons-material/ViewStream';

const Header = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 3,
          marginTop: 2
        }}
      >
        <HeaderItem slug="/" icon={ViewStreamIcon} />
        <HeaderItem slug="/function" icon={FunctionsIcon} />
        <HeaderItem slug="/architecture" icon={HandymanIcon} />
        <HeaderItem slug="/training" icon={PsychologyIcon} />
        <HeaderItem slug="/prediction" icon={QueryStatsIcon} />
        <HeaderItem slug="/function" icon={AddchartIcon} />
      </Box>
    </>
  );
};
export default Header;
