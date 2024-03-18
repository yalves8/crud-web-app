import {
  ButtonGroup,
  IconButton,
  FormControl,
  TextField,
  Box,
  Button,
} from "@mui/material";
import {
  GridCellParams,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import ModeEditIcon from "@mui/icons-material/ModeEdit";
import { useState } from "react";
import DataGridComponent from "../../components/DataGrid";
import ModalComponent from "../../components/Modal";
import { IFilterCliente } from "../../interfaces/cliente";
import CadastrarCliente from "./cadastrar-editar";

const Clientes = () => {
  const [filterHead, setFilterHead] = useState<IFilterCliente>({
    nome: "",
    cpf: "",
  });
  const [open, setOpen] = useState(false);
  const [cpf, setCpf] = useState<string>("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setFilterHead({ ...filterHead, nome: event.target.value });
  };

  const colums2: GridColDef[] = [
    {
      field: "produto",
      headerName: "Produto",
      flex: 1,
      minWidth: 50,
      sortable: true,
    },
    {
      field: "categoria",
      headerName: "Categoria",
      flex: 1,
      minWidth: 50,
      sortable: true,
    },
    {
      field: "preco",
      headerName: "Preço",
      flex: 1,
      minWidth: 50,
      sortable: true,
      renderCell: (params: GridCellParams) => (
        <span>R$ {params.row.preco}</span>
      ),
    },
    {
      field: "quantidade",
      headerName: "Quantidade",
      flex: 1,
      minWidth: 50,
      sortable: true,
    },
    {
      field: "acoes",
      headerName: "Ações",
      flex: 1,
      headerAlign: "right",
      sortable: false,
      renderCell: (params: GridRenderCellParams<any>) => (
        <ButtonGroup variant="text" aria-label="Basic button group">
          <IconButton
            aria-label="edit"
            size="small"
            onClick={(item) => console.log(params)}
          >
            <ModeEditIcon />
          </IconButton>
          <IconButton aria-label="delete" size="small">
            <DeleteIcon />
          </IconButton>
        </ButtonGroup>
      ),
      align: "right",
    },
  ];

  return (
    <Box
      style={{ height: 400 }}
      sx={{
        width: "100%",
        display: "table",
        tableLayout: "fixed",
      }}
    >
      <form noValidate autoComplete="off" className="formFilter">
        <div className="row-filter">
          <FormControl sx={{ width: "30ch" }}>
            <TextField
              id="nome"
              label="Pesquisar por nome"
              type="search"
              name="nome"
              variant="standard"
              onChange={handleChange}
            />
          </FormControl>
        </div>

        <FormControl>
          <Button
            variant="contained"
            color="success"
            type="button"
            size="small"
            onClick={handleOpen}
          >
            CADASTRAR
          </Button>
        </FormControl>
      </form>
      <DataGridComponent
        colunas={colums2}
        rows={[
          {
            id: 1,
            produto: "@MUI",
            categoria: "Boots",
            preco: 50,
            quantidade: 2,
          },
          {
            id: 2,
            produto: "@MUI2",
            categoria: "Boots2",
            preco: 500,
            quantidade: 22,
          },
        ]}
      />
      <ModalComponent onClose={() => handleClose()} open={open}>
        <CadastrarCliente />
      </ModalComponent>
    </Box>
  );
};

export default Clientes;
