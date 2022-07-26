import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import Albums from "./modules/albums/components/Albums/Albums";
import Album from "./modules/albums/components/Album/Album";
import App from "./App";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Albums />} />
          <Route path="album:id" element={<Album />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
