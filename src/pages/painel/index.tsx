import "./style.scss";
import { Card, Grid } from "@mui/material";
import { menuList } from "../../components/Template";
import { useNavigate } from "react-router-dom";

const Painel = () => {
  const navigate = useNavigate();

  return (
    <Grid
      container
      spacing={{ xs: 12, md: 6 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {menuList.map(
        (item, index) =>
          item.route !== "painel" && (
            <Grid
              xs={4}
              sm={4}
              md={4}
              item
              key={index}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection={"row"}
              style={{ cursor: "pointer" }}
            >
              <Card
                className="card-base"
                onClick={() => navigate(`/${item.route}`)}
              >
                {item.icon}

                <h2>{item.title}</h2>
              </Card>
            </Grid>
          )
      )}
    </Grid>
  );
};

export default Painel;
