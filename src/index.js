import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import BoxCon from "./container/box-container";
import "./index.css";

let store = createStore(reducers, applyMiddleware(thunk));

class App extends React.Component {
  render() {
    return <BoxCon></BoxCon>;
  }
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
