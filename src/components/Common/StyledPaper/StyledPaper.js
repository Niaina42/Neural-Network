import { Paper } from "@mui/material";

const StyledPaper = ({ children, style = {} }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "center",
        margin: 1,
        background: "#262331",
        border: "1px solid #fff",
        ...style
      }}
      elevation={0}
    >
      {children}
    </Paper>
  );
};
export default StyledPaper;
