import React from "react";
import AlbumDetailsPage from "./AlbumsDetailsPage";
import AlbumProvider from "../providers/AlbumProvider";

function AlbumDetailsWrapper() {
  return (
    <div>
      <AlbumProvider>
        <AlbumDetailsPage />
      </AlbumProvider>
    </div>
  );
}

export default AlbumDetailsWrapper;
