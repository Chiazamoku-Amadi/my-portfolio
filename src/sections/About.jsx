import Globe from "react-globe.gl";
import Button from "../components/Button";
import { useState } from "react";

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("chiazamamadi@gmail.com");
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section id="about" className="c-space my-20">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid1.png"
              alt="grid-1"
              className="object-contain sm:h-[276px] h-fit w-full"
            />

            <div>
              <p className="grid-headtext">Hi, I am Chiazamoku</p>
              <p className="grid-subtext">
                With 4 years of experience, I have honed my skills in frontend
                development with a focus on scalable, user-friendly, responsive
                and pixel-perfect websites.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid2.png"
              alt="grid-2"
              className="object-contain sm:h-[276px] h-fit w-full"
            />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                I specialise in JavaScript/TypeScript with a focus on React &
                Next.js ecosystems.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="flex justify-center items-center rounded-3xl sm:h-[326px] h-fit w-full">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                // labelsData={[
                //   {
                //     lat: 40,
                //     lng: -100,
                //     text: "I'm here!",
                //     color: "white",
                //     size: 20,
                //   },
                // ]}
              />
            </div>

            <div>
              <p className="grid-headtext">
                I work remotely across most timezones
              </p>
              <p className="grid-subtext">
                I am based in Nigeria, with remote work available.
              </p>
              <a href="#contact" className="w-fit">
                <Button
                  name="Contact Me"
                  isBeam
                  containerClass="mt-10 w-full"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img
              src="/assets/grid3.png"
              alt="grid-3"
              className="object-contain sm:h-[266px] h-fit w-full"
            />

            <div>
              <p className="grid-headtext">My Passion for Coding</p>
              <p className="grid-subtext">
                I am passionate about solving problems and building innovative
                solutions through code. Coding isn&apos;t just my profession, it
                is my passion.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="/assets/grid4.png"
              alt="grid-4"
              className="object-cover sm:object-top h-fit sm:h-[276px] md:h-[126px] w-full"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact Me</p>

              <div className="copy-container" onClick={handleCopy}>
                <img
                  src={hasCopied ? "assets/tick.svg" : "assets/copy.svg"}
                  alt="copy"
                  className={hasCopied ? "h-4 w-4" : "h-5 w-5"}
                />
                <p className="md:text-xl text-gray_gradient text-white font-medium">
                  chiazamamadi@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
