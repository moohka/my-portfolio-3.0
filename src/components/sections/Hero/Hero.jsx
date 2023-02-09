import { useRef, useEffect } from "react";
import * as THREE from "three";

const Hero = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    //Scene is like a canvas.
    const scene = new THREE.Scene();

    //Geometry is the shape of the object. find more shapes on threejs.org
    //1.radius (size) 2.width segment like pixel 3.height
    const geometry = new THREE.SphereGeometry(3, 64, 64);

    //Material is the look of the object (color, texture).
    const material = new THREE.MeshStandardMaterial({ color: "#fafafa" });

    //Mesh = Geometry + Material
    const mesh = new THREE.Mesh(geometry, material);

    //Camera is your perspective on the object
    //1.field of view 2.3.aspect ratio 4.5.near/far clipping plane
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );

    camera.position.z = 5;

    //add mesh and camera into the scene
    scene.add(mesh);
    scene.add(camera);
  }, []);

  return <div ref={containerRef}></div>;
};

export default Hero;
