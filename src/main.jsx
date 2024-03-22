import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Aboutme from "./Components/Aboutme.jsx";
import Project from "./Components/Project.jsx";
import Contact from "./Components/Contact.jsx";
import Skills from "./Components/Skills.jsx";
import ErrorMsg from "./Components/ErrorMsg.jsx";
import Skillsdata from "./Components/Skillsdata.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/Home",
        element: <App />,
      },
      {
        path: "/AboutMe",
        element: <Aboutme />,
      },
      {
        path: "/Project",
        element: <Project />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/Skills",
        element: <Skills />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorMsg />,
  },
  {
    path: "/Skills/:id",
    element: <Skillsdata />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
