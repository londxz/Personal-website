"use client";

import { useEffect, useRef, useState } from "react";
import type { AnimationMixer, Object3D, WebGLRenderer } from "three";

export default function SwimmingShark() {
  const hostRef = useRef<HTMLDivElement>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const host = hostRef.current;
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let disposed = false;
    let frame = 0;
    let renderer: WebGLRenderer | null = null;
    let mixer: AnimationMixer | null = null;
    let model: Object3D | null = null;
    let resizeObserver: ResizeObserver | null = null;

    const start = async () => {
      const THREE = await import("three");
      const [{ GLTFLoader }, { MeshoptDecoder }] = await Promise.all([
        import("three/examples/jsm/loaders/GLTFLoader.js"),
        import("three/examples/jsm/libs/meshopt_decoder.module.js"),
      ]);
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 2.4, 0.1, 100);
      camera.position.set(-7.4, 1.1, 0);
      camera.lookAt(0, 0, 0);

      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: "low-power" });
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 1.15;
      renderer.setClearColor(0x000000, 0);
      renderer.domElement.className = "shark-canvas";
      host.appendChild(renderer.domElement);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x2f3438, 2.8));
      const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
      keyLight.position.set(-6, 8, 7);
      scene.add(keyLight);
      const rimLight = new THREE.DirectionalLight(0x9bb5c4, 1.8);
      rimLight.position.set(5, 3, -8);
      scene.add(rimLight);

      const loader = new GLTFLoader();
      loader.setMeshoptDecoder(MeshoptDecoder);
      loader.load(
        "/assets/swimming-shark.glb",
        (gltf) => {
          if (disposed) return;
          model = gltf.scene;
          const box = new THREE.Box3().setFromObject(model);
          const size = box.getSize(new THREE.Vector3());
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);
          model.scale.setScalar(6.6 / Math.max(size.x, size.y, size.z));
          scene.add(model);

          mixer = new THREE.AnimationMixer(model);
          const swimming = gltf.animations.find((clip) => clip.name.toLowerCase() === "swimming") ?? gltf.animations[0];
          if (swimming) mixer.clipAction(swimming).play();
          setReady(true);
        },
        undefined,
        () => setReady(false),
      );

      const resize = () => {
        if (!renderer) return;
        const width = Math.max(host.clientWidth, 1);
        const height = Math.max(host.clientHeight, 1);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.4));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(host);
      resize();

      const clock = new THREE.Clock();
      const render = () => {
        if (disposed || !renderer) return;
        frame = window.requestAnimationFrame(render);
        const delta = Math.min(clock.getDelta(), 0.05);
        mixer?.update(delta);
        renderer.render(scene, camera);
      };
      render();
    };

    const timer = window.setTimeout(start, 650);

    return () => {
      disposed = true;
      window.clearTimeout(timer);
      window.cancelAnimationFrame(frame);
      resizeObserver?.disconnect();
      mixer?.stopAllAction();
      model?.traverse((child) => {
        if (!(child instanceof Object) || !("geometry" in child)) return;
        const mesh = child as import("three").Mesh;
        mesh.geometry?.dispose();
        const materials = Array.isArray(mesh.material) ? mesh.material : [mesh.material];
        materials.forEach((material) => material?.dispose());
      });
      renderer?.dispose();
      renderer?.domElement.remove();
    };
  }, []);

  return <div ref={hostRef} className={`shark-swimmer ${ready ? "is-ready" : ""}`} aria-hidden="true" />;
}
