import React from "react";
import RotatingPolyhedron2 from "@/components/RotatingPolyhedron2";
import ButtonClick from "@/components/ButtonClick";
import RoundedImageBox from "@/components/RoundedImageBox";
import Box from "@/components/Box";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);
export default function Tool() {
    const container = useRef();
    useGSAP(
        () => {
          const show = gsap.to(".textmoving", {
            y: -20,
            duration: 1,
            opacity: 1,
            delay: 0.1,
            stagger: 0.6,
            ease: "power2.out",
            force3D: true,
          });
    
          show.then(() => {
            setTimeout(() => {
              gsap.to(".disappear", {
                duration: 0.5,
                opacity: 0,
                y: -30,
                stagger: 0.1,
                ease: "back.in",
              });
            }, 700);
          });
        },
        { scope: container }
      );
  return (
    <div ref={container}>
      <div className="relative flex justify-center lign-center items-center h-auto bg-black z-1">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
          <RotatingPolyhedron2 />
        </div>
        <div className="block">
          <div className="relative pt-30 mb-[120px]" >
            <div className="flex capitalize justify-center">
              <span className="font-thin text-white ">
                <div className="font-semibold flex gap-2 justify-center">
                  <div className="text-black content-center mr-5">
                    <RoundedImageBox />
                  </div>
                  <h1 className="font-semibold text-8xl mb-7">
                    Unique <span className="font-thin">Skills</span>{" "}
                  </h1>
                </div>
                <div className="font-semibold flex gap-2">
                  <h1 className="text-8xl">
                    For my <span className="font-thin"> Career. </span>{" "}
                  </h1>
                  <div className="text-black content-end ml-5">
                    <ButtonClick hide={true} />
                  </div>
                </div>
              </span>
            </div>
          </div>
          <div>
            <Box />
          </div>
        </div>
      </div>
    </div>
  );
}
