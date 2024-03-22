import { Outlet } from "react-router-dom";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Info />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
