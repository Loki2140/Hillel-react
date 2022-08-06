import React from "react";
import usePhoto from "../hooks/usePhoto";
import { Outlet } from "react-router-dom";

function PhotoDetailsPage() {
  const photo = usePhoto();

  return (
    <div>
      <h2>Photo {photo.id}</h2>
      <img src={photo.url} alt={photo.title} />
      <Outlet />
    </div>
  );
}

export default PhotoDetailsPage;
