import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import {Provider} from "react-redux";
import {setupStore} from "./store/store";

const store = setupStore();

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <Provider store={store}>
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    </Provider>
);


reportWebVitals();
