"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowRight } from "@mui/icons-material"
import AddLinkIcon from '@mui/icons-material/AddLink';
import Link from "next/link"

gsap.registerPlugin(ScrollTrigger)
const projects = [
  {
    id: 1,
    category: "WEB DEVELOPMENT",
    title: "E-Commerce Platform with Next.js",
    description:
      "A modern e-commerce platform built with Next.js, featuring real-time inventory management, secure payment processing, and responsive design.",
    image: "/project1.png",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    slug: "ecommerce-platform",
  },
  {
    id: 2,
    category: "MOBILE APP",
    title: "React Native Fitness Tracker",
    description:
      "A comprehensive fitness tracking application with workout planning, progress monitoring, and social features for fitness enthusiasts.",
    image: "/project2.png",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    slug: "fitness-tracker",
  },
  {
    id: 3,
    category: "UI/UX DESIGN",
    title: "Banking App Redesign",
    description:
      "Complete redesign of a mobile banking application focusing on user experience, accessibility, and modern design principles.",
    image: "/project3.png",
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    slug: "banking-app-redesign",
  },
  {
    id: 4,
    category: "WEB APPLICATION",
    title: "Project Management Dashboard",
    description:
      "A comprehensive project management tool with team collaboration features, task tracking, and real-time updates.",
    image: "/project4.png",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/example",
    slug: "project-management",
  },
]

export default function ProjectShowcase() {
  const containerRef = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    // Animate project cards
    gsap.utils.toArray(".project-card").forEach((card, index) => {
      gsap.from(card, {
        y: 60,
        opacity: 0,
        duration: 0.5,
        ease: "power3.out",
        delay: index * 0.1,
        scrollTrigger: {
          trigger: card,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      })
    })

    // Header animation
    gsap.from(".showcase-header", {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top bottom-=50",
        toggleActions: "play none none none",
      },
    })

    // Add hover effects
    gsap.utils.toArray(".project-card").forEach((card) => {
      const cardElement = card
      const image = cardElement.querySelector(".project-image")
      const overlay = cardElement.querySelector(".project-overlay")

      cardElement.addEventListener("mouseenter", () => {
        gsap.to(image, {
          scale: 1.1,
          duration: 0.5,
          ease: "power2.out",
        })
        gsap.to(overlay, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        })
      })

      cardElement.addEventListener("mouseleave", () => {
        gsap.to(image, {
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
        })
        gsap.to(overlay, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        })
      })
    })

    return () => {
      gsap.utils.toArray(".project-card").forEach((card) => {
        const cardElement = card
        cardElement.removeEventListener("mouseenter", () => {})
        cardElement.removeEventListener("mouseleave", () => {})
      })
    }
  }, [])

  return ( 
    <div ref={containerRef} className="bg-gray-50 py-20 px-6 md:px-12 relative z-1">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="showcase-header text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">Featured Projects</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our latest work showcasing innovative solutions and creative designs
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="project-card group">
              <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="project-image w-full h-64 object-cover"
                  />
                  <div className="project-overlay absolute inset-0 bg-black/60 opacity-0 flex items-center justify-center gap-4">
                    {project.liveUrl && (
                      <Link
                        href={project.liveUrl}
                        className="bg-[#ff9800] hover:bg-[#e68a00] text-white p-3 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <AddLinkIcon className="h-5 w-5" />
                      </Link>
                    )}
                    {project.githubUrl && (
                      <Link
                        href={project.githubUrl}
                        className="bg-white hover:bg-gray-100 text-black p-3 rounded-full transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </Link>
                    )}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3">
                    <span className="text-[#ff9800] text-sm font-medium tracking-wider uppercase">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-black mb-3 group-hover:text-[#ff9800] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <Link
                    href={`/projects/${project.slug}`}
                    className="flex items-center gap-2 text-black hover:text-[#ff9800] transition-colors font-medium"
                  >
                    <span className="text-sm tracking-wider uppercase">VIEW PROJECT</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects Button */}
        <div className="text-center mt-12">
          <Link
            href="/projects"
            className="inline-flex items-center gap-3 bg-[#ff9800] hover:bg-[#e68a00] text-white px-8 py-4 rounded-full font-medium transition-colors"
          >
            <span className="tracking-wider uppercase">View All Projects</span>
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  )
}
