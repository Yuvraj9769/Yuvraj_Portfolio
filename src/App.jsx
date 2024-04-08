import gsap from "gsap";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Navbar from "./Components/Navbar";
import Aboutme from "./Components/Aboutme";
import Project from "./Components/Project";
import Contact from "./Components/Contact";
import Skills from "./Components/Skills";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    let tl = gsap.timeline();

    gsap.set(".infoname", {
      x: -500,
      opacity: 0,
    });

    gsap.set(".webdiv > *", {
      x: 500,
      opacity: 0,
    });

    gsap.set([".navh1", "nav .ul li", ".navbtn"], {
      y: -100,
    });

    tl.to([".navh1", "nav .ul li", ".navbtn"], {
      y: 0,
      delay: 0.2,
      stagger: 0.2,
    });

    tl.to(".webdiv > *", {
      x: 0,
      duration: 0.5,
      stagger: 0.5,
      opacity: 1,
    });

    tl.to(".infoname", {
      x: 0,
      opacity: 1,
      duration: 1,
    });
  }, []);

  let getMouseData = (e) => {
    const circle = document.querySelector(".circle");
    const circleRect = circle.getBoundingClientRect();

    circle.style.opacity = 1;
    circle.style.scale = 1;

    const offsetX = e.clientX - circleRect.left - circleRect.width / 2;
    const offsetY = e.clientY - circleRect.top - circleRect.width / 2;

    gsap.to(".circle", {
      x: `+=${offsetX}`,
      y: `+=${offsetY}`,
      duration: 0.8,
    });
  };

  let MouseLeave = (e) => {
    const circle = document.querySelector(".circle");
    circle.style.opacity = 0;
    circle.style.scale = 0;
  };

  return (
    <div
      className="w-screen flex relative justify-center items-center"
      onMouseMove={getMouseData}
      onMouseLeave={MouseLeave}
    >
      <div className="circle hidden absolute w-10 rounded-full h-10 border border-red-600 left-0 lg:inline-flex justify-center items-center text-[3.25rem] pb-[37px] 2xl:w-14 2xl:h-14 text-red-600 z-[60] pointer-events-none">
        .
      </div>
      <div className="w-full flex flex-col items-center">
        <Navbar />
        <div className="w-[95%] flex flex-col items-center gap-1">
          <Info />
          <Aboutme />
          <Project />
          <Skills />
          <Contact />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
