import { useRef, useEffect } from "react";
import * as THREE from "three";

const Hero = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //geometry
    const geometry = new THREE.SphereGeometry(4, 100, 100);

    //material
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

    //mesh
    const mesh = new THREE.Mesh(geometry, material);

    //camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 10;
    camera.aspect = window.innerWidth / (window.innerHeight * 0.9);
    camera.updateProjectionMatrix();

    //lighting
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(1, 10, 12);
    const light1 = new THREE.PointLight(0xfdfdfd, 4, 100);
    light1.position.set(1, -50, 30);

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
    renderer.setClearColor(0xfdfdfd, 1);

    //add onto the scene
    scene.add(mesh);
    scene.add(light);
    // scene.add(light1);

    canvasRef.current.appendChild(renderer.domElement);

    //render the scene
    renderer.render(scene, camera);

    const handleWindowResize = () => {
      if (window.innerWidth > 640) {
        renderer.setSize(window.innerWidth, window.innerHeight * 0.9);
        //camera's aspect ratio
        camera.aspect = window.innerWidth / window.innerHeight;
      } else {
        renderer.setSize(window.innerWidth, 600);
        camera.aspect = window.innerWidth / 600;
      }
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div className="section" id="hero-section">
      <div ref={canvasRef} className="canvas"></div>
    </div>
  );
};

export default Hero;
