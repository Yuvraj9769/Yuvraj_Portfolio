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
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import skillsContext from "./store/ContextApi.jsx";
import { skilldataInfo, projectDataInfo } from "./store/dataProvider.js";
import WrapperForProject from "./Components/WrapperForProject.jsx";
import WrapperForRouting from "./Components/WrapperForRouting.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Home",
    element: <App />,
  },
  {
    path: "/AboutMe",
    element: (
      <WrapperForRouting>
        <Aboutme />
      </WrapperForRouting>
    ),
  },
  {
    path: "/Project",
    element: (
      <WrapperForRouting>
        <WrapperForProject>
          <Project />
        </WrapperForProject>
      </WrapperForRouting>
    ),
  },
  {
    path: "/Contact",
    element: (
      <WrapperForRouting>
        <Contact />
      </WrapperForRouting>
    ),
  },
  {
    path: "/Skills",
    element: (
      <WrapperForRouting>
        <Skills />
      </WrapperForRouting>
    ),
  },
  {
    path: "*",
    element: <ErrorMsg />,
  },
  {
    path: "/Skills/:ind",
    element: <Skillsdata />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <skillsContext.Provider value={{ skilldataInfo, projectDataInfo }}>
      <RouterProvider router={router}></RouterProvider>
    </skillsContext.Provider>
  </React.StrictMode>
);
