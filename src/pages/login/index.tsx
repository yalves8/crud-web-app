import {
  Button,
  FormControl,
  FormHelperText,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import "./style.scss";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import LoginComponent from "../../components/Login";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import IFormLogin from "../../interfaces/login";

const Login = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState<boolean>(false);

  // const [values, setValues] = useState({
  //   senha: "",
  //   nome: "",
  // });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormLogin>();

  const { control } = useForm({
    defaultValues: {
      nome: "",
      senha: "",
    },
  });

  const onSubmit = (data: IFormLogin) => {
    console.log(data);
    //console.log(values);
    navigate("./painel");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: { preventDefault: () => void }) => {
    event.preventDefault();
  };

  // const handleChange =
  //   (prop: string) => (event: { target: { value: any } }) => {
  //     setValues({ ...values, [prop]: event.target.value });
  //   };

  return (
    <LoginComponent>
      <form onSubmit={handleSubmit(onSubmit)} className="boxGrid">
        <FormControl style={{ width: "100%" }} required>
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input
            id="nome"
            aria-describedby="my-helper-text"
            {...register("nome")}
          />
          <FormHelperText id="my-helper-text">Digite seu nome</FormHelperText>
        </FormControl>
        <FormControl required>
          {" "}
          <InputLabel htmlFor="senha">Senha</InputLabel>
          <Input
            id="senha"
            type={showPassword ? "text" : "password"}
            {...register("senha")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          <FormHelperText id="my-helper-text">Digite sua senha</FormHelperText>
        </FormControl>
        <FormControl>
          <Button variant="contained" color="success" type="submit">
            ENTRAR
          </Button>
        </FormControl>
      </form>

      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("nome", { required: true, maxLength: 20 })} />
        <input {...register("senha")} type="password" />
        <input type="submit" />
      </form> */}
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <>
          <InputLabel htmlFor="nome">Nome</InputLabel>
          <Input
            {...register("nome", { required: "Nome é obrigatório" })}
            id="nome"
            aria-describedby="my-helper-text"
            error={!!errors.nome}

            //onChange={handleChange("nome")}
          />
          {
            <FormHelperText id="my-helper-text">
              {!errors.nome?.message ? "Digite seu nome" : errors.nome?.message}
            </FormHelperText>
          }
        </>

        <>
          <InputLabel htmlFor="senha">Senha</InputLabel>
          <Input
            {...register("senha", { required: "Senha é obrigatória" })}
            id="senha"
            type={showPassword ? "text" : "password"}
            error={!!errors.senha}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {
            <FormHelperText id="my-helper-text">
              {!errors.senha?.message
                ? "Digite sua senha"
                : errors.senha?.message}
            </FormHelperText>
          }
        </>

        <input type="submit" />
      </form> */}

      {/* <form noValidate>
        <TextField variant="standard" label="Nome" value={values.nome} onChange={handleChange}/>
        <FormControl>
          <InputLabel htmlFor="senha">Senha</InputLabel>
          <Input
            id="senha"
            type={showPassword ? "text" : "password"}
            value={values.senha}
            onChange={handleChange("senha")}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
          {!values.senha && (
            <FormHelperText id="my-helper-text">
              Digite sua senha
            </FormHelperText>
          )}
        </FormControl>
      </form> */}
    </LoginComponent>
  );
};
export default Login;
