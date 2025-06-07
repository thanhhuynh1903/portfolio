"use client";
import React, { useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { borderColor, borderTop } from "@mui/system";
gsap.registerPlugin(useGSAP);

export default function Box() {
  const container = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        const text = box.querySelector(".text");
        const border = box.querySelector(".animated-border");
        const icons = box.querySelector(".icon");

        gsap.set(text, { opacity: 0, y: 20 });
        gsap.set(border, { width: 0 });
        gsap.set(icons, { opacity: 1 });
        box.addEventListener("mouseenter", () => {
          gsap.to(text, {
            opacity: 1,
            y: 0,
            duration: 0.5,
            ease: "power3.out",
            color: "rgba(255, 255, 255, 0.4)",
          });
          gsap.to(border, {
            width: "100%",
            duration: 0.5,
            ease: "power3.out",
          });
          gsap.to(icons, {
            scale: 2.5,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            color: "#FF9800",
          });
        });
        box.addEventListener("mouseleave", () => {
          gsap.to(text, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            ease: "power3.in",
          });
          gsap.to(border, {
            width: 0,
            duration: 0.5,
            ease: "power3.in",
          });
           gsap.to(icons, {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            color: "#171717"
          });
        });
      });
    },
    { scope: container }
  );

  const post = [
    {
      name: "Brand and Indentify Design",
      desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
    },
    {
      name: "Website Design and and Development",
      desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
    },
    {
      name: "Advertising and Marketing Campaigns",
      desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
    },
    {
      name: "Advertising and Marketing Campaigns",
      desc: "Our creative agency is a team of professionals focused on helping your brand grow.",
      lastchild: true,
    },
  ];

  return (
    <div ref={container}>
      <div className="flex flex-row">
        {post?.map((item, i) => (
          <div
            key={i}
            className={`box border h-[410px] w-[300px] border-2 border-[rgba(255, 255, 255, 0.1)] border-b-0 ${
              !item?.lastchild ? `border-r-0` : ""
            } cursor-pointer`}
          >
            {/* Animated border */}
            <div
              className="animated-border"
              style={{
                height: "4px",
                background: "rgb(171, 126, 3)",
                width: 0,
                transition: "none",
              }}
            />
            <div className="px-8 py-15" style={{ height: "inherit" }}>
              <div className="flex flex-col justify-between h-full">
                <h1 className="text-xl text-[#e5e5e5] font-[500]">
                  {item.name}
                </h1>
                <p className="text opacity-0">{item.desc}</p>
                <ArrowCircleRightIcon className="icon" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
