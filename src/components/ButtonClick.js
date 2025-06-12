import React, { useEffect,useRef } from "react";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ScrollSmoother from "gsap/ScrollSmoother";
import gsap from "gsap";
export default function ButtonClick({ hide, hideContact }) {
  const contactContainerRef = useRef(null);
  const contactArrowRef = useRef(null);

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
    if (contactContainerRef.current && contactArrowRef.current) {
      const ctx = gsap.context(() => {
        // Hover animation
        contactContainerRef.current.addEventListener("mouseenter", () => {
          gsap.to(contactContainerRef.current, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(contactArrowRef.current, {
            x: 8,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        // Mouse leave animation
        contactContainerRef.current.addEventListener("mouseleave", () => {
          gsap.to(contactContainerRef.current, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
          gsap.to(contactArrowRef.current, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        // Click animation
        contactContainerRef.current.addEventListener("click", () => {
          gsap
            .timeline()
            .to(contactContainerRef.current, {
              scale: 0.95,
              duration: 0.1,
            })
            .to(contactContainerRef.current, {
              scale: 1.05,
              duration: 0.2,
            });
        });
      });

      return () => ctx.revert();
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
    link.download = "CV_ThanhHB_FE.pdf"; //ten file khi tải về
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="flex flex-col md:flex-row gap-4 md:gap-5 w-full items-start justify-start">
      {!hideContact && (
        <div
          ref={contactContainerRef}
          className="flex bg-[#ff9800] md:p-2 rounded-full tracking-wider md:w-auto justify-start"
        >
          <button
            onClick={ScrollToSection("contact")}
            className="flex justify-between text-center cursor-pointer"
            style={{ alignItems: "center" }}
          >
            <h1 className="uppercase text-[10px] md:text-[13px] text-center ml-4 md:ml-7 font-[600]">
              Contact Me
            </h1>
            <div
              ref={contactArrowRef}
              className="ml-4 md:ml-7 transition-transform"
            >
              <ArrowCircleRightIcon sx={{ fontSize: 50 }} />
            </div>
          </button>
        </div>
      )}
      {!hide && (
        <div
          className={`flex p-2 tracking-wider md:w-auto ${
            hideContact ? "bg-[#1a1a1a] rounded-full w-auto" : ""
          }`}
        >
          <button
            onClick={handleDownload}
            className={`flex justify-between text-center cursor-pointer w-full md:w-auto`}
            style={{ alignItems: "center" }}
          >
            <h1 className="hover:underline uppercase text-white text-[13px] text-center md:ml-7 font-[600]">
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
