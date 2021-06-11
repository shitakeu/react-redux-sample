import { createStore } from "redux";
import rootReducers from "./reducers";
import { Provider } from "react-redux";
import { render } from "react-dom";
import React from "react";
import App from "./containers/Container";

const store = createStore(rootReducers);

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
