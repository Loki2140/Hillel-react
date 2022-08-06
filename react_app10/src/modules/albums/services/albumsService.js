import api from "../../../api";

export function getAlbumsList(userId) {
  return api.get(`albums?userId=${userId}`).then((response) => response.data);
}
export function getAlbumDetails(id) {
  return api.get(`albums/${id}`).then((resp) => resp.data);
}
