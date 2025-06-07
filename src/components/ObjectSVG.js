"use client"

import { useEffect, useState } from "react"

export default function ObjectSVG({position}) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen px-8">
      <div className={`relative`} style={{left:`${position}px`}}>
        <svg
          width="250"
          viewBox="0 0 300 1404"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-opacity duration-1000 svg-animate ${isVisible ? "opacity-100" : "opacity-0"}`}
        >
          <g className="svg-content">
            {/* Top rounded rectangle */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M1 892L1 941H299V892C299 809.71 232.29 743 150 743C67.7096 743 1 809.71 1 892ZM0 942H300V892C300 809.157 232.843 742 150 742C67.1573 742 0 809.157 0 892L0 942Z"
              className="fill-gray-800"
            />

            {/* Bottom rounded rectangle */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299 146V97L1 97V146C1 228.29 67.7096 295 150 295C232.29 295 299 228.29 299 146ZM300 96L0 96V146C0 228.843 67.1573 296 150 296C232.843 296 300 228.843 300 146V96Z"
              className="fill-gray-800"
            />

            {/* Main border */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299 1H1V1403H299V1ZM0 0V1404H300V0H0Z"
              className="fill-gray-800"
              strokeWidth="4"
            />

            {/* Center vertical line */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M150 -4.37115e-08L150 1404L149 1404L149 0L150 -4.37115e-08Z"
              className="fill-gray-800"
            />

            {/* Bottom circle */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M150 1324C232.29 1324 299 1257.29 299 1175C299 1092.71 232.29 1026 150 1026C67.7096 1026 1 1092.71 1 1175C1 1257.29 67.7096 1324 150 1324ZM150 1325C232.843 1325 300 1257.84 300 1175C300 1092.16 232.843 1025 150 1025C67.1573 1025 0 1092.16 0 1175C0 1257.84 67.1573 1325 150 1325Z"
              className="fill-gray-800"
            />

            {/* Horizontal line through bottom circle */}
            <path fillRule="evenodd" clipRule="evenodd" d="M300 1175H0V1174H300V1175Z" className="fill-gray-800" />

            {/* Middle circle */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M150 678C232.29 678 299 611.29 299 529C299 446.71 232.29 380 150 380C67.7096 380 1 446.71 1 529C1 611.29 67.7096 678 150 678ZM150 679C232.843 679 300 611.843 300 529C300 446.157 232.843 379 150 379C67.1573 379 0 446.157 0 529C0 611.843 67.1573 679 150 679Z"
              className="fill-gray-800"
            />

            {/* Rectangle around middle circle */}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M299 380H1V678H299V380ZM0 379V679H300V379H0Z"
              className="fill-gray-800"
            />
          </g>
        </svg>

        <style jsx>{`
          .svg-animate {
            animation: floatUpDown 8s ease-in-out infinite;
          }

          @keyframes floatUpDown {
            0%, 100% {
              transform: translateY(0px);
            }
            25% {
              transform: translateY(-15px);
            }
            50% {
              transform: translateY(-30px);
            }
            75% {
              transform: translateY(-15px);
            }
          }

          svg {
            transition: all 0.3s ease;
          }
          
          .fill-gray-800 {
            fill: rgb(211, 215, 215);
          }
        `}</style>
      </div>
    </div>
  )
}
