import { useParams } from "react-router-dom";
import React from "react";
import Loader from "../../../common/components/Loader/Loader";
import useAlbumList from "../../hooks/useAlbumList";
import { ALBUM_API } from "./../../config/config";
import { Link } from "react-router-dom";
import "./Album.scss";

export default function Album() {
  const params = useParams();
  const { data: album, isLoaded, error } = useAlbumList(ALBUM_API + params.id);
  return (
    <>
      <Link to="/">RETURN</Link>
      {error && <div className="error">{error.toString()}</div>}
      <div className="imgBlock">
        {!isLoaded && <Loader />}
        {album.map((album) => (
          <div className="flexImg" key={album.id}>
            <img src={album.thumbnailUrl} alt={album.title} />
          </div>
        ))}
      </div>
    </>
  );
}
