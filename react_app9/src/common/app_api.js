//MEIN FETCH
function sendRequest(url, method = "GET", body = null) {
  return fetch(url, {
    method: method,
    body: body != null ? JSON.stringify(body) : null,
    headers: { "Content-Type": "application/json" }
  });
}

// GET OBJ LIST
export function getObjList(URL) {
  return sendRequest(URL).then((res) => res.json());
}

// GET OBJ
export function getObj(URL, id) {
  return sendRequest(URL + id).then((res) => res.json());
}

//PUT OBJ
export function updateObj(URL, obj) {
  return sendRequest(URL + obj.id, "PUT", obj).then((res) => res.json());
}

//DELETE OBJ
export function removeObj(URL, id) {
  return sendRequest(URL + id, "DELETE");
}
//POST OBJ
export function createObj(URL, newObj) {
  return sendRequest(URL, "POST", newObj).then((res) => res.json());
}
