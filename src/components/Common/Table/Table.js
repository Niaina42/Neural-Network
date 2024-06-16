import { Box, Button, Grid, Paper, Stack, Typography } from "@mui/material";
import { DataGrid, useGridApiRef } from "@mui/x-data-grid";

const Table = ({ columns, rows = [], title = null }) => {
  const apiRef = useGridApiRef();

  return (
    <Paper
      sx={(theme) => ({
        p: theme.spacing(2, 2.5),
        width: 1,
      })}
      elevation={0}
    >
      {title && (
        <Typography variant="body1" mt={2} mb={2}>
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
    </Paper>
  );
};

export default Table;
