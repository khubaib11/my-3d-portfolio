import Globe from "react-globe.gl";
import Button from "./Button";
import { useState } from "react";

export default function About() {
  const [hasCopied, setHasCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("khankhubaib089@gmailcom");
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };
  return (
    <section className="c-space my-20 " id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6  md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid0001.png"
              alt="grid-1"
              className="w-full sm:h-[276px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">Hi, I’m Khubaib</p>
              <p className="grid-subtext">
                With 2 years of experience, I have honed my expertise in both
                frontend and backend development, specializing in AI-driven
                solutions.
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <div className="flex justify-center items-center w-full">
              <img
                src="/assets/grid02.png"
                alt="grid-2"
                className="w-full sm:w-[276px] h-fit object-contain"
              />
            </div>
            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialize in JavaScript, with a focus on Node.js and React
                (MERN stack), and a strong emphasis on backend development.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit  flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0,0,0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="https://unpkg.com/three-globe@2.44.0/example/img/earth-topology.png"
                labelsData={[
                  {
                    lat: 28.3753,
                    lng: 67.4451,
                    label: "I'm here!",
                    color: "white",
                    size: 26,
                  },
                ]}
              />
            </div>
            <div>
              <p className="grid-headtext">
                I work remotely across most time zones
              </p>
              <p className="grid-subtext">
                I am based in Pakistan, available for remote work, and open to
                onsite opportunities anywhere in the country.
              </p>
              <a href="#contact" className="w-fit">

              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
              </a>

            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="w-full sm:h-[266px] h-fit object-contain"
            />
            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I love solving problems and building innovative solutions
                through code. Coding isn’t just my profession — it’s my passion.
              </p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-1 xl:row-span-2">
        <div className="grid-container flex justify-center items-center overflow-hidden">
        <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="
                w-full
                md:h-[126px]
                sm:h-[276px]
                h-fit
                object-cover
                sm:object-contain
                lg:scale-160

                "
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "/assets/tick.svg" : "/assets/copy.svg"}
                  alt="copy"
                />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">
                  khankhubaib089@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
