import {
  DEL_ACTION,
  TOG_ACTION,
  ADD_ACTION,
  ADD_ERROR
} from "./../actions/todoActions";

export default function todoReducer(state, { type, payload }) {
  switch (type) {
    case DEL_ACTION:
      return {
        ...state,
        TODO: state.TODO.filter((task) => task.id !== payload)
      };
    case TOG_ACTION:
      return {
        ...state,
        TODO: state.TODO.map((task) => {
          return task.id === payload ? { ...task, isDone: !task.isDone } : task;
        })
      };
    case ADD_ACTION:
      return {
        ...state,
        TODO: [...state.TODO, { title: payload, id: Date.now(), isDone: false }]
      };
    case ADD_ERROR:
      return {
        ...state,
        ERRORS: payload
      };
    default:
      return state;
  }
}
