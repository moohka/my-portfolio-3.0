import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Home = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 5;
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(300, 300);
    containerRef.current.appendChild(renderer.domElement);

    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color: "#00ff00" });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);

    const render = () => {
      requestAnimationFrame(render);
      sphere.rotation.x += 0.01;
      sphere.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    render();
  }, []);

  return <div ref={containerRef} style={{ width: 300, height: 300 }} />;
};

export default Home;
