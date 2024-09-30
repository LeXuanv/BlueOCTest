import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import { thunk } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const composedEnhancers = composeWithDevTools(applyMiddleware(thunk));
const store = createStore(rootReducer, composedEnhancers);

export default store;
