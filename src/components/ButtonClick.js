import React from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
export default function ButtonClick({hide}) {
  return (
    <div className="flex gap-5">
      <div className="flex bg-[#ff9800] p-2 rounded-full tracking-wider">
        <div
          className="flex justify-between text-center cursor-pointer"
          style={{ alignItems: "center" }}
        >
          <h1 className="uppercase text-[13px] text-center ml-7 font-[600]">
            what we do
          </h1>
          <div className="ml-7">
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </div>
        </div>
      </div>
      {!hide && (
      <div className="flex p-2 tracking-wider">
        <div
          className="flex justify-between text-center cursor-pointer"
          style={{ alignItems: "center" }}
        >
          <h1 className="uppercase text-white text-[13px] text-center ml-7 font-[600]">
            view works
          </h1>
          <div className="flex items-center justify-center ml-7 w-12 h-12 rounded-full bg-[#222]">
            <ArrowCircleRightIcon sx={{ fontSize: 32, color: "#fff" }} />
          </div>
        </div>
      </div>)
}
    </div>
  );
}
