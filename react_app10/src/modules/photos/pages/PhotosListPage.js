import React from "react";
import PhotosList from "../components/PhotosList";
import { usePhotosList } from "../hooks/usePhotosList";

function PhotosListPage() {
  const { list } = usePhotosList();

  return (
    <div>
      <h3>Photos list page</h3>
      <PhotosList list={list} />
    </div>
  );
}

export default PhotosListPage;
