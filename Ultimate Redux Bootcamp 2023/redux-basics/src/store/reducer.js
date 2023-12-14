import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "./actionTypes";

let id = 0;

export function reducer(state = [], action) {
  switch (action.type) {
    case ADD_TASK:
      return [
        ...state,
        {
          id: ++id,
          task: action.payload.task,
          completed: false,
        },
      ];

    case REMOVE_TASK:
      return state.filter((task) => task.id != action.payload.id);

    case TOGGLE_TASK:
      return state.map((task) => {
        if (task.id === action.payload.id)
          return { ...task, completed: !task.completed };
        return task;
      });

    default:
      return state;
  }
}
