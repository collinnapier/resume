import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./routes/Projects";
import Home from "./routes/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
