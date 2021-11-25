import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { getPosts } from "./actions/post.action";
import { getUsers } from "./actions/user.action";
import App from "./App";
import rootReducer from "./reducers";
import "./styles/index.scss";

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(getPosts());
store.dispatch(getUsers());

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
