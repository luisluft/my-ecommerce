import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./root.saga";

const middlewares = [];

const sagaMiddleware = createSagaMiddleware();

middlewares.push(sagaMiddleware);

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : (f) => f
  )
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
