import { ADD_TASK, REMOVE_TASK, TOGGLE_TASK } from "./actionTypes";

export function addTaskAction(task) {
  return {
    type: ADD_TASK,
    payload: {
      task,
    },
  };
}

export function removeTaskAction(taskID) {
  return {
    type: REMOVE_TASK,
    payload: {
      id: taskID,
    },
  };
}

export function toggleTaskAction(taskID) {
  return {
    type: TOGGLE_TASK,
    payload: {
      id: taskID,
    },
  };
}
