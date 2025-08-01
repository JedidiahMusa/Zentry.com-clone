import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import bgVigeo from "/public/videos/hero-1.mp4";


gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedVideos, setLoadedVideos] = useState(0);


  useEffect(() => {
    if (loadedVideos === totalVideos - 1) {
      setIsLoading(false);
    }
  }, [loadedVideos])
  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          ease: "power1.inOut",
          duration: 1.5,
        })
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: " polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%) ",
      borderRadius: "0, 0, 40% ,10% ",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      borderRadius: "0, 0, 0, 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      }
    });
  })

  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };
  const totalVideos = 4;
  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const nextVideoRef = useRef(null);
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;
  const handleVideoClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };
  return (
    <div className="w-screen h-dvh relative overflow-x-hidden ">
      {isLoading && (
        <div className="flex-center absolute z-[100] overflow-hidden h-dvh w-screen bg-violet-50 ">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="w-screen relative h-dvh bg-blue-75 rounded-lg overflow-hidden z-10 "
      >
        <div>
          <div className="mask-clip-path absolute absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleVideoClick}
              className="scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 origin-center"
            >
              <video
                loop
                muted
                playsInline
  controls={false}
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                ref={nextVideoRef}
                onLoadedData={handleVideoLoad}
                src={getVideoSrc(upcomingVideoIndex)}
              ></video>
            </div>
          </div>
          <video
            loop
            playsInline
  controls={false}
            muted
            id="next-video"
            className="absolute-center invisible size-64 absolute z-20 object-center object-cover"
            onLoadedData={handleVideoLoad}
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
          ></video>
          <video
            autoPlay
            muted
            playsInline
  controls={false}
            loop
            className="absolute top-0 left-0 size-full object-center object-cover "
            onLoadedData={handleVideoLoad}
            src={getVideoSrc(
              currentIndex === totalVideos - 1 ? 1 : currentIndex
            )}
          ></video>
        </div>
        <h1 className=" special-font absolute bottom-5 right-5 z-40 text-blue-75 hero-heading ">
          G<b>a</b>ming
        </h1>
        <div className="absolute top-0 left-0 z-40 size-full ">
          <div className="mt-24 px-5 sm:px-10 ">
            <h1 className="special-font hero-heading text-blue-100 ">
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
      </div>
      <h1 className=" special-font absolute bottom-5 right-5 text-black hero-heading ">
        G<b>a</b>ming
      </h1>
    </div>
  );
}

export default Hero;