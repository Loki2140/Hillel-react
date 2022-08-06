import api from "../../../api";

export function getPhotosList(albumId) {
  return api.get(`photos?albumId=${albumId}`).then((resp) => resp.data);
}

export function getPhotoDetails(id) {
  return api.get(`photos/${id}`).then((resp) => resp.data);
}
