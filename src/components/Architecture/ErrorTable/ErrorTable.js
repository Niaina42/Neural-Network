import { Paper } from "@mui/material";
import React from "react";
import Table from "../../Common/Table/Table";
import StyledPaper from "../../Common/StyledPaper/StyledPaper";

const ErrorTable = ({ valeurPropres = [], error = [] }) => {
  let rows = [];
  valeurPropres.map((val, idx) => {
    rows.push({
      id: idx,
      valpropre: val,
      errapp: error[idx].toFixed(6),
    });
  });
  return (
    <Table
      columns={[
        {
          field: "valpropre",
          headerName: "Valeur propre",
          flex: 1.5,
          minWidth: 150,
        },
        {
          field: "errapp",
          headerName: "Erreur d'approximation",
          flex: 1,
          minWidth: 200,
          sortable: false,
        },
      ]}
      rows={rows}
    />
  );
};
export default ErrorTable;
