import { Outlet } from "react-router-dom";
import React from "react";

function PhotosModule() {
  return (
    <div>
      <h3>Photos</h3>
      <Outlet />
    </div>
  );
}

export default PhotosModule;
