import {
  Grid,
  FormControl,
  InputLabel,
  Input,
  Select,
  MenuItem,
  FormHelperText,
  InputAdornment,
  Button,
  ButtonGroup,
  AppBar,
  Toolbar,
  Typography,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { IFormProduto } from "../../../interfaces/produto";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { NumericFormat } from "react-number-format";

import "../style.scss";
import { useEffect, useMemo, useState } from "react";

const names = [
  { id: 1, nome: "Escritório" },
  { id: 2, nome: "Papelaria" },
];

const NumberFormatCustom = (props: any) => {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumericFormat
      {...other}
      getInputRef={inputRef}
      //prefix={"R$"}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      // isNumericString
    />
  );
};

const CadastrarProduto = (props: { row: IFormProduto | null }) => {
  const [valuesPreco, setValuesPreco] = useState<number | string>(0);
  const [valuesCategoria, setValuesCategoria] = useState(0);

  const {
    register,
    handleSubmit,
    getValues,
    setValue,

    reset,
    formState: { errors },
  } = useForm<IFormProduto>();

  const handleChange = (event: any) => {
    // setValuesPreco(parseInt(event.target.value));
    // console.log("oi", parseInt(event.target.value));
    setValue("preco", parseInt(event.target.value));
  };

  const onChangeCategoria = (event: any) => {
    console.log(typeof event.target.value);

    setValuesCategoria(parseInt(event.target.value));
    setValue("idCategoria", parseInt(event.target.value));
  };
  const onSubmit = (data: IFormProduto) => {
    console.log(data);
  };

  useEffect(() => {
    if (props.row && Object.values(props.row)) {
      console.log(props.row);
      let defaultValues: any = {};
      defaultValues = props.row;
      console.log(defaultValues);

      reset({ ...defaultValues });
    }
  }, [props.row]);

  return (
    <>
      <AppBar position="static" sx={{ marginBottom: 4 }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div" fontWeight={700}>
            CADASTRAR PRODUTO
          </Typography>
        </Toolbar>
      </AppBar>
      <form
        autoComplete="off"
        className="formCadastro"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl variant="standard" required>
          <TextField
            variant="standard"
            required
            id="nome"
            aria-describedby="my-helper-text"
            {...register("nome")}
            label="Nome"
          />
          <FormHelperText id="my-helper-text">
            Digite o nome do produto
          </FormHelperText>
        </FormControl>

        <FormControl variant="standard" sx={{ width: "25ch" }} required>
          <Select
            //labelId="demo-simple-select-label"
            id="idCategoria"
            name="idCategoria"
            value={getValues("idCategoria") || 0}
            label="Categoria"
            onChange={onChangeCategoria}
          >
            <MenuItem value={0}>Selecione</MenuItem>
            {names.map((item) => (
              <MenuItem value={item.id}>{item.nome}</MenuItem>
            ))}
          </Select>
          <FormHelperText id="my-helper-text">
            Selecione uma categoria
          </FormHelperText>
        </FormControl>

        <FormControl variant="standard" required>
          <TextField
            label="Preço"
            variant="standard"
            required
            value={getValues("preco")}
            {...register("preco")}
            onChange={handleChange}
            name="numberformat"
            id="formatted-numberformat-input"
            InputProps={{
              inputComponent: NumberFormatCustom,
              startAdornment: (
                <InputAdornment position="start">R$</InputAdornment>
              ),
            }}
          />{" "}
        </FormControl>
        <FormControl variant="standard" required>
          <TextField
            variant="standard"
            required
            id="quantidade"
            type="number"
            label="Quantidade"
            {...register("quantidade")}
            // endAdornment={<InputAdornment position="end">unid</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">unid</InputAdornment>
              ),
              inputMode: "numeric",
            }}
          />
          <FormHelperText id="my-helper-text">
            Digite a quantidade do produto
          </FormHelperText>{" "}
        </FormControl>
        <ButtonGroup
          variant="text"
          aria-label="Basic button group"
          className="button-group-cadastro"
        >
          <FormControl>
            <Button
              variant="contained"
              color="success"
              type="submit"
              size="small"
              endIcon={<OfflinePinOutlinedIcon />}
            >
              CADASTRAR
            </Button>
          </FormControl>
          <FormControl sx={{ marginLeft: 2 }}>
            <Button
              variant="contained"
              color="error"
              type="button"
              size="small"
              endIcon={<HighlightOffOutlinedIcon />}
            >
              CANCELAR
            </Button>
          </FormControl>
        </ButtonGroup>
      </form>
    </>
  );
};

export default CadastrarProduto;
