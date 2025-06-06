"use client";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";

gsap.registerPlugin(useGSAP);

export default function AfterIntroduction({ onFinish }) {
  const container = useRef(null);
  const orangeBoxRef = useRef(null);

  useGSAP(
    () => {
      // Create a timeline for sequenced animations
      const tl = gsap.timeline();

      gsap.set(".orange-box", {
        x: -80,
        width: "5px",
        opacity: 1,
      });
      tl.to(".orange-box", {
        x: 40,
        duration: 0.6,
        ease: "elastic.out(1,5)",
        delay: 0.1,
      })
        .to(".orange-box", {
          x: 0,
          width: "240px",
          duration: 0.8,
          ease: "elastic.out(1,5)",
          delay: 0.1,
        })
        // Di chuyển về x:0
        .to(".orange-box", {
          x: 0,
          duration: 0.6,
          ease: "power2.inOut",
          delay: 0.2,
        })
        // Hiện title (sau khi box đã về x:0, vẫn giữ width 240px)
        .to(
          ".title",
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.inOut",
          },
          ">-0.2"
        )
        .to(".orange-box", {
          width: "0px",
          duration: 0.6,
          ease: "power2.inOut",
        })
        .to(
          ".title",
          {
            opacity: 0,
            y: -30,
            duration: 0.6,
            ease: "back.in",
          },
          "+=0.5" // wait 0.5s after orange-box shrinks
        )
        .to(".disappear", {
          duration: 0.5,
          opacity: 0,
          y: -10,
          stagger: 0.1,
          ease: "back.in",
          onComplete: () => {
            if (onFinish) onFinish();
          },
        });
    },
    { scope: container }
  );

  return (
    <div
      ref={container}
      className="relative container flex min-h-screen flex-col items-center justify-center bg-black overflow-hidden"
    >
      <div className="absolute z-5">
        <h1 className="disppear title text-3xl font-light text-white opacity-0 transform translate-y-5">
          ThanhDev.com
        </h1>
      </div>

      <div
        ref={orangeBoxRef}
        className="orange-box absolute z-10 h-[50px] w-[240px] bg-orange-500 shadow-lg"
        style={{ width: "240px" }}
      ></div>
    </div>
  );
}
