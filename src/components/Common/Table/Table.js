import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";
import { styled } from '@mui/material/styles';

const StyledTable = styled(DataGrid)(({ theme }) => ({
  color: "#FFF",
  backgroundColor: "#262331",
  border: "1px solid #fff",
  "& .MuiDataGrid-main .css-yrdy0g-MuiDataGrid-columnHeaderRow":{
    backgroundColor:"#262331"
  },
  "& .css-rtrcn9-MuiTablePagination-root":{
    color:"#fff"
  },
  "& .MuiDataGrid-scrollbar": {
    scrollbarWidth: "thin"
  }
}));

const Table = ({ columns, rows = [], title = null }) => {
  const apiRef = useGridApiRef();

  return (
    <Box>
      {title && (
        <Typography color={"#fff"} variant="body1" mt={2} mb={2}>
          {title}
        </Typography>
      )}
      <Box
        sx={{
          height: 530,
          width: 1,
          mt: 1.75,
        }}
      >
        <StyledTable
          apiRef={apiRef}
          columns={columns}
          rows={rows}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 25,
              },
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Table;
