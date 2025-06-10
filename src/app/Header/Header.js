import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import RotatingPolyhedron from "@/components/RotatingPolyhedron";
import ButtonClick from "@/components/ButtonClick";
gsap.registerPlugin(useGSAP);
export default function Header() {
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".appear",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          delay: 0.3,
          ease: "power3.out",
          stagger: 0.2,
        }
      );
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative flex justify-center  align-center items-center h-[100vh] bg-black z-1 px-4"
    >
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <RotatingPolyhedron />
      </div>

      <div className="appear w-full max-w-2xl md:max-w-4xl lg:max-w-6xl relative z-10">
        <div className="block">
          <div className="mb-8 md:mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-[86px] text-white leading-tight">
              <span className="font-[500]">Designing</span>{" "}
              <span className="font-thin">a Better </span>
              <br />
              <span className="font-thin">
                <span className="font-[500]">World</span> Today
              </span>
            </h1>
          </div>
          <div className="w-full md:w-4/6 lg:w-3/6 text-white mb-10 md:mb-15 opacity-60">
            <p className="text-base md:text-xl lg:text-lg">
              Step into a world where ideas evolve into impactful digital
              experiences. Through code and design, I bring innovative visions
              to life—transforming imagination into interactive reality
            </p>
          </div>
          <div>
            <ButtonClick hide={false} />
          </div>
        </div>
      </div>
    </div>
  );
}
