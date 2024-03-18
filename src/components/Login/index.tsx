import { Box, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { ReactNode, useState } from "react";
import "./style.scss";

const LoginComponent = (props: { children: ReactNode }) => {
  const [rotate, setRotate] = useState<boolean>(false);

  return (
    <Container className="loginContainerMain">
      <Grid container spacing={2} columns={16} className="login-container">
        <Grid item xs={8} className="logoRedizz">
          <motion.div
            whileHover={{
              scale: [null, 1.3, 1],
            }}
            onHoverStart={() => setRotate(true)}
            onHoverEnd={() => setRotate(true)}
            className="box"
            animate={
              !rotate && {
                scale: [1, 1.2, 1.2, 1],
                rotate: [0, 0, -45, 45, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeatDelay: 1,
            }}
          >
            <img
              src={require("../../assets/images/reddizLogoFull.png")}
              alt="Redizz"
              loading="lazy"
              className="logoImg"
            />
          </motion.div>
        </Grid>
        <Grid item xs={8} className="formBox">
          <Box component="section" className="boxGrid">
            <img
              src={require("../../assets/images/logoBackNo.png")}
              alt="RedizzLogo"
              loading="lazy"
              className="logoRedizzImg"
            />
            {props.children}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default LoginComponent;
