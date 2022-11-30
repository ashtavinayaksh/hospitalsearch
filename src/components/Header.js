import React from "react";
import styles from "./Header.module.scss";
import Container from "@mui/material/Container";
import logo from '../assets/images/logo.jpg'
import Box from "@mui/material/Box";
import Login from "./login/login";

const Header = () => {
  return (
    <Container className={styles.mainContainer}>
      <Box className={styles.subContainer} display='flex' alignItems='center'>
        <Box className={styles.logo} display="flex" alignItems="center">
          <img src={logo} alt="logo" />
          <div ml={2}>
            <span className={styles.title}>HealthLife</span>
            <span className={styles.slogan}>Green Generation</span>
          </div>
        </Box>
        <span>About</span>
        <span>Services</span>
        <span><a className="loginButton" href="/login">Login</a></span>
      </Box>
    </Container>
  );
};

export default Header;
