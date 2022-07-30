import { createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
const TODO = [
  { id: 1, title: "Купить кота", isDone: true },
  { id: 2, title: "Погладить кота", isDone: false },
  { id: 3, title: "Убрать за котом", isDone: false },
  { id: 4, title: "Разочароваться в коте", isDone: false },
  { id: 5, title: "Пойти на диалог с котом", isDone: false },
  { id: 6, title: "Найти способ шантажа кота", isDone: false },
  {
    id: 7,
    title: "Узнать где кот прячет компромат на меня",
    isDone: false
  },
  { id: 8, title: "Уничтожить улики", isDone: false },
  { id: 9, title: "Перестать писать списки", isDone: false }
];
const ERRORS = "";

const store = createStore(todoReducer, { TODO, ERRORS });

export default store;
