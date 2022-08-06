import React from "react";
import PhotosListItem from "./PhotosListItem";

function PhotosList({ list }) {
  console.log(list);
  return (
    <div className="imgBlock">
      {list.map((photo) => (
        <PhotosListItem key={photo.id} photo={photo} />
      ))}
    </div>
  );
}

export default PhotosList;
