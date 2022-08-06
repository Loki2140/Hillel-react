import React from "react";
import PhotoDetailsPage from "./PhotoDetailsPage";
import PhotoProvider from "../providers/PhotoProvider";

function PhotoDetailsWrapper() {
  return (
    <PhotoProvider>
      <PhotoDetailsPage />
    </PhotoProvider>
  );
}

export default PhotoDetailsWrapper;
