"use client";

import React from "react";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
gsap.registerPlugin(useGSAP);
export default function Introduction({ onFinish }) {
  const text = "Pioneering Creative Excellence";
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
            onComplete: () => {
              if (onFinish) onFinish();
            },
          });
        }, 600);
      });
    },
    { scope: container }
  );
  return (
    <div
      ref={container}
      className="container flex min-h-screen flex-col items-center justify-center bg-black"
    >
      <p className="disappear text-3xl text-white tracking-wide text-center">
        {text.split(" ").map((word, i) =>
          word === "Creative" ? (
            <span
              key={i}
              className="textmoving inline-block opacity-0 tracking-wide"
            >
              <strong className="text-white font-bold">Creative</strong>
              {i < 3 && <span>&nbsp;</span>}
            </span>
          ) : (
            <span
              key={i}
              className="textmoving  inline-block opacity-0 tracking-wide font-thin"
            >
              {word}
              <span>&nbsp;</span>
            </span>
          )
        )}
      </p>
    </div>
  );
}
