"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { RiReactjsFill } from "react-icons/ri";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandReactNative } from "react-icons/tb";
import { TbFileTypeSql } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";
import { FaAndroid } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { SiClickup } from "react-icons/si";
import { FaTrello } from "react-icons/fa";
import { FaJira } from "react-icons/fa";
import { SiDbeaver } from "react-icons/si";
import { SiNetlify } from "react-icons/si";
import { RiVercelLine } from "react-icons/ri";
import { GitHub } from "@mui/icons-material";
import ReactCountryFlag from "react-country-flag";
import { GiThink } from "react-icons/gi";
import { GiArchiveResearch } from "react-icons/gi";
import { MdManageAccounts } from "react-icons/md";
import { GrWorkshop } from "react-icons/gr";

gsap.registerPlugin(useGSAP);

export default function Box() {
  const container = useRef();

  useGSAP(
    () => {
      const boxes = gsap.utils.toArray(".box");
      boxes.forEach((box) => {
        const border = box.querySelector(".animated-border");
        const icons = box.querySelector(".icon");
        gsap.set(border, { width: 0 });
        gsap.set(icons, { opacity: 1 });
        box.addEventListener("mouseenter", () => {
          gsap.to(border, {
            width: "100%",
            duration: 0.5,
            ease: "power3.out",
          });
          gsap.to(icons, {
            scale: 1.2,
            x:10,
            opacity: 1,
            duration: 0.5,
            ease: "power3.out",
            color: "#FF9800",
          });
        });
        box.addEventListener("mouseleave", () => {
          gsap.to(border, {
            width: 0,
            duration: 0.5,
            ease: "power3.in",
          });
          gsap.to(icons, {
            scale: 1,
            opacity: 1,
            x:0,
            duration: 0.5,
            ease: "power3.out",
            color: "#171717",
          });
        });
      });
    },
    { scope: container }
  );

  const post = [
    {
      name: "Techinical Skills",
      desc: "Javascript, Typescript, ReactJS, NextJS ,React Native,MongoDB, MS SQL Server.",
      icon: [
        <RiReactjsFill />,
        <SiJavascript />,
        <SiTypescript />,
        <RiNextjsFill />,
        <BiLogoMongodb />,
        <TbFileTypeSql />,
        <TbBrandReactNative />,
      ],
    },
    {
      name: "Tools use for development",
      desc: "Github, VSCode, Android Studio, Figma, Postman, Motif, ClickUp, Trello, Jira, DBeaver, Genymotion, Expo Go, Netlify, Vercel.",
      icon: [
        <GitHub />,
        <VscVscode />,
        <FaAndroid />,
        <FaFigma />,
        <SiPostman />,
        <SiClickup />,
        <FaTrello />,
        <FaJira />,
        <SiDbeaver />,
        <SiNetlify />,
        <RiVercelLine />,
      ],
    },
    {
      name: "Language Skills",
      desc: "English - Intermediate , Vietnamese - Native.",
      icon: [
        <ReactCountryFlag countryCode="US" svg />,
        <ReactCountryFlag countryCode="VN" svg/>,
      ],
    },
    {
      name: "Other Skills",
      desc: "Project Management, Problem Solving, Teamwork, Critical Thinking, Research documents,Testing.",
      icon:[
        <GiThink />,<GiArchiveResearch/>,<MdManageAccounts/>,<GrWorkshop/>],
      lastchild: true,
    },
  ];

  return (
    <div ref={container}>
      <div className="flex flex-row">
        {post?.map((item, i) => (
          <div
            key={i}
            className={`box border h-[360px] w-[300px] border-2 border-[rgba(255, 255, 255, 0.1)] border-b-0 ${
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
                <p className="text-medium text-[#e5e5e5] font-[400]">
                  {item.desc}
                </p>
                <div className=" icon flex flex-wrap">
                  {item?.icon?.map((item, i) => (
                    <div key={i} className="mx-2 mt-2">
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
