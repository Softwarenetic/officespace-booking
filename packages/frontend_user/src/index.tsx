import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { setupStore } from "./store/store";
import { setupAxiosAuth, setupAxiosBaseUrl } from "./config/setup";

const store = setupStore();

setupAxiosBaseUrl();
setupAxiosAuth();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


reportWebVitals();
