import {
  addTaskAction,
  removeTaskAction,
  toggleTaskAction,
} from "./store/actions";
import store from "./store/store";

store.subscribe(() => {
  console.log("State Changed!");
  console.log(JSON.stringify(store.getState()));
});

// Always return a new object when changing a particular field in an object -> Use DESTRUCTURING
// Otherwise it might cause problems while calling getState().
// {
//     [
//         obj1, -> obj1 ref
//         obj2, -> obj2 ref
//     ]
// }

store.dispatch(addTaskAction("Complete Redux course in Udemy"));

store.dispatch(addTaskAction("Complete Kafka tutorial"));

store.dispatch(removeTaskAction(2));

// for (var i = 0; i < 1000000000; i++) {}

// console.log("For loop exited");

store.dispatch(toggleTaskAction(1));
