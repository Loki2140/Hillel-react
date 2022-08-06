import React, { createContext } from "react";

import { useParams } from "react-router-dom";
import { useAlbumDetails } from "../hooks/useAlbumDetails";

export const AlbumContext = createContext(null);

function AlbumProvider({ children }) {
  const { albumId } = useParams();
  const { album } = useAlbumDetails(albumId);

  return (
    <AlbumContext.Provider value={album}>{children}</AlbumContext.Provider>
  );
}

export default AlbumProvider;
