// importamos librerias react
  import React from "react";
  import ReactDOM from "react-dom/client";
  import "bootstrap/dist/css/bootstrap.min.css";
// importamos componente principal app 
  import App from "./App";
// importamos estilos 
  import "./App.css";
  import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
