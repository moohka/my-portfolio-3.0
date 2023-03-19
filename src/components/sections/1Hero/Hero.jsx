import { useRef, useEffect } from "react";
import * as THREE from "three";

const Hero = () => {
  //variables
  const canvasRef = useRef(null);

  //functions
  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //geometry
    const geometry = new THREE.SphereGeometry(4.5, 100, 100);

    //material
    const material = new THREE.MeshStandardMaterial({ color: 0xffffff });

    //mesh
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
    const light = new THREE.PointLight(0xffffff, 1, 1000);
    light.position.set(1, -4, 12);
    //light1
    const light1 = new THREE.PointLight(0xafafaf, 1, 1000);
    light1.position.set(0, -10, 1);

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    renderer.setClearColor(0xfdfdfd, 1);

    //add onto the scene
    scene.add(mesh);
    scene.add(light);
    //light1
    scene.add(light1);

    canvasRef.current.appendChild(renderer.domElement);

    //render the scene
    renderer.render(scene, camera);

    const handleWindowResize = () => {
      //screen size variables
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;

      //sphere size
      if (window.innerWidth < 640) {
        camera.position.z = 13;
        camera.aspect = width / height;
      } else {
        camera.position.z = 10;
        camera.aspect = width / height;
      }
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.render(scene, camera);
    }; //end of sphere size

    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      const scaleFactor = 30;
      light.position.set(x * scaleFactor, y * scaleFactor, 20);
      renderer.render(scene, camera);
    };

    //addEventListener
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    canvasRef.current.addEventListener("mousemove", handleMouseMove);

    //removeEventListener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      canvasRef.current?.removeEventListener("mousemove", handleMouseMove);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current?.removeChild(renderer.domElement);
    }; //end of return
  }, []); //end of useEffect

  return (
    <section className="main-section" id="hero-section">
      <div ref={canvasRef} className="canvas"></div>
    </section>
  );
};

export default Hero;
