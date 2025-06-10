"use client";
import React, { useEffect } from "react";
import Aboutme from "app/Aboutme/aboutme";
import Tool from "app/Tool/Tool";
import ViewingTeam from "app/ViewingTeam/ViewingTeam";
import Footer from "app/Footer/Footer";
import Contact from "app/contact/Contact";
import Header from "app/Header/Header";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import ProjectShowcase from "app/ProjectShowcase/ProjectShowcase";
import { ToastContainer, Bounce } from "react-toastify";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function HomePage() {
  useEffect(() => {
    ScrollTrigger.refresh();
    // Create the smooth scroller FIRST!
    if (!ScrollSmoother.get()) {
      ScrollSmoother.create({
        smooth: 2,
        effects: true,
        normalizeScroll: true,
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        span: 1,
      });
    }
    return () => {
      if (ScrollSmoother.get()) {
        ScrollSmoother.get().kill();
      }
    };
  }, []);

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <div id="home" className="section">
          <Header />
        </div>
        <div id="aboutme" className="section">
          <Aboutme />
        </div>
        <div id="skills" className="section">
          <Tool />
        </div>
        <div id="workexperience" className="section">
          <ViewingTeam />
        </div>
        <div id="project" className="section">
          <ProjectShowcase />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>
        <div className="section">
          <Footer />
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </div>
  );
}
