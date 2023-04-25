import React, { useState } from "react";
import "./App.css";
import HomePage from "./Routes/HomePage";
import LoginSignup from "./Routes/LoginSignup";

const App = () => {
  const [JWTAuthentication, setJWTAuthentication] = useState(true);

  return (
    <>
      {JWTAuthentication === true ? (
        <HomePage />
      ) : JWTAuthentication === false ? (
        <LoginSignup setJWTAuthentication={setJWTAuthentication} />
      ) : null}
    </>
  );
};

export default App;
