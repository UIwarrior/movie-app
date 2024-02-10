import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import { Container, Col, Row } from "react-bootstrap";
import Routes from "../routes";

const App = () => {
  return (
    <Container>
      <Header text="Movie Search react hooks" />
      <Routes />
    </Container>
  );
};

export default App;
