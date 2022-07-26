import React from "react";
import AlbumsList from "./AlbumsList/AlbumsList";
import AlbumsHead from "./AlbumsHead/AlbumsHead";
import "./Albums.scss";

export default function Album() {
  return (
    <table className="flex-table ">
      <AlbumsHead />
      <AlbumsList />
    </table>
  );
}

// {/* {error && <div className="error">{error.toString()}</div>} */}
