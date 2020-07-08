// import { createStore, applyMiddleware } from "redux";
// import { createLogger } from "redux-logger";
// import thunk from "redux-thunk";
// import rootReducer from "./reducers/rootReducer";

// const loggerMiddleware = createLogger();
// const middleware = applyMiddleware(thunk, loggerMiddleware);

// export const store = createStore(rootReducer, middleware);

import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers/rootReducer";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middleware = [thunk];
const loggerMiddleware = createLogger();

const composeEnhancers = devtools || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
);
