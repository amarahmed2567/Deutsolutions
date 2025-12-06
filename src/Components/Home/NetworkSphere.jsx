// src/NetworkSphere.jsx
import React, { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
// لو ده عمل مشكلة استخدم:
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

const NetworkSphere = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ========= Scene / Camera / Renderer =========
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 40);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;

    // ========= Parameters =========
    const NODE_COUNT = 150;
    const RADIUS = 8;             // حجم الكورة
    const MAX_NEIGHBOR_DIST = 4;  // أقصى مسافة بين نقطتين علشان نوصل بينهم
    const orangeColor = 0xf4a460;

    // ========= Helper sphere (wireframe) =========
    const sphereGeom = new THREE.SphereGeometry(RADIUS, 32, 32);
    const sphereMat = new THREE.MeshBasicMaterial({
      color: orangeColor,
      wireframe: true,
      transparent: true,
      opacity: 0.15,
    });
    const sphereMesh = new THREE.Mesh(sphereGeom, sphereMat);
    scene.add(sphereMesh);

    // ========= Nodes on sphere surface =========
    const nodePositions = [];
    const positionsArray = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const u = Math.random();
      const v = Math.random();

      const theta = 2 * Math.PI * u;         // خط طول
      const phi = Math.acos(2 * v - 1);      // خط عرض

      const x = RADIUS * Math.sin(phi) * Math.cos(theta);
      const y = RADIUS * Math.sin(phi) * Math.sin(theta);
      const z = RADIUS * Math.cos(phi);

      const vec = new THREE.Vector3(x, y, z);
      nodePositions.push(vec);
      positionsArray.push(x, y, z);
    }

    const nodeGeometry = new THREE.BufferGeometry();
    nodeGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(positionsArray, 3)
    );

    const nodeMaterial = new THREE.PointsMaterial({
      color: orangeColor,
      size: 0.35,
      sizeAttenuation: true,
    });

    const nodes = new THREE.Points(nodeGeometry, nodeMaterial);
    scene.add(nodes);

    // ========= Edges only between nearby nodes =========
    const linePositions = [];
    for (let i = 0; i < NODE_COUNT; i++) {
      for (let j = i + 1; j < NODE_COUNT; j++) {
        const a = nodePositions[i];
        const b = nodePositions[j];
        const dist = a.distanceTo(b);

        // لو النقطتين قريبين على سطح الكورة نرسم بينهم خط
        if (dist < MAX_NEIGHBOR_DIST) {
          linePositions.push(a.x, a.y, a.z, b.x, b.y, b.z);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(linePositions, 3)
    );

    const lineMaterial = new THREE.LineBasicMaterial({
      color: orangeColor,
      transparent: true,
      opacity: 0.4,
    });

    const lines = new THREE.LineSegments(lineGeometry, lineMaterial);
    scene.add(lines);

    // ========= Animation =========
    let animationId;
    const animate = () => {
      animationId = requestAnimationFrame(animate);

      // دوران خفيف يخلي شكل الكورة واضح
      nodes.rotation.y += 0.002;
      nodes.rotation.x += 0.0015;
      lines.rotation.y += 0.002;
      lines.rotation.x += 0.0015;
      sphereMesh.rotation.y += 0.002;
      sphereMesh.rotation.x += 0.0015;

      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // ========= Resize =========
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;

      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // ========= Cleanup =========
    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", handleResize);
      controls.dispose();
      nodeGeometry.dispose();
      lineGeometry.dispose();
      nodeMaterial.dispose();
      lineMaterial.dispose();
      sphereGeom.dispose();
      sphereMat.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: "100vw",
        height: "100vh",
        background: "#ffffff",
        overflow: "hidden",
      }}
    />
  );
};

export default NetworkSphere;
