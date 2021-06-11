import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducers";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";
import App from "./containers/Container";
import thunk from "redux-thunk";

const middleWares = [thunk];
const store = createStore(rootReducers, applyMiddleware(...middleWares));

console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
