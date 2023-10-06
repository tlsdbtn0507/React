import React from "react";
import ReactDOM from "react-dom";
import ProductsProvider from "../src/context/productCtx";
import { BrowserRouter } from "react-router-dom";

import "../src/css/index.css";
import App from "./App";

ReactDOM.render(
  <ProductsProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ProductsProvider>,
  document.getElementById("root")
);
