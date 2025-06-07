import React from "react";
import RotatingPolyhedron2 from "@/components/RotatingPolyhedron2";
import ButtonClick from "@/components/ButtonClick";
import RoundedImageBox from "@/components/RoundedImageBox";
export default function Project() {
  return (
    <div>
      <div className="relative flex justify-center lign-center items-center h-[100vh] bg-black z-1">
        <div className="absolute inset-0 w-full h-full pointer-events-none z-0 opacity-40">
          <RotatingPolyhedron2 />
        </div>
        <div className="relative">
          <div className="flex capitalize">
            <span className="font-thin text-white">
              <div className="font-semibold flex gap-2 justify-center">
                <div className="text-black content-center mr-5">
                  <RoundedImageBox />
                </div>
                <h1 className="font-semibold text-8xl mb-7">
                  Unique <span className="font-thin">ideas</span>{" "}
                </h1>
              </div>
              <div className="font-semibold flex gap-2">
                <h1 className="text-8xl">
                  For your <span className="font-thin"> business. </span>{" "}
                </h1>
                <div className="text-black content-end ml-5">
                  <ButtonClick hide={true} />
                </div>
              </div>
            </span>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}
