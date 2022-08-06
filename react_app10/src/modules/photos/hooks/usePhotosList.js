import { useCallback, useEffect, useState } from "react";

import { getPhotosList } from "../services/photosService";
import useAlbum from "../../albums/hooks/useAlbum";

export function usePhotosList() {
  const [list, setList] = useState([]);
  const album = useAlbum();
  console.log(album);
  
  const fetchList = useCallback(
    () => getPhotosList(album.id).then(setList),
    [album.id, getPhotosList, setList]
  );

  useEffect(() => {
    fetchList();
  }, [fetchList]);

  return { list, fetchList };
}
