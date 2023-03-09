import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Projects from "./routes/Projects";
import Home from "./routes/Home";
import Employment from "./routes/Employment";
import Contact from "./routes/Contact";
import About from "./routes/About";

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
      {
        path: "employment",
        element: <Employment />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "aboutme",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
