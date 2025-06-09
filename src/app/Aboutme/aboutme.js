import React from "react";
import ObjectSVG from "@/components/ObjectSVG";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);
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
          delay: 0.5,
          ease: "power3.out",
          stagger: 0.5,
          scrollTrigger: {
            trigger: container.current,
            start: "top 60%",
            toggleActions: "play none none none",
          },
        }
      );
      gsap.from(
        ".paragraph-appear",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.7,
          scrollTrigger: {
            trigger: container.current,
            start: "top 69%",
            toggleActions: "play none none none",
          },
        },
        "-=0.4"
      );
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="relative flex justify-center align-center items-center bg-white py-30">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
          <ObjectSVG position={110} />
        </div>

        <div className="w-9/12 relative z-10">
          <div className="flex row justify-between">
            <div className="appear w-[41%] content-center">
              <h1 className="paragraph-appear text-7xl tracking-normal leading-tight mb-16">
                <span className="font-[500]">
                  Discover <br /> About
                </span>
                <span className="font-thin"> Myself</span>{" "}
              </h1>
              <div className="paragraph-appear mb-16">
                <p className="mb-10 text-base text-gray-500 font-light leading-relaxed">
                  As a Front-end and Mobile Developer, I thrive on transforming
                  user-centric ideas into functional, engaging digital
                  experiences. With hands-on experience in ReactJS, React
                  Native, and TypeScript, I specialize in crafting responsive,
                  intuitive UIs that not only look great but perform flawlessly
                  across platforms.
                </p>
                <p className="mb-10 text-base text-gray-500 font-light leading-relaxed">
                  Driven by curiosity and a passion for clean, efficient code,
                  I&apos;ve contributed to multiple real-world projects—from
                  health tech apps to e-commerce dashboards—each built with
                  modern frameworks and tools like Zustand, Firebase, Supabase,
                  and MUI. My development journey is fueled by Agile
                  collaboration, continuous learning, and a focus on
                  performance, accessibility, and user experience.
                </p>
              </div>
              <div
                className="paragraph-appear mb-16 flex"
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
                  <h2 style={{ fontWeight: "600" }}>
                    Passionately Creating{" "}
                    <span className="font-thin">Design Wonders:</span>
                  </h2>
                  <h2 style={{ fontWeight: "600" }}>
                    Unleashing{" "}
                    <span style={{ fontWeight: "100" }}>
                      Boundless Creativity
                    </span>
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
