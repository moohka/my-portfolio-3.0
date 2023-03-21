import { useRef, useEffect } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { NavContextValue } from "../../../contexts/NavContext";

const Hero = () => {
  //variables
  const canvasRef = useRef();
  const { heroRef } = NavContextValue();

  //functions
  useEffect(() => {
    //scene
    const scene = new THREE.Scene();

    //geometry
    const geometry = new THREE.SphereGeometry(4.5, 100, 100);

    //material
    var material = new THREE.MeshStandardMaterial({
      color: 0x0d102b,
      emissive: 0x0d102b,
      emissiveIntensity: 1,
      roughness: 0.6,
    });

    //ambient light
    var ambLight = new THREE.AmbientLight(0x0d102b, 1);
    scene.add(ambLight);

    //mesh
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

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
    camera.updateProjectionMatrix(); //update object matrix

    //lighting
    const light = new THREE.PointLight(0xffffff, 3, 1000);
    light.position.set(1, 10, 15);
    scene.add(light);

    //renderer
    const renderer = new THREE.WebGLRenderer();
    renderer.setPixelRatio(1);
    renderer.setSize(
      document.documentElement.clientWidth,
      document.documentElement.clientHeight
    );
    renderer.setClearColor(0xfdfdfd, 1);

    //appendChild
    canvasRef.current.appendChild(renderer.domElement);

    //render the scene
    renderer.render(scene, camera);

    const handleWindowResize = () => {
      //screen size variables
      let width = document.documentElement.clientWidth;
      let height = document.documentElement.clientHeight;

      //sphere size
      if (window.innerWidth < 640) {
        camera.position.z = 14;
        camera.aspect = width / height;
      } else {
        camera.position.z = 10;
        camera.aspect = width / height;
      }
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    }; //end of sphere size

    //controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 3;

    const animate = () => {
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    //addEventListener
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);

    //removeEventListener
    return () => {
      window.removeEventListener("resize", handleWindowResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      canvasRef.current?.removeChild(renderer.domElement);

      light.dispose();
    }; //end of return
  }, []); //end of useEffect

  return (
    <section className="main-section" id="hero-section" ref={heroRef}>
      <div ref={canvasRef} className="canvas"></div>
    </section>
  );
};

export default Hero;
