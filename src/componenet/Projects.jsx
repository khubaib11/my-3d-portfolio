import React, { useState } from "react";
import { myProjects } from "../constant";
import { useMediaQuery } from "react-responsive";

export default function Projects() {
  const [selectedprojectIndex, setSelectedprojectIndex] = useState(0);
  const currentProject = myProjects[selectedprojectIndex];
  const projectCount = myProjects.length;

  const handleNavigation = (direction) => {
    setSelectedprojectIndex((prevIndex) => {
      if (direction === "previous") {
        return prevIndex === 0 ? projectCount - 1 : prevIndex - 1;
      } else {
        return prevIndex === projectCount - 1 ? 0 : prevIndex + 1;
      }
    });
  };

  const isMobile = useMediaQuery({ maxWidth: 768 });

  const isMobileView = currentProject.isMob;

  const mobileFrameClasses =
    "relative w-64 h-auto p-2 bg-black rounded-[2rem] shadow-2xl transition-transform duration-500";
  const laptopFrameClasses =
    "relative w-full max-w-2xl  lg:ml-5 h-auto p-2 bg-gray-900 rounded-3xl shadow-2xl transition-transform duration-500";

  const videoContainerClasses = isMobileView
    ? "bg-black border-[6px] border-black rounded-[1.8rem] overflow-hidden"
    : "bg-gray-800 border-4 border-gray-800 rounded-2xl overflow-hidden p-1";

  const videoClasses = isMobileView
    ? "w-full h-auto aspect-[9/19.5] object-cover rounded"
    : "w-full h-auto object-cover rounded-xl";

  return (
    <section className="c-space my-20 lg:my-5 " id="work">
      <h3 className="head-text">My Work</h3>

      {/* <p className="head-text">My Work </p> */}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
        <div className="flex flex-col gap-5 relative sm:10 py-10 px-5 shadow-2xl shadow-black-200">
          <div className="absolute top-0 right-0">
            {currentProject.spotlight && (
              <img
                src={currentProject.spotlight}
                alt="spotlight"
                className="w-full h-96 object-cover rounded-xl"
              />
            )}
          </div>
          <div
            className="p-3 backdrop-filter backdrop-blur-3x w-fit rounded-lg "
            style={currentProject.logoStyle}
          >
            <img
              src={currentProject.logo}
              alt="logo"
              className="w-10 h-10 shadow-sm"
            />
          </div>
          <div className="flex flex-col gap-5 text-white-600 my-5">
            <p className="text-white text-2xl font-semibold animatedText ">
              {currentProject.title}
            </p>
            <p className="animatedText ">{currentProject.desc}</p>
            {isMobile ? (
              <div></div>
            ) : (
              <p className="animatedText ">{currentProject.subdesc}</p>
            )}
          </div>
          <div className="flex items-center justify-between flex-wrap gap-5">
            <div className="flex items-center gap-3">
              {currentProject.tags.map((tag, index) => (
                <div key={index} className="tech-logo group relative">
                  <img src={tag.path} alt={tag.name} />
                  <span className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded bg-black text-white text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {tag.name}
                  </span>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-6">
              {currentProject.gitURL && (
                <a
                  href={currentProject.gitURL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 cursor-pointer text-white hover:text-gray-300 transition-colors"
                >
                  <p>Check Code</p>
                  <img
                    src="/assets/arrow-up.png"
                    className="w-3 h-3"
                    alt="arrow"
                  />
                </a>
              )}
              {currentProject.href && (
                <a
                  href={currentProject.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 cursor-pointer text-white hover:text-gray-300 transition-colors"
                >
                  <p>Live Site</p>
                  <img
                    src="/assets/arrow-up.png"
                    className="w-3 h-3"
                    alt="arrow"
                  />
                </a>
              )}
            </div>
          </div>
          <div className="flex justify-between items-center mt-7 ">
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("previous")}
            >
              <img
                src="/assets/left-arrow.png"
                alt="left arrow"
                className="w-4 h-4"
              />
            </button>
            <button
              className="arrow-btn"
              onClick={() => handleNavigation("next")}
            >
              <img
                src="/assets/right-arrow.png"
                alt="rigth arrow"
                className="w-4 h-4"
              />
            </button>
          </div>
        </div>
        {/* Dynamic Device Screen for Video */}
        <div className="w-full flex justify-center items-center">
          {isMobileView ? (
            // Mobile Frame
            <div className={mobileFrameClasses}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/5 h-4 bg-gray-900 rounded-b-xl z-10"></div>
              <div className="absolute top-2 left-1/2 -translate-x-1/2 mt-1 w-10 h-1.5 bg-gray-700 rounded-full z-20"></div>
              <div className="absolute top-2 left-1/2 translate-x-3 mt-1 w-2 h-2 bg-gray-600 rounded-full z-20"></div>
              <div className={videoContainerClasses}>
                {currentProject.texture ? (
                  <video
                    src={currentProject.texture}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className={videoClasses}
                  />
                ) : (
                  <div className="w-full aspect-[9/19.5] flex items-center justify-center text-gray-500 bg-gray-900 rounded-2xl">
                    Video not available.
                  </div>
                )}
              </div>
            </div>
          ) : (
            // Laptop Frame
            <div className={laptopFrameClasses}>
              <div className="w-full h-auto p-1  bg-gray-800 rounded-2xl overflow-hidden">
                <div className={videoContainerClasses}>
                  {currentProject.texture ? (
                    <video
                      src={currentProject.texture}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className={videoClasses}
                    />
                  ) : (
                    <div className="w-full aspect-[16/9] flex items-center justify-center text-gray-500 bg-gray-900 rounded-xl">
                      Video not available.
                    </div>
                  )}
                </div>
              </div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2/3 h-2 bg-gray-700 rounded-b-2xl"></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
