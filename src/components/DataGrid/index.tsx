import { DataGrid, GridColDef, ptBR } from "@mui/x-data-grid";
import "./style.scss";

const DataGridComponent = (props: {
  colunas: GridColDef[];
  rows: Object[];
}) => {
  return (
    <DataGrid
      className="responsive-data-grid"
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      sx={{
        boxShadow: 2,

        "& .MuiDataGrid-columnHeader": {
          backgroundColor: "#1DB954",
          color: "white",
        },
        ".MuiDataGrid-iconButtonContainer": {
          visibility: "visible",
        },
        ".MuiDataGrid-sortIcon": {
          opacity: "inherit !important",
          color: "white",
        },
        ".MuiDataGrid-virtualScroller::-webkit-scrollbar": {
          display: "none",
        },
      }}
      autoPageSize={true}
      disableColumnMenu
      columns={props.colunas}
      rows={props.rows}
    />
  );
};

export default DataGridComponent;
