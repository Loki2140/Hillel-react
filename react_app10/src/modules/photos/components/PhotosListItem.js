import { Link } from "react-router-dom";
import React from "react";

function PhotosListItem({ photo }) {
  return (
    <div className="flexImg">
      <Link to={String(photo.id)}>
        <img src={photo.thumbnailUrl} alt={photo.title} />
      </Link>
    </div>
  );
}

export default PhotosListItem;
