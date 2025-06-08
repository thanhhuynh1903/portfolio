"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ArrowRight } from "@mui/icons-material"
import Link from "next/link"

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    const tl = gsap.timeline({ defaults: { ease: "power3.out" } })

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
    })

    const backToTopBtn = document.querySelector(".back-to-top")
    if (backToTopBtn) {
      backToTopBtn.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      })
    }

    return () => {
      if (backToTopBtn) {
        backToTopBtn.removeEventListener("click", () => {})
      }
    }
  }, [])

  return (
    <footer ref={footerRef} className="bg-black text-white py-16 px-6 md:px-12 relative">
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

            <div className="footer-item flex space-x-4 mb-8">
              <Link href="#" className="hover:text-[#ff9800] transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44.02c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#ff9800] transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 2.25c5.385 0 9.75 4.365 9.75 9.75s-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12 6.615 2.25 12 2.25zm4.5 13.5h-9v-1.5h9v1.5zm0-3h-9v-1.5h9v1.5zm0-3h-9v-1.5h9v1.5z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#ff9800] transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link href="#" className="hover:text-[#ff9800] transition-colors">
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </Link>
            </div>

            <p className="footer-item text-gray-500 text-sm">© Copyright 2023 - MII. All Rights Reserved.</p>
          </div>

          {/* Middle Column - Navigation */}
          <div className="lg:col-span-1">
            <nav className="footer-item">
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-[#ff9800] hover:text-[#ff9800] text-lg font-medium transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/portfolio"
                    className="text-white hover:text-[#ff9800] text-lg font-medium transition-colors"
                  >
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-white hover:text-[#ff9800] text-lg font-medium transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white hover:text-[#ff9800] text-lg font-medium transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-white hover:text-[#ff9800] text-lg font-medium transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          {/* Right Column - Legal */}
          <div className="lg:col-span-1">
            <div className="footer-item">
              <ul className="space-y-4">
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href="/cookie-policy" className="text-gray-400 hover:text-white transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-400 hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Far Right Column - Locations */}
          <div className="lg:col-span-1">
            <div className="footer-item mb-8">
              <h3 className="font-medium mb-4">Canada</h3>
              <p className="text-gray-400">
                71 South Los Carneros Road,
                <br />
                California +31 174 705 812
              </p>
            </div>

            <div className="footer-item">
              <h3 className="font-medium mb-4">Germany</h3>
              <p className="text-gray-400">
                Leehove 40, 2678 MC De Lier,
                <br />
                Netherlands +31 174 705 811
              </p>
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}
