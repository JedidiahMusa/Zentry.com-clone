import { useEffect, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [isLoading, setIsLoading] = useState(true);

  // Scroll-triggered GSAP animation on the video frame
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });

    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  }, []);

  // Set loading to false once the video is loaded
  const handleVideoLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="w-screen h-dvh relative overflow-x-hidden">
      {/* Loader screen while video loads */}
      {isLoading && (
        <div className="flex-center absolute z-[100] overflow-hidden h-dvh w-screen bg-violet-50">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div
        id="video-frame"
        className="w-screen relative h-dvh bg-blue-75 rounded-lg overflow-hidden z-10"
      >
        {/* Background video */}
        <video
          autoPlay
          muted
          playsInline
          controls={false}
          loop
          className="absolute top-0 left-0 size-full object-center object-cover"
          onLoadedData={handleVideoLoad}
          src="/videos/hero-1.mp4"
        ></video>

        {/* Overlay text and button */}
        <div className="absolute top-0 left-0 z-40 size-full">
          <div className="mt-24 px-5 sm:px-10">
            <h1 className="special-font hero-heading text-blue-100">
              Redefi<b>n</b>e
            </h1>
            <p className="mb-5 text-blue-100 max-w-64 font-robert-reguler">
              Enter the Metagame Layer <br />
              Unleash the Play Economy
            </p>
            <Button
              id="watch-trailer"
              title="Watch Trailer"
              leftIcon={<TiLocationArrow />}
              containerClass="bg-yellow-300 flex-center gap-1"
            />
          </div>
        </div>

        {/* Floating branding text */}
        <h1 className="special-font absolute bottom-5 right-5 z-40 text-blue-75 hero-heading">
          G<b>a</b>ming
        </h1>
      </div>

      {/* Fallback text layer for contrast */}
      <h1 className="special-font absolute bottom-5 right-5 text-black hero-heading">
        G<b>a</b>ming
      </h1>
    </div>
  );
}

export default Hero;
