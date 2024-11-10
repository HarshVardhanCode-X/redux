
import { createStore } from "redux";
import combinedReducers from ".";

const store = createStore(combinedReducers);

export default store;