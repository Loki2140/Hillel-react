// GET OBJ LIST
export function getObjList(URL) {
  return fetch(URL).then((res) => res.json());
}

// GET OBJ
export function getObj(URL, id) {
  return fetch(URL + id).then((res) => res.json());
}

//PUT OBJ
export function updateObj(URL, obj) {
  return fetch(URL + obj.id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(obj)
  }).then((res) => res.json());
}

//DELETE OBJ
export function removeObj(URL, id) {
  return fetch(URL + id, {
    method: "DELETE"
  });
}
//POST OBJ
export function createObj(URL, newObj) {
  return fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newObj)
  }).then((res) => res.json());
}
