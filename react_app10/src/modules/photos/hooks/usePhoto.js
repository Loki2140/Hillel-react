import { PhotoContext } from "../providers/PhotoProvider";
import { useContext } from "react";

export default function useUser() {
  return useContext(PhotoContext);
}
