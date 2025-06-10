"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ArrowRight } from "@mui/icons-material";
import Link from "next/link";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { GitHub } from "@mui/icons-material";
gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
export default function Footer() {
  const socialitem = [
    {
      name: "Facebook",
      icon: <FacebookIcon />,
      link: "https://www.facebook.com/KaZuHT",
    },
    {
      name: "Instagram",
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/thanh_huynh1903/",
    },
    {
      name: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/in/thanh-hu%E1%BB%B3nh-329778367/",
    },
    {
      name: "Github",
      icon: <GitHub />,
      link: "https://github.com/thanhhuynh1903",
    },
  ];
  const footerRef = useRef(null);
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
  const items = [
    { name: "Home", ref: "home" },
    { name: "About Me", ref: "aboutme" },
    { name: "Skills", ref: "skills" },
    { name: "Work Experience", ref: "workexperience" },
    { name: "Projects", ref: "project" },
  ];
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

  useEffect(() => {
    if (!footerRef.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.from(".footer-item", {
      y: 20,
      opacity: 0,
      stagger: 0.1,
      duration: 0.8,
      scrollTrigger: {
        trigger: footerRef.current,
        start: "top bottom-=100",
        toggleActions: "play none none none",
      },
    });

    const backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      });
    }

    return () => {
      if (backToTopBtn) {
        backToTopBtn.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="bg-black text-white py-16 px-6 md:px-12 relative"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-1">
            <div className="footer-item mb-8">
              <h2 className="text-4xl font-bold mb-8">ThanhDev.</h2>
              <p className="text-gray-400 mb-4">Subscribe our newsletter:</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="ENTER OUR EMAIL"
                  className="bg-[#1a1a1a] text-gray-300 px-4 py-3 rounded-l-full w-full focus:outline-none"
                />
                <button className="bg-[#ff9800] hover:bg-[#e68a00] transition-colors p-3 rounded-full -ml-6">
                  <ArrowRight className="h-5 w-5 text-black" />
                </button>
              </div>
            </div>

            <p className="footer-item text-gray-500 text-sm">
              © Copyright 2025 - ThanhDev. All Rights Reserved.
            </p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="lg:col-span-1">
            <nav className="footer-item">
              <ul className="space-y-4">
                {items.map((item, index) => (
                  <li key={index}>
                    <button
                      className={`${
                        item.name === "Home" ? " text-[#ff9800]" : "text-white"
                      } hover:text-[#ff9800] text-lg font-medium transition-colors cursor-pointer`}
                      onClick={ScrollToSection(item.ref)}
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* Far Right Column - Locations */}
          <div className="lg:col-span-1">
            <div className="footer-item mb-8">
              <h3 className="font-medium mb-4">VietNam</h3>
              <p className="text-gray-400">
                88C, Street No. 3, Truong Tho Ward, Thu Duc City, Ho Chi Minh
                City, Vietnam.
                <br />
                VN +84 935 664 263
              </p>
            </div>
          </div>
          {/* Right Column - Legal */}
          <div className="lg:col-span-1">
            <div className="footer-item">
              <h3 className="font-medium mb-4">Social Media</h3>
              <div className="footer-item flex space-x-4 mb-8">
                {socialitem.map((item, index) => (
                  <Link
                    key={index}
                    href={`${item.link}`}
                    target="_blank"
                    className="hover:text-[#ff9800] transition-colors"
                  >
                    {item.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
