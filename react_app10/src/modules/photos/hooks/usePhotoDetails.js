import { useCallback, useEffect, useState } from "react";

import { getPhotoDetails } from "../services/photosService";

export function usePhotoDetails(id) {
  const [photo, setPhoto] = useState({});

  const fetchPhoto = useCallback(
    () => getPhotoDetails(id).then(setPhoto),
    [id, getPhotoDetails, setPhoto]
  );

  useEffect(() => {
    fetchPhoto();
  }, [id, fetchPhoto]);

  return { photo, fetchPhoto };
}
