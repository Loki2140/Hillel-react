import {
  getObjList,
  updateObj,
  removeObj,
  createObj
} from "./../../common/app_api";
import { API_URL } from "./../../common/config";

export const UPDATE_ACTION = "UPDATE";
export function update(payload) {
  return { type: UPDATE_ACTION, payload };
}
export const LIST_ACTION = "LIST";
export function list(payload) {
  return { type: LIST_ACTION, payload };
}
export const ADD_ACTION = "ADD_ACTION";
export function add(payload) {
  return { type: ADD_ACTION, payload };
}
export const ADD_LOADING = "ADD_LOADING";
export function loading(payload) {
  return { type: ADD_LOADING, payload };
}
export const ADD_ERROR = "ADD_ERROR";
export function addError(payload) {
  return { type: ADD_ERROR, payload };
}
export const DEL_ACTION = "DEL_ACTION";
export function del(payload) {
  return { type: DEL_ACTION, payload };
}

export const fetchTODO = () => (dispatch) => {
  dispatch(loading(true));
  getObjList(API_URL)
    .then((data) => dispatch(list(data)))
    .finally(() => dispatch(loading(false)));
};

export const toggleTODO = (id) => (dispatch, getState) => {
  const { TODO } = getState();
  const item = TODO.find((todo) => todo.id === id);
  const updatedItem = { ...item, isDone: !item.isDone };

  updateObj(API_URL, updatedItem).then((data) => dispatch(update(data)));
};

export const delTODO = (id) => (dispatch, getState) => {
  const { TODO } = getState();
  const item = TODO.find((todo) => todo.id === id);

  removeObj(API_URL, id).then((data) => dispatch(del(item)));
};

export const addTODO = (title) => (dispatch) => {
  const newObj = { title: title, isDone: false };

  createObj(API_URL, newObj).then((data) => dispatch(add(data)));
};
