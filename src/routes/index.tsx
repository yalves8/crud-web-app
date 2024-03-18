import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login";
import Painel from "../pages/painel";
import Produtos from "../pages/produtos";
import TemplateComponent from "../components/Template";
import Clientes from "../pages/clientes";

const router = createBrowserRouter([
  { path: "/", element: <Login /> },
  {
    path: "/painel",
    element: (
      <TemplateComponent titulo="PAINEL">
        <Painel />
      </TemplateComponent>
    ),
  },
  {
    path: "/produtos",
    element: (
      <TemplateComponent titulo="PRODUTOS">
        <Produtos />
      </TemplateComponent>
    ),
  },
  {
    path: "/clientes",
    element: (
      <TemplateComponent titulo="CLIENTES">
        <Clientes />
      </TemplateComponent>
    ),
  },
]);

export default router;
