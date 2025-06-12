"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight } from "@mui/icons-material";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
gsap.registerPlugin(ScrollTrigger);
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
];
export default function Contact() {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    time: new Date().toLocaleTimeString(),
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const node = containerRef.current;
    if (!node) return;

    // Animate form elements on load with ScrollTrigger
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
      scrollTrigger: {
        trigger: node,
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
    const handleFocus = (input) => {
      const label = input.previousElementSibling;
      gsap.to(label, {
        y: -5,
        scale: 0.9,
        color: "#ff9800",
        duration: 0.1,
        ease: "power2.out",
      });
    };

    const handleBlur = (input) => {
      const label = input.previousElementSibling;
      if (!input.value) {
        gsap.to(label, {
          y: 0,
          scale: 1,
          color: "#9ca3af",
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    inputs.forEach((input) => {
      input.addEventListener("focus", () => handleFocus(input));
      input.addEventListener("blur", () => handleBlur(input));
    });

    // Back to top functionality
    const backToTopBtn = document.querySelector(".back-to-top");
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      });
    }

    return () => {
      inputs.forEach((input) => {
        input.removeEventListener("focus", () => handleFocus(input));
        input.removeEventListener("blur", () => handleBlur(input));
      });
      if (backToTopBtn) {
        backToTopBtn.removeEventListener("click", () => {});
      }
      tl.scrollTrigger && tl.scrollTrigger.kill();
    };
  }, []);

  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
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

    // Gửi email với EmailJS
    try {
      const response = await emailjs.send(
        `${process.env.NEXT_PUBLIC_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_TEMPLATE_ID}`,
        {
          ...formData,
        },
        `${process.env.NEXT_PUBLIC_USER_ID}`
      );
      if (response.status === 200) {
        toast.success("Email sent successfully!");
      }

      setFormData({ name: "", email: "", message: "" });
      setIsSubmitted(true);

      // Reset form sau 3 giây
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    } catch (error) {
      console.error("Email send error:", error);
      toast.error("Failed to send email. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={containerRef}
      className="bg-white min-h-screen py-20 px-6 md:px-12 relative"
    >
      <div className="max-w-4xl mx-auto pt-16">
        <div className="contact-header text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
            Let&apos;s <span className="font-light">Talk</span>
          </h2>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="form-field relative">
              <label className="block text-gray-400 text-sm tracking-widest uppercase mb-4 transition-all duration-300">
                What&apos;s Your Name
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

          <div className="form-footer flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-8">
            <div className="text-gray-500 text-sm">
              <p>
                <span className="text-[#ff9800]">*</span> You can contact me
                with through these social media.
              </p>
              <div className="form-footer flex space-x-4 mb-8">
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
      <ToastContainer autoClose={3000} />
    </section>
  );
}
