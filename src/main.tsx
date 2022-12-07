import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import App from "./App";
import reducers from "./redux/reducers";
import sagas from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const store = configureStore({
  reducer: reducers,
  middleware,
});

sagaMiddleware.run(sagas);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);
