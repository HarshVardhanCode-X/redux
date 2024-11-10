import { combineReducers } from "redux";
import cartReducers from "./Cartreducers";

const combinedReducers = combineReducers({
    cartReducer: cartReducers,
});

export default combinedReducers;