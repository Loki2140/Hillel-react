import React, { createContext } from "react";

import { useParams } from "react-router-dom";
import { usePhotoDetails } from "../hooks/usePhotoDetails";

export const PhotoContext = createContext(null);

function PhotoProvider({ children }) {
  const { photoId } = useParams();
  const { photo } = usePhotoDetails(photoId);

  return (
    <PhotoContext.Provider value={photo}>{children}</PhotoContext.Provider>
  );
}

export default PhotoProvider;
