import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";

export default function() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}
