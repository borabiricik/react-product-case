import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { routes } from "./modules/routes";
import { Layout } from "./modules/common/components/layout";
import { Provider } from "react-redux";
import { store } from "./modules/core/redux";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <Layout />
    <BrowserRouter>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} />
        ))}
      </Routes>
    </BrowserRouter>
  </Provider>
);
