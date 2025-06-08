"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@mui/icons-material";


gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const containerRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    // Animate form elements on load with ScrollTrigger
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    });

    tl.from(".contact-header", {
      y: 40,
      opacity: 0,
      duration: 1.5,
    })
      .from(
        ".form-field",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
        },
        "-=0.4"
      )
      .from(
        ".form-footer",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
        },
        "-=0.3"
      );

    // Add focus animations for inputs
    const inputs = gsap.utils.toArray(".form-input");
    inputs.forEach((input) => {
      const inputElement = input;
      const label = inputElement.previousElementSibling;

      inputElement.addEventListener("focus", () => {
        gsap.to(label, {
          y: -5,
          scale: 0.9,
          color: "#ff9800",
          duration: 0.1,
          ease: "power2.out",
        });
      });

      inputElement.addEventListener("blur", () => {
        if (!inputElement.value) {
          gsap.to(label, {
            y: 0,
            scale: 1,
            color: "#9ca3af",
            duration: 0.3,
            ease: "power2.out",
          });
        }
      });
    });

    // Back to top functionality
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
      inputs.forEach((input) => {
        const inputElement = input;
        inputElement.removeEventListener("focus", () => {});
        inputElement.removeEventListener("blur", () => {});
      });
      if (backToTopBtn) {
        backToTopBtn.removeEventListener("click", () => {});
      }
      // Kill ScrollTrigger on unmount
      tl.scrollTrigger && tl.scrollTrigger.kill();
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <section
      ref={containerRef}
      className="bg-white min-h-screen py-20 px-6 md:px-12 relative"
    >
      {/* Main Content */}
      <div className="max-w-4xl mx-auto pt-16">
        <div className="contact-header text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Let's <span className="font-light">Talk</span>
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Name and Email Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-field relative">
              <label className="block text-gray-400 text-sm tracking-widest uppercase mb-4 transition-all duration-300">
                What's Your Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#ff9800] outline-none py-3 text-lg text-black placeholder-transparent transition-colors duration-300"
                required
              />
            </div>

            <div className="form-field relative">
              <label className="block text-gray-400 text-sm tracking-widest uppercase mb-4 transition-all duration-300">
                Your Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#ff9800] outline-none py-3 text-lg text-black placeholder-transparent transition-colors duration-300"
                required
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="form-field relative">
            <label className="block text-gray-400 text-sm tracking-widest uppercase mb-4 transition-all duration-300">
              More Description To Your Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              rows={8}
              className="form-input w-full bg-transparent border-0 border-b border-gray-300 focus:border-[#ff9800] outline-none py-3 text-lg text-black placeholder-transparent resize-none transition-colors duration-300"
              required
            />
          </div>

          {/* Footer */}
          <div className="form-footer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8">
            <p className="text-gray-500 text-sm">
              <span className="text-[#ff9800]">*</span> We promise not to
              disclose your personal information to third parties.
            </p>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className="bg-[#ff9800] hover:bg-[#e68a00] disabled:bg-gray-400 text-white px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:scale-105 disabled:scale-100"
            >
              <span className="text-sm tracking-widest uppercase font-medium">
                {isSubmitting
                  ? "SENDING..."
                  : isSubmitted
                  ? "SENT!"
                  : "SEND MESSAGE"}
              </span>
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
