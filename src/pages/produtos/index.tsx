import {
  ButtonGroup,
  IconButton,
  FormControl,
  TextField,
  Box,
  MenuItem,
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
import "./style.scss";
import CadastrarProduto from "./cadastrar-editar";
import { IFilterProduto, IFormProduto } from "../../interfaces/produto";
import DataGridComponent from "../../components/DataGrid";
import ModalComponent from "../../components/Modal";

const names = [
  { id: 1, nome: "Escritório" },
  { id: 2, nome: "Papelaria" },
];

const Produtos = () => {
  const [personName, setPersonName] = useState<number | null>(null);
  const [filterHead, setFilterHead] = useState<IFilterProduto>({
    nome: "",
    categoria: null,
  });
  const [row, setRow] = useState<IFormProduto | null>(null);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
  };

  const handleChangeSelect = (event: { target: { value: any } }) => {
    const {
      target: { value },
    } = event;

    setPersonName(value);
    setFilterHead({ ...filterHead, categoria: value });
  };

  const handleChange = (event: { target: { value: string } }) => {
    setFilterHead({ ...filterHead, nome: event.target.value });
  };
  const colums2: GridColDef[] = [
    {
      field: "nome",
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
            onClick={(item) => setRow(params.row)}
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
              label="Pesquisar por nome/categoria"
              type="search"
              name="nome"
              variant="standard"
              onChange={handleChange}
            />
          </FormControl>
          <FormControl variant="standard" sx={{ width: "25ch" }}>
            <TextField
              select
              variant="standard"
              required
              label="Categoria"
              value={personName || ""}
              onChange={handleChangeSelect}
              size="small"
            >
              <MenuItem value="">Selecione uma categoria</MenuItem>
              {names.map((template) => (
                <MenuItem key={template.id} value={template.id}>
                  {template.nome}
                </MenuItem>
              ))}
            </TextField>
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
            nome: "@MUI",
            categoria: "Boots",
            idCategoria: 1,
            preco: 50,
            quantidade: 2,
          },
          {
            id: 2,
            nome: "@MUI2",
            categoria: "Boots2",
            idCategoria: 2,
            preco: 500,
            quantidade: 22,
          },
        ]}
      />
      <ModalComponent onClose={() => handleClose()} open={open}>
        <CadastrarProduto row={row} />
      </ModalComponent>
    </Box>
  );
};

export default Produtos;
