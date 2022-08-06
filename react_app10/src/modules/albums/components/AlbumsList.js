import AlbumsListItem from "./AlbumsListItem";
import React from "react";

function AlbumsList({ list }) {
  console.log(list);

  return (
    <ul>
      {list.map((album) => (
        <AlbumsListItem album={album} key={album.id} />
      ))}
    </ul>
  );
}

export default AlbumsList;
