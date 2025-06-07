import React from "react";
import ObjectSVG from "@/components/ObjectSVG";
import Image from "next/image";
import { Avatar } from "@mui/material";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function ViewingTeam() {
  const container = useRef();

  const ImageLinks = [
    {
      url: "https://cntt.dlu.edu.vn/wp-content/uploads/2023/06/2-2-1024x614.jpg",
    },
    {
      url: "https://cdn.techinasia.com/cloudinary/transformations/wp-content/uploads/2023/02/1677472086_672cb0fbe063e8f34bb496e496b3c006_v1677472086_xlarge.webp",
    },
    {
      url: "https://fptsoftware.com/-/media/project/fpt-software/fso/about-us/global-presence/fpt-da-nang/fpt-da-nang-1.jpg?modified=20230811072431",
    },
    {
      url: "https://channel.mediacdn.vn/2021/6/11/photo-6-1623405057934163762226.jpg",
    },
  ];

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
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40 ">
          <ObjectSVG position={60} />
        </div>

        <div className="w-9/12 relative z-10">
          <div className="flex row justify-between">
            <div className=" w-[41%] content-center">
              <h1 className="appear text-7xl tracking-normal leading-tight mb-16">
                <span className="font-[500]">
                  Work <br /> Experience
                </span>
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
                  Collaboration is at the heart of what we do. Our team thrives
                  on the synergy that arises when unique perspectives converge,
                  fostering an environment of boundless creativity. By
                  harnessing our collective expertise, we produce extraordinary
                  results that consistently surpass expectations.{" "}
                </p>
              </div>
              <div
                className="appear mb-16 flex"
                style={{ alignItems: "center", alignContent: "center" }}
              >
                <div className="flex bg-[#ff9800] p-2 rounded-full tracking-wider">
                  <div
                    className="flex justify-between text-center cursor-pointer"
                    style={{ alignItems: "center" }}
                  >
                    <h1
                      className="uppercase text-[13px] text-center ml-7 font-[600]"
                      style={{ letterSpacing: "4px" }}
                    >
                      Read More
                    </h1>
                    <div className="ml-7">
                      <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[45%] grid grid-cols-2 gap-6">
              <div>
                {ImageLinks.slice(0, 2).map((image, index) => (
                  <div key={index} className="mb-7">
                    <img
                      src={image.url}
                      alt=""
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        cursor:"pointer"
                      }}
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="mb-10">
                  <span className=" text-[#939393]">
                    <span className="text-[#F20410] font-light">* </span>The
                    picture from FPT Software
                  </span>
                </div>
                {ImageLinks.slice(2, 4).map((image, index) => (
                  <div key={index} className="mb-7">
                    <img
                      src={image.url}
                      alt=""
                      style={{
                        width: "100%",
                        height: "360px",
                        objectFit: "cover",
                        cursor:"pointer"
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
