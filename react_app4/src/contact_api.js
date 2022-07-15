import { URL_API } from "./config";

// GET OBJ LIST
export function getObjList() {
  return fetch(URL_API).then((res) => res.json());
}

// GET OBJ
export function getObj(id) {
  return fetch(URL_API + id).then((res) => res.json());
}

//PUT OBJ
export function updateObj(obj) {
  return fetch(URL_API + obj.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then((res) => res.json());
}

//DELETE OBJ
export function removeObj(id) {
  return fetch(URL_API + id, {
    method: "DELETE"
  });
}
//POST OBJ
export function createObj(newObj) {
  return fetch(URL_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newObj)
  }).then((res) => res.json());
}
