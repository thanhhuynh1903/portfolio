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
            x: 10,
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
            x: 0,
            duration: 0.5,
            ease: "power3.out",
            color: "#171717",
          });
        });
      });
    },
    { scope: container }
  );

  const posts = [
    {
      name: "Techinical Skills",
      desc: "Javascript, Typescript, ReactJS, NextJS, ExpressJS ,React Native,MongoDB, MS SQL Server.",
      icon: [
        <RiReactjsFill key="react" color="#5dd2f3"/>,
        <SiJavascript key="js" color="#f7cf00"/>,
        <SiTypescript key="ts" color="#115694"/>,
        <RiNextjsFill key="next" color="white"/>,
        <BiLogoMongodb key="mongo" color="#47a13a"/>,
        <TbFileTypeSql key="sql" color="#2483ca"/>,
        <TbBrandReactNative key="rn" color="#5dd2f3"/>,
      ],
    },
    {
      name: "Tools use for development",
      desc: "Git, VSCode, Android Studio, Figma, Postman, Motif, ClickUp, Trello, Jira, DBeaver, Genymotion, Expo Go, Netlify, Vercel.",
      icon: [
        <GitHub key="github" color="white"/>,
        <VscVscode key="vscode" color="#1e97e8"/>,
        <FaAndroid key="android" color="#3bd57f"/>,
        <FaFigma key="figma" color="#eb4b1d"/>,
        <SiPostman key="postman" color="#ee6d3f"/>,
        <SiClickup key="clickup" color="#f624bc"/>,
        <FaTrello key="trello" color="#307dc6" />,
        <FaJira key="jira" color="#247ff7" />,
        <SiDbeaver key="dbeaver" color="#ac815d"/>,
        <SiNetlify key="netlify" color="#31a099"/>,
        <RiVercelLine key="vercel" color="#000"/>,
      ],
    },
    {
      name: "Language Skills",
      desc: "English - Intermediate , Vietnamese - Native.",
      icon: [
        <ReactCountryFlag countryCode="US" svg key="us" />,
        <ReactCountryFlag countryCode="VN" svg key="vn" />,
      ],
    },
    {
      name: "Soft Skills",
      desc: "Project Management, Problem Solving, Teamwork, Critical Thinking, Research documents,Testing.",
      icon: [
        <GiThink key="think" color="#5cd3f4"/>,
        <GiArchiveResearch key="research" color="white"/>,
        <MdManageAccounts key="manage" color="#6090e5"/>,
        <GrWorkshop key="workshop" color="#47a13a"/>,
      ],
    },
  ];

  return (
    <div ref={container}>
      <div className="flex flex-col md:flex-row w-full items-center md:gap-0">
        {posts?.map((item, i) => (
          <div
            key={i}
            className={`box border h-[360px] w-[300px] border-2 border-[rgba(255, 255, 255, 0.1)] border-b-0 cursor-pointer`}
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
                  {item?.icon?.map((child, index) => (
                    <div key={index} className="mx-2 mt-2">
                      {child}
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
