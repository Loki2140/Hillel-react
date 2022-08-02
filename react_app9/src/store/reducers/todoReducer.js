import {
  LIST_ACTION,
  ADD_LOADING,
  UPDATE_ACTION,
  ADD_ACTION,
  ADD_ERROR,
  DEL_ACTION
} from "./../actions/todoActions";
const initialValue = {
  LOADING: false,
  TODO: [],
  ERRORS: ""
};

export default function todoReducer(state = initialValue, { type, payload }) {
  switch (type) {
    case LIST_ACTION:
      return {
        ...state,
        TODO: payload
      };
    case UPDATE_ACTION:
      return {
        ...state,
        TODO: state.TODO.map((task) => {
          return task.id === payload.id ? payload : task;
        })
      };
    case DEL_ACTION:
      return {
        ...state,
        TODO: state.TODO.filter((task) => task.id !== payload.id)
      };
    case ADD_ACTION:
      return {
        ...state,
        TODO: [...state.TODO, payload]
      };
    case ADD_LOADING:
      return { ...state, LOADING: payload };
    case ADD_ERROR:
      return {
        ...state,
        ERRORS: payload
      };
    default:
      return state;
  }
}
