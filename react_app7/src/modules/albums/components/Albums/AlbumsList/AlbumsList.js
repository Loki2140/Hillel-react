import React from "react";
import AlbumsItem from "./AlbumsItem/AlbumsItem";
import useAlbumList from "./../../../hooks/useAlbumList";
import { ALBUMS_API } from "./../../../config/config";

export default function AlbumsList() {
  const { data: albums, isLoaded, error } = useAlbumList(ALBUMS_API);
  return (
    <>
      <tbody className="tbody">
        {!isLoaded && <tr className="loader"></tr>}
        {error && (
          <tr>
            <div className="error">{error.toString()}</div>
          </tr>
        )}
        {albums.map((album) => (
          <AlbumsItem key={album.id} album={album} />
        ))}
      </tbody>
    </>
  );
}
