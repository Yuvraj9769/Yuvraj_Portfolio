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
    element: [<Navbar />, <Aboutme />, <Footer />],
  },
  {
    path: "/Project",
    element: [<Navbar />, <Project />, <Footer />],
  },
  {
    path: "/Contact",
    element: [<Navbar />, <Contact />, <Footer />],
  },
  {
    path: "/Skills",
    element: [<Navbar />, <Skills />, <Footer />],
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
