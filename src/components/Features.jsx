import React from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useState, useRef } from "react";




const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);
  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    setTransformStyle(" perspective(700px) rotateX(10deg) rotateY(10deg) scale3d(.95, .95, .95)");
  }
  const handleMouseLeave = () => {}
  return(
    <div ref={itemRef} onMouseMove={handleMouseMove} style={{transform: transformStyle}} onMouseLeave={handleMouseLeave} className={className}>
      { children }
    </div>
    
  )
}


export const BentoCard = ({ src, title, description }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        muted
        loop
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50 ">
        <div>
          <h1 className="bento-title special-font">{title}</h1>
          {description && (
            <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => {
  return (
    <section className="bg-black pb-52 ">
      <div className="container mx-auto px-3 md:px-10 ">
        <div className="px-5 py-32">
          <p className="font-circular-web text-lg text-blue-50">
            Into the metagame layer
          </p>

          <p className="max-w-md font-circular-web text-lg opacity-50 text-blue-50">
            Imerce yourself in a rich and ever expanding universe where a
            vibrant array of products converge into an interconnected overlay
            experience on your world{" "}
          </p>
        </div>
        <div className="border border-white/20 relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-65vh ">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radie<b>n</b>t
              </>
            }
            description="A cross-platform, meta-game, turning your activities across web2 and web3 into a single, immersive experience."
          />
        </div>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2 ">
            <BentoCard src="videos/feature-2.mp4" title={<>zig<b>m</b>a</>} description="An anime and gaming-inspired NFT collection - the IP primed for expansion" />
          </BentoTilt >
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard src="videos/feature-3.mp4" title={<>n<b>e</b>xus</>} description="A gamified social hub, adding a new dimension of play to social interaction for web3 communities" />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0 ">
            <BentoCard src="videos/feature-4.mp4" title={<>az<b>u</b>l</>} description="A cross-world AI agent, elevating your gameplay to be more fun and productive." />
          </BentoTilt>
          <BentoTilt className="bento-tilt_2">
            <div className="flex size-full flex-col justify-between bg-violet-300 p-5 ">
              <h1 className=" bento-title special-font max-w-64 text-black ">m<b>o</b>re com<b>i</b>ng <b>s</b>oon!</h1>
              <TiLocationArrow className="m-5 scale-[5] self-end" />
            </div>
          </BentoTilt>
          <BentoTilt className="bento-tilt_2 ">
            <video loop muted autoPlay className="size-full object-cover object-center" src="videos/feature-5.mp4"></video>
            </BentoTilt> 
        </div>
      </div>
    </section>
  );
};

export default Features;
