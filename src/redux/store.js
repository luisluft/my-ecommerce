import { createStore, applyMiddleware, compose } from "redux";
import logger from "redux-logger";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
import thunk from "redux-thunk";
const middlewares = [];

if (process.env.NODE_ENV === "development") middlewares.push(logger);
middlewares.push(thunk);
export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

export const persistor = persistStore(store);
