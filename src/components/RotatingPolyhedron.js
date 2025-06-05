"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function RotatingPolyhedron() {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const width = 1400; // Change to your desired width
    const height = 600; // Change to your desired height

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(width, height);
    renderer.setClearColor(0x000000, 1);
    containerRef.current.appendChild(renderer.domElement);

    // Create a custom polyhedron
    const geometry = new THREE.IcosahedronGeometry(5, 0);

    // Create wireframe material
    const material = new THREE.LineBasicMaterial({
      color: 0x333333,
      transparent: true,
      opacity: 0.6,
    });

    // Convert to wireframe
    const wireframe = new THREE.WireframeGeometry(geometry);
    const lines = new THREE.LineSegments(wireframe, material);
    scene.add(lines);

    // Add a second, slightly offset polyhedron for complexity
    const geometry2 = new THREE.OctahedronGeometry(7, 0);
    const wireframe2 = new THREE.WireframeGeometry(geometry2);
    const lines2 = new THREE.LineSegments(wireframe2, material);
    lines2.rotation.x = Math.PI / 4;
    scene.add(lines2);

    // Position camera
    camera.position.z = 15;

    // Animation variables
    const rotationSpeed = 0.0005;
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;

    // Handle mouse movement
    const handleMouseMove = (event) => {
      mouseX = (event.clientX - window.innerWidth / 2) / 100;
      mouseY = (event.clientY - window.innerHeight / 2) / 100;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", handleResize);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      // Smooth rotation
      targetRotationX += rotationSpeed;
      targetRotationY += rotationSpeed * 0.5;

      // Add subtle mouse influence
      lines.rotation.x +=
        (targetRotationX + mouseY * 0.05 - lines.rotation.x) * 0.02;
      lines.rotation.y +=
        (targetRotationY + mouseX * 0.05 - lines.rotation.y) * 0.02;

      lines2.rotation.x +=
        (targetRotationX * 0.7 - mouseY * 0.03 - lines2.rotation.x) * 0.01;
      lines2.rotation.y +=
        (targetRotationY * 0.7 - mouseX * 0.03 - lines2.rotation.y) * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      containerRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={containerRef} className="w-90% h-full" />;
}
