export const DEL_ACTION = "DELETE";
export function del(payload) {
  return { type: DEL_ACTION, payload };
}

export const TOG_ACTION = "TOGGEL";
export function tog(payload) {
  return { type: TOG_ACTION, payload };
}

export const ADD_ACTION = "ADD";
export function add(payload) {
  return { type: ADD_ACTION, payload };
}

export const ADD_ERROR = "ADD_ERROR";
export function addError(payload) {
  return { type: ADD_ERROR, payload };
}
