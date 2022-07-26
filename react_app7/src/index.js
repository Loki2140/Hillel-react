import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import Album from "./modules/albums/components/Albums/Albums";
import AppRoutes from "./AppRoutes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
