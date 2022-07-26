import React from "react";
import "./AlbumsItem.scss";
import { Link } from "react-router-dom";

export default function AlbumsItem({ album }) {
  return (
    <tr className="trItem">
      <td>{album.userId}</td>
      <td>{album.id}</td>
      <td>
        <Link to={"album" + album.id}>{album.title} </Link>
      </td>
    </tr>
  );
}
