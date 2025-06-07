import React from "react";
import ObjectSVG from "@/components/ObjectSVG";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import FacebookIcon from "@mui/icons-material/Facebook";
import LanguageIcon from "@mui/icons-material/Language";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ViewingTeam() {
  const container = useRef();

  const ImageLinks = [
    {
      url: "https://cntt.dlu.edu.vn/wp-content/uploads/2023/06/2-2-1024x614.jpg",
      name: "FPT EVENT",
    },
    {
      url: "https://cdn.techinasia.com/cloudinary/transformations/wp-content/uploads/2023/02/1677472086_672cb0fbe063e8f34bb496e496b3c006_v1677472086_xlarge.webp",
      name: "FPT SOFTWARE",
    },
    {
      url: "https://fptsoftware.com/-/media/project/fpt-software/fso/about-us/global-presence/fpt-da-nang/fpt-da-nang-1.jpg?modified=20230811072431",
      name: "FPT UDEMY",
    },
    {
      url: "https://channel.mediacdn.vn/2021/6/11/photo-6-1623405057934163762226.jpg",
      name: "FPT ACADEMY",
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
      const boxes = gsap.utils.toArray(".image-container");

      boxes.forEach((box) => {
        const image = box.querySelector(".image-box");

        const hoverappear = box.querySelector(".hoverappear");
        const border = box.querySelector(".animated-border");

        // Set initial state
        gsap.set(hoverappear, { opacity: 0, y: 0 });
        gsap.set(image, { y: 0 });
        gsap.set(border, {
          opacity: 0,
          y: 0,
          scaleX: 0,
          transformOrigin: "left center",
        });

        box.addEventListener("mouseenter", () => {
          gsap.to(image, {
            backgroundColor: "rgba(0, 0, 0, 0.8)",
            duration: 0.5,
            ease: "power3.out",
          });
          gsap.to(hoverappear, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
          });
          gsap.to(border, {
            opacity: 1,
            scaleX: 1,
            duration: 0.5,
            ease: "power3.out",
          });
        });

        box.addEventListener("mouseleave", () => {
          gsap.to(hoverappear, {
            opacity: 0,
            y: 20,
            duration: 0.4,
            ease: "power3.in",
          });
          gsap.to(border, {
            opacity: 0,
            scaleX: 0,
            duration: 0.4,
            ease: "power3.in",
          });
        });
      });
    },
    { scope: container }
  );

  return (
    <div ref={container}>
      <div className="relative flex justify-center items-center bg-white py-30">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
          <ObjectSVG position={60} />
        </div>

        <div className="w-9/12 relative z-10">
          <div className="flex justify-between">
            <div className="w-[41%]">
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
              <div className="appear mb-16 flex items-center">
                <div className="flex bg-[#ff9800] p-2 rounded-full tracking-wider cursor-pointer hover:bg-[#e68a00] transition-colors">
                  <div className="flex justify-between items-center">
                    <h1
                      className="uppercase text-[13px] ml-7 font-[600]"
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
              {/* Column 1 */}
              <div>
                {ImageLinks.slice(0, 2).map((image, index) => (
                  <div
                    key={index}
                    className="mb-7 relative overflow-hidden image-container group"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="image-box w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="hoverappear absolute inset-0 flex flex-col justify-end items-center z-10"
                      style={{
                        background:
                          "linear-gradient(to top, #00000080 70%, transparent 100%)",
                      }}
                    >
                      <div className="w-full bg-gradient-to-t from-black/80 to-transparent pt-16 pb-4 flex flex-col items-center">
                        <h2 className="text-[#ff9800] text-xl font-bold mb-1">
                          {image.name}
                        </h2>
                        <span className="text-gray-300 tracking-widest text-sm mb-3">
                          ART DIRECTOR
                        </span>
                        <div className="flex gap-4 text-white text-2xl mt-2 justify-center w-full">
                          <FacebookIcon className="hover:text-[#ff9800] transition-colors" />
                          <LanguageIcon className="hover:text-[#ff9800] transition-colors" />
                          <LinkedInIcon className="hover:text-[#ff9800] transition-colors" />
                        </div>
                      </div>
                      <div
                        className="animated-border h-1.5 bg-[#ff9800] w-full"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Column 2 */}
              <div>
                <div className="mb-10 text-[#939393]">
                  <span className="text-[#F20410] font-light">* </span>
                  The picture from FPT Software
                </div>
                {ImageLinks.slice(2, 4).map((image, index) => (
                  <div
                    key={index}
                    className="mb-7 relative overflow-hidden image-container group"
                  >
                    <img
                      src={image.url}
                      alt=""
                      className="image-box w-full h-[360px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="hoverappear absolute inset-0 flex flex-col justify-end items-center z-10"
                      style={{
                        background:
                          "linear-gradient(to top, #00000080 70%, transparent 100%)",
                      }}
                    >
                      <div className="w-full bg-gradient-to-t from-black/80 to-transparent pt-16 pb-4 flex flex-col items-center">
                        <h2 className="text-[#ff9800] text-xl font-bold mb-1">
                          {image.name}
                        </h2>
                        <span className="text-gray-300 tracking-widest text-sm mb-3">
                          ART DIRECTOR
                        </span>
                        <div className="flex gap-4 text-white text-2xl mt-2 justify-center w-full">
                          <FacebookIcon className="hover:text-[#ff9800] transition-colors" />
                          <LanguageIcon className="hover:text-[#ff9800] transition-colors" />
                          <LinkedInIcon className="hover:text-[#ff9800] transition-colors" />
                        </div>
                      </div>
                      <div
                        className="animated-border h-1.5 bg-[#ff9800] w-full"
                        style={{ transform: "scaleX(0)" }}
                      />
                    </div>
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
