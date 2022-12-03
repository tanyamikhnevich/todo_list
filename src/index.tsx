import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/app";
import { BrowserRouter } from "react-router-dom";
import { PopupProvider } from "./features/popup/popup-provider";
import { Provider } from "react-redux";
import { store } from "app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PopupProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PopupProvider>
  </Provider>
);
