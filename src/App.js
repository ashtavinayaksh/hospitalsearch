import React from "react";
import styles from "./App.module.scss";
import Header from "./components/Header";
import Banner from "./assets/images/banner.jpg";
import Box from "@mui/material/Box";
import Footer from "./components/Footer";
import Login from "./components/login/login";
import Register from "./components/register/register";
import Container from "@mui/material/Container";
import MainContent from "./components/MainContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

const App = () => {
  const [user, setLoginUser] = useState({});
  return (
    <div className={styles.mainContainer}>
      <img src={Banner} alt="banner" />
      <div className={styles.floatingContainer}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Header />
              <MainContent />
              <Footer />
            </Route>
            <Route path="/login">
              <Login setLoginUser={setLoginUser} />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
