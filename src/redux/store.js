import { createStore, applyMiddleware, compose } from "redux";
import { persistStore } from "redux-persist";
import rootReducer from "./root.reducer";
import createSagaMiddleware from "redux-saga";
import { fetchCollectionsStart } from "./shop/shop.sagas";

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

sagaMiddleware.run(fetchCollectionsStart);

export const persistor = persistStore(store);
