"use client";
import React from "react";
import ButtonClick from "@/components/ButtonClick";
import RotatingPolyhedron from "@/components/RotatingPolyhedron";
export default function page() {
  return (
    <div className="container relative flex justify-center  align-center items-center h-[100vh] bg-black">
       <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
        <RotatingPolyhedron w={900} h={300} />
      </div>
      <div className="w-9/12 relative z-10">
        <div className="block">
          <div className="mb-10">
            <h1 className="text-4xl md:text-6xl lg:text-[86px] text-white leading-tight">
              <span className="font-[500]">Designing</span>{" "}
              <span className="font-thin">a Better </span>
              <br />
              <span className="font-thin">
                <span className="font-[500]">World</span> Today
              </span>
            </h1>
          </div>
          <div className="w-3/6 text-white mb-15 opacity-60">
            <p className="text-base md:text-xl lg:text-lg">
              Welcome to our world of endless imagination and boundless
              creativity. Together, let's embark on a remarkable journey where
              dreams become tangible realities.
            </p>
          </div>
          <div>
            <ButtonClick />
          </div>
        </div>
      </div>
    </div>
  );
}
