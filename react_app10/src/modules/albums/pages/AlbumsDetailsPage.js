import { Outlet } from "react-router-dom";
import React from "react";
import useAlbum from "../hooks/useAlbum";

function AlbumDetailsPage() {
  const album = useAlbum();

  return (
    <div>
      <h2>Album Details</h2>
      <h3>{album.title}</h3>
      <Outlet />
    </div>
  );
}

export default AlbumDetailsPage;
