import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";

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
        <DataGrid
          sx={{
            color: "#FFF",
            background: "#120e21",
            border: "1px solid #fff",
            "& .MuiDataGrid-main .css-yrdy0g-MuiDataGrid-columnHeaderRow":{
              background:"#120e21"
            },
            "& .css-rtrcn9-MuiTablePagination-root":{
              color:"#fff"
            },
          }}
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
