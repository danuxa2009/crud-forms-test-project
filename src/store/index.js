import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const loggerMiddleware = createLogger();
const middleware = applyMiddleware(thunk, loggerMiddleware);

export const store = createStore(rootReducer, middleware);
