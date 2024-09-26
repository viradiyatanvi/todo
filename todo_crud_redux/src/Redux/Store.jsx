import { legacy_createStore , applyMiddleware} from "redux";
import {thunk} from "redux-thunk"; // Corrected import
import Reducer from "./Reducer";

export const store = legacy_createStore(Reducer,applyMiddleware(thunk));
