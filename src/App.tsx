import React from "react";
import { Main } from "./components/Main";
import { GlobalStyle } from "./GlobalStyle";
import {Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </>
  );
};
