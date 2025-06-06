import React from "react";
import ObjectSVG from "@/components/ObjectSVG";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
export default function Aboutme() {
  const container = useRef();
  useGSAP(
    () => {
      gsap.fromTo(
        ".appear",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power3.out",
          stagger: 0.8,
          scrollTrigger: {
            trigger: container.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
    <div className="relative flex justify-center align-center items-center bg-white py-30">
      <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <ObjectSVG />
      </div>

      <div className="w-9/12 relative z-10">
        <div className="flex row justify-between">
          <div className=" w-[41%] content-center">
            <h1 className="appear text-7xl tracking-normal leading-tight mb-16">
              <span className="font-[500]">
                Discover <br /> About
              </span>
              <span className="font-thin"> Myself</span>{" "}
            </h1>
            <div className="mb-16">
              <p className="appear mb-10 text-base text-gray-500 font-light leading-relaxed">
                At our design studio, we are a collective of talented
                individuals ignited by our unwavering passion for transforming
                ideas into reality. With a harmonious blend of diverse
                backgrounds and a vast array of skill sets, we join forces to
                create compelling solutions for our esteemed clients.
              </p>
              <p className="appear mb-10 text-base text-gray-500 font-light leading-relaxed">
                Collaboration is at the heart of what we do. Our team thrives on
                the synergy that arises when unique perspectives converge,
                fostering an environment of boundless creativity. By harnessing
                our collective expertise, we produce extraordinary results that
                consistently surpass expectations.{" "}
              </p>
            </div>
            <div
              className="appear mb-16 flex"
              style={{ alignItems: "center", alignContent: "center" }}
            >
              <div className="mr-7">
                <Avatar
                  alt="Remy Sharp"
                  src="/face.png"
                  sx={{ width: 85, height: 85 }}
                />
              </div>
              <div className="text-lg">
                <h2 className="font-medium ">
                  Passionately Creating{" "}
                  <span className="font-thin">Design Wonders:</span>
                </h2>
                <h2 className="font-medium ">
                  Unleashing{" "}
                  <span className="font-thin">Boundless Creativity</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="w-[38%]">
            <div className="w-full">
              <Image
                src="/picturemyself.png"
                width={500}
                height={500}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
