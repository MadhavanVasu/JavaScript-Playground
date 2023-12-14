import { DECREMENT, INCREMENT } from "../constants/ActionTypes";

export default function countReducer(count, action) {
  switch (action.type) {
    case INCREMENT:
      return count + 1;
    case DECREMENT:
      return count - 1;
    default:
      return count;
  }
}
