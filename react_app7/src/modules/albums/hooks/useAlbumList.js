import { useEffect } from "react";
import { getObjList } from "../../../app_api";
import useAsync from "../../common/hooks/useAsync.js";

export default function useAlbumList(URL) {
  const { run, ...state } = useAsync(getObjList, []);
  useEffect(() => {
    run(URL);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return { ...state, fetchList: run };
}
