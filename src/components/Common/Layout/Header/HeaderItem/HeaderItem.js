import { Stack } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const HeaderItem = ({ icon: Icon, slug }) => {
  const [isHovered, setIsHovered] = useState(false);
  const navigation = useNavigate();

  return (
    <Stack
      justifyContent="center"
      alignItems="center"
      className="iconWrapper"
      sx={{
        height: 45,
        width: 45,
        bgcolor: "#eeeeee",
        borderRadius: "50%",
        transition: 'background-color 0.8s',
        '&:hover': {
          bgcolor: 'secondary.main',
          color: 'grey.100',
          cursor: 'pointer',
          '& .iconWrapper': {
            bgcolor: 'secondary.light',
          },
        },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => navigation(slug)}
    >
      <Icon sx={{ color: isHovered ? 'grey.100' : "secondary.main", height: 30, width: 30 }} />
    </Stack>
  );
};
export default HeaderItem;
