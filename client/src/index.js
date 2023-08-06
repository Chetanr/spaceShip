import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const el = document.getElementById("app");
const root = ReactDOM.createRoot(el);

root.render(<App />, el);
