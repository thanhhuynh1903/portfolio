import React, { useEffect } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ScrollSmoother from "gsap/ScrollSmoother";

export default function ButtonClick({ hide }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      if (!window.ScrollSmoother) {
        window.ScrollSmoother = ScrollSmoother;
      }
      if (
        !window.smootherInstance &&
        ScrollSmoother.get &&
        ScrollSmoother.get()
      ) {
        window.smootherInstance = ScrollSmoother.get();
      }
    }
  }, []);

  const ScrollToSection = (ref) => () => {
    const element = document.getElementById(ref);
    const smoother =
      window.smootherInstance ||
      (window.ScrollSmoother &&
        window.ScrollSmoother.get &&
        window.ScrollSmoother.get());
    if (element && smoother) {
      smoother.scrollTo(element, true, "top top");
    } else if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/CV_Thanh_FE.pdf"; // Đường dẫn trong file /public
    link.download = "CV_ThanhHB_FE.pdf";//ten file khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex gap-5">
      <div className="flex bg-[#ff9800] p-2 rounded-full tracking-wider">
        <button
          onClick={ScrollToSection("contact")}
          className="flex justify-between text-center cursor-pointer"
          style={{ alignItems: "center" }}
        >
          <h1 className="uppercase text-[13px] text-center ml-7 font-[600]">
            Contact Me
          </h1>
          <div className="ml-7">
            <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
          </div>
        </button>
      </div>
      {!hide && (
        <div className="flex p-2 tracking-wider">
          <button
            onClick={handleDownload}
            className="flex justify-between text-center cursor-pointer"
            style={{ alignItems: "center" }}
          >
            <h1 className=" hover:underline uppercase text-white text-[13px] text-center ml-7 font-[600]">
              Download CV (PDF)
            </h1>
            <div className="flex items-center justify-center ml-7 w-12 h-12 rounded-full bg-[#222]">
              <ArrowCircleRightIcon sx={{ fontSize: 32, color: "#fff" }} />
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
