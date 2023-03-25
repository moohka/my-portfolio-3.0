import { useRef, useEffect } from "react";
import * as THREE from "three";
import { NavContextValue } from "../../../contexts/NavContext";

const Hero = () => {
  //variables
  const canvasRef = useRef(null);
  const { heroRef } = NavContextValue();

  //functions
  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //mesh
    const geometry = new THREE.SphereGeometry(4.5, 100, 100);
    const material = new THREE.MeshStandardMaterial({
      color: 0xfdfdfd,
      roughness: 0.5,
    });
    const mesh = new THREE.Mesh(geometry, material);

    //camera
    const camera = new THREE.PerspectiveCamera(
      75,
      document.documentElement.clientWidth /
        document.documentElement.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    camera.aspect =
      document.documentElement.clientWidth /
      document.documentElement.clientHeight;
    camera.updateProjectionMatrix();

    //lighting
    const light = new THREE.PointLight(0xfdfdfd, 1, 150);
    light.position.set(0, 10, -5);

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    renderer.setClearColor(0x020202, 1);

    //add onto the scene
    scene.add(mesh);
    scene.add(light);

    canvasRef.current.appendChild(renderer.domElement);

    //render the scene
    renderer.render(scene, camera);

    // animation
    const animate = (e) => {
      if (light.position.z < 14) {
        light.position.z += 0.03; //speed
        scene.add(light);
        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }
    };
    animate();

    const handleWindowResize = () => {
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;

      camera.position.z = 10;
      camera.aspect = width / height;
      renderer.setSize(width, height);

      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    if (light.position.z < 14) {
    }

    return () => {
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current?.removeChild(renderer.domElement);
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  return (
    <section className="main-section" id="hero-section" ref={heroRef}>
      <div ref={canvasRef}></div>
    </section>
  );
};

export default Hero;
