import {
  AppBar,
  Toolbar,
  Typography,
  FormControl,
  TextField,
  FormHelperText,
  ButtonGroup,
  Button,
  InputBaseComponentProps,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IFormCliente } from "../../../interfaces/cliente";
import OfflinePinOutlinedIcon from "@mui/icons-material/OfflinePinOutlined";
import HighlightOffOutlinedIcon from "@mui/icons-material/HighlightOffOutlined";
import { IMaskInput } from "react-imask";

const CadastrarCliente = () => {
  const [CPFError, setCPFError] = useState(false);
  const [cpf, setCpf] = useState("");
  const { register, handleSubmit, setValue } = useForm<IFormCliente>();

  const CustomMaskInput = (props: any) => {
    const { inputRef, onChange, ...other } = props;

    return (
      <IMaskInput
        {...other}
        unmask={true}
        mask="000.000.000-00"
        onAccept={(value, mask) => {
          setValue("cpf", value);
          console.log(value, mask);
        }}
        overwrite

        // isNumericString
      />
    );
  };

  const handleChangeCpf = (event: { target: { value: any } }) => {
    const r = event.target.value;
    console.log("oi", event.target.value);
  };

  const onSubmit = (data: IFormCliente) => {
    console.log(data);
  };

  return (
    <>
      <AppBar position="static" sx={{ marginBottom: 4 }}>
        <Toolbar sx={{ justifyContent: "center" }}>
          <Typography variant="h6" component="div" fontWeight={700}>
            CADASTRAR CLIENTE
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
            Digite o nome do cliente
          </FormHelperText>
        </FormControl>

        <TextField
          id="cpf"
          label="CPF"
          variant="standard"
          required
          fullWidth
          error={CPFError}
          helperText={
            CPFError && "Deve conter 11 dígitos. Insira apenas os números."
          }
          onBlur={(event) => {
            const tmpCPF = event.target.value;

            if (tmpCPF.length !== 14) {
              setCPFError(true);
            } else {
              setCPFError(false);
            }
          }}
          onChange={handleChangeCpf}
          InputLabelProps={{ shrink: true }}
          InputProps={{
            inputComponent: CustomMaskInput,
          }}
        />

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

export default CadastrarCliente;
