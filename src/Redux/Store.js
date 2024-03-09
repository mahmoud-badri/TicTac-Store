import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./compineItem";
import { thunk } from "redux-thunk";

const myStore = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default myStore;