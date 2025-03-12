import { useContext, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FaGithub } from "react-icons/fa";
import ContextApi from "../store/ContextApi";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
  const { projectDataInfo } = useContext(ContextApi);

  const [settings, setSettings] = useState({
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  });

  const updateSettings = () => {
    const width = window.innerWidth;
    if (width >= 1500) {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
      });
    } else {
      setSettings({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides for smaller screens
        slidesToScroll: 1,
      });
    }
  };

  useEffect(() => {
    gsap.set(".project-container >  .card", {
      scale: 0,
      opacity: 0,
    });

    gsap.to(".project-container >  .card", {
      opacity: 1,
      scale: 1,
      stagger: 0.2,
      scrollTrigger: {
        trigger: ".project-container >  .card",
        scroller: "body",
        start: "top 46%",
        toggleActions: "restart none none none",
      },
    });

    updateSettings();

    window.addEventListener("resize", updateSettings);

    return () => {
      window.removeEventListener("resize", updateSettings);
    };
  }, []);

  return (
    <div className="w-full bg-black px-3 py-2 flex flex-col gap-3 md:gap-5 my-8">
      <p className="relative text-red-600 text-xl xl:text-2xl mb-2 before:absolute before:bg-[#dadada] before:h-1 before:w-[35%] before:top-[50%] xl:after:h-[2px] xl:before:h-[2px] before:left-0  after:absolute after:bg-[#dadada] after:h-1 after:w-[35%] after:top-[50%] after:right-0 before:hidden sm:before:block after:hidden sm:after:block text-start sm:text-center">
        Projects
      </p>

      <div className="hidden md:block">
        <Slider {...settings}>
          {projectDataInfo.map((e, ind) => (
            <div
              className="project-card bg-white rounded-lg shadow-md overflow-hidden xl:gap-5 border-[#dadada] lg:py-2 h-auto px-2"
              key={ind}
            >
              <img
                className="project-image w-full rounded-md h-[205px] object-contain border border-[#dadada]"
                src={e.img}
              />
              <div className="project-details p-2">
                <h3 className="project-name text-xl font-semibold my-2 mb-3 text-center">
                  {e.title}
                </h3>
                <div className="project-buttons flex flex-col gap-4 text-center">
                  <a
                    href={e.github || "#"}
                    target="_blank"
                    rel="noopener noreferre"
                    className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center items-center hover:bg-blue-600 transition-colors"
                  >
                    {e.github && <FaGithub className="mr-2" />}
                    {e.github ? " View on GitHub" : "Internship Project"}
                  </a>
                  <a
                    href={e.liveLink ? e.liveLink : e.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                  >
                    {e.liveLink ? "Visit Site" : "View Code"}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* below for small devices till 768px*/}
      <div className="md:hidden project-container w-full flex flex-col items-center gap-5">
        {projectDataInfo.map((e, ind) => (
          <div
            className="bg-white card w-[350px] rounded-lg shadow-md overflow-hidden xl:gap-5 border-[#dadada] lg:py-2 h-auto px-2"
            key={ind}
          >
            <img
              className="project-image w-full rounded-md h-[215px] object-contain border border-[#dadada]"
              src={e.img}
            />
            <div className="project-details p-2">
              <h3 className="project-name text-xl font-semibold my-2 mb-3 text-center">
                {e.title}
              </h3>
              <div className="project-buttons flex flex-col gap-4 text-center">
                <a
                  href={e.github || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded-lg flex justify-center items-center hover:bg-blue-600 transition-colors"
                >
                  {e.github && <FaGithub className="mr-2" />}
                  {e.github ? "View on GitHub" : "Internship Project"}
                </a>
                <a
                  href={e.liveLink ? e.liveLink : e.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors"
                >
                  {e.liveLink ? "Visit Site" : "View Code"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* Above for small devices till 768px*/}
    </div>
  );
};

export default Project;
