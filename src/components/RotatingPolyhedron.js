"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

const RotatingPolyhedron = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let scene,
      camera,
      renderer,
      mouseX = 0,
      mouseY = 0,
      windowHalfX,
      windowHalfY,
      rotationSpeed = 0.0005,
      clock; // Thêm đồng hồ để điều khiển hiệu ứng nổi

    const init = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      windowHalfX = containerWidth / 2;
      windowHalfY = containerHeight / 2;

      scene = new THREE.Scene();

      camera = new THREE.PerspectiveCamera(
        45,
        containerWidth / containerHeight,
        1,
        1000
      );

      camera.position.z = 30;

      renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(containerWidth, containerHeight);

      containerRef.current.appendChild(renderer.domElement);

      document.addEventListener("mousemove", onDocumentMouseMove, false);

      // Tạo vật liệu chung
      const material = new THREE.LineBasicMaterial({ color: 0xffffff });

      // Tạo các khối đa diện với vị trí và thuộc tính nổi khác nhau
      const polyhedrons = [];

      // Lưu trữ các thông tin chuyển động riêng
      const polyhedronProps = [
        { size: 14, pos: [20, 10, 0], floatSpeed: 0.5, floatAmplitude: 0.5 }, // Khối lớn
        { size: 7, pos: [-12, 12, 0], floatSpeed: 0.7, floatAmplitude: 0.3 }, // Khối trung
        { size: 3, pos: [2, -10, 0], floatSpeed: 1.0, floatAmplitude: 0.7 }   // Khối nhỏ
      ];

      polyhedronProps.forEach((props) => {
        const geometry = new THREE.IcosahedronGeometry(props.size, 1);
        const wireframe = new THREE.WireframeGeometry(geometry);
        const lines = new THREE.LineSegments(wireframe, material);
        
        // Thiết lập vị trí ban đầu
        lines.position.set(...props.pos);
        
        // Lưu trữ thuộc tính nổi và vị trí gốc
        lines.userData = {
          originalY: props.pos[1],
          floatSpeed: props.floatSpeed,
          floatAmplitude: props.floatAmplitude
        };
        
        scene.add(lines);
        polyhedrons.push(lines);
      });

      // Khởi tạo đồng hồ
      clock = new THREE.Clock();

      // Vòng lặp animation
      const animate = () => {
        requestAnimationFrame(animate);
        const delta = clock.getDelta();
        const elapsedTime = clock.getElapsedTime();

        // Cập nhật chuyển động cho mỗi khối
        polyhedrons.forEach((polyhedron) => {
          // Xoay cơ bản
          polyhedron.rotation.x += rotationSpeed;
          polyhedron.rotation.y += rotationSpeed;
          polyhedron.rotation.z += rotationSpeed * 0.5;

          // Ảnh hưởng của chuột (giảm tốc độ)
          polyhedron.rotation.x += mouseY * 0.0000001;
          polyhedron.rotation.y += mouseX * 0.0000001;

          // Hiệu ứng nổi lên/xuống
          const { originalY, floatSpeed, floatAmplitude } = polyhedron.userData;
          polyhedron.position.y = originalY + Math.sin(elapsedTime * floatSpeed) * floatAmplitude;
        });

        renderer.render(scene, camera);
      };

      animate();
    };

    const onDocumentMouseMove = (event) => {
      mouseX = event.clientX - windowHalfX;
      mouseY = event.clientY - windowHalfY;
    };

    const onWindowResize = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.clientWidth;
      const containerHeight = containerRef.current.clientHeight;

      windowHalfX = containerWidth / 2;
      windowHalfY = containerHeight / 2;

      camera.aspect = containerWidth / containerHeight;
      camera.updateProjectionMatrix();

      renderer.setSize(containerWidth, containerHeight);
    };

    window.addEventListener("resize", onWindowResize, false);

    init();

    return () => {
      window.removeEventListener("resize", onWindowResize);
      document.removeEventListener("mousemove", onDocumentMouseMove);
      if (containerRef.current && renderer) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div ref={containerRef} style={{ width: "99%", height: "100%" }} />;
};

export default RotatingPolyhedron;