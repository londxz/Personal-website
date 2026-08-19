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
    let stage: Object3D | null = null;
    let animatedRoot: Object3D | null = null;
    let anchoredRootPosition: import("three").Vector3 | null = null;
    let resizeObserver: ResizeObserver | null = null;
    let choreographyTimer = 0;
    let biteScanTimer = 0;

    const start = async () => {
      const THREE = await import("three");
      const [{ GLTFLoader }, { MeshoptDecoder }] = await Promise.all([
        import("three/examples/jsm/loaders/GLTFLoader.js"),
        import("three/examples/jsm/libs/meshopt_decoder.module.js"),
      ]);
      if (disposed) return;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(32, 2.4, 0.1, 100);
      camera.position.set(-8.3, 1.1, 0);
      camera.lookAt(0, 0, 0);
      const currentRootPosition = new THREE.Vector3();
      const rootCorrection = new THREE.Vector3();

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
          stage = new THREE.Group();
          stage.add(model);
          scene.add(stage);

          animatedRoot = model.getObjectByName("shark_root.4") ?? null;
          scene.updateMatrixWorld(true);
          anchoredRootPosition = animatedRoot?.getWorldPosition(new THREE.Vector3()) ?? null;

          mixer = new THREE.AnimationMixer(model);
          const findClip = (...fragments: string[]) =>
            gltf.animations.find((clip) => fragments.some((fragment) => clip.name.toLowerCase().includes(fragment)));
          const removeRootMotion = (clip: import("three").AnimationClip | undefined) => {
            if (!clip) return undefined;
            const inPlaceClip = clip.clone();
            inPlaceClip.tracks = inPlaceClip.tracks.filter(
              (track) => !track.name.toLowerCase().includes("shark_root.4"),
            );
            inPlaceClip.resetDuration();
            return inPlaceClip;
          };
          const swimming = findClip("swimming", "swim") ?? gltf.animations[0];
          const biting = removeRootMotion(findClip("biting", "bite", "bit"));

          if (swimming && biting) {
            const swimmingAction = mixer.clipAction(swimming);
            const bitingAction = mixer.clipAction(biting);
            let currentAction = swimmingAction;
            let biteInProgress = false;
            let nextBiteAt = performance.now() + 8_000;

            const playSwimming = () => {
              host.dataset.sharkAction = "swimming";
              swimmingAction.reset();
              swimmingAction.clampWhenFinished = false;
              swimmingAction.setEffectiveTimeScale(1);
              swimmingAction.setLoop(THREE.LoopRepeat, Infinity);
              swimmingAction.play();
              if (currentAction !== swimmingAction) swimmingAction.crossFadeFrom(currentAction, 0.55, true);
              currentAction = swimmingAction;
            };

            host.dataset.sharkGestures = "swimming,bite";

            const playBite = () => {
              if (disposed || biteInProgress) return;
              biteInProgress = true;
              host.dataset.sharkAction = "biting";
              host.dataset.sharkBitePhase = "opening";
              bitingAction.reset();
              bitingAction.paused = false;
              bitingAction.clampWhenFinished = true;
              bitingAction.setEffectiveTimeScale(1);
              bitingAction.setLoop(THREE.LoopOnce, 1);
              bitingAction.play();
              bitingAction.crossFadeFrom(currentAction, 0.2, true);
              currentAction = bitingAction;

              window.clearTimeout(choreographyTimer);
              choreographyTimer = window.setTimeout(() => {
                if (disposed) return;
                bitingAction.time = Math.min(0.43, biting.duration * 0.43);
                bitingAction.paused = true;
                host.dataset.sharkBitePhase = "hold";
                choreographyTimer = window.setTimeout(() => {
                  if (disposed) return;
                  bitingAction.paused = false;
                  bitingAction.setEffectiveTimeScale(0.75);
                  host.dataset.sharkBitePhase = "closing";
                  choreographyTimer = window.setTimeout(() => {
                    if (disposed) return;
                    playSwimming();
                    host.dataset.sharkBitePhase = "idle";
                    delete host.dataset.sharkTarget;
                    delete host.dataset.sharkTargetDistance;
                    biteInProgress = false;
                    nextBiteAt = performance.now() + 12_000;
                  }, 760);
                }, 650);
              }, 430);
            };

            playSwimming();
            host.dataset.sharkBitePhase = "idle";
            biteScanTimer = window.setInterval(() => {
              const sharkRect = host.getBoundingClientRect();
              const canvas = host.querySelector("canvas");
              const facingMatrix = canvas ? new DOMMatrixReadOnly(getComputedStyle(canvas).transform) : null;
              const travelDirection: "left" | "right" = facingMatrix && facingMatrix.a < 0 ? "left" : "right";
              host.dataset.sharkDirection = travelDirection;
              if (disposed || biteInProgress || performance.now() < nextBiteAt) return;

              const mouthX = travelDirection === "right"
                ? sharkRect.right - sharkRect.width * 0.06
                : sharkRect.left + sharkRect.width * 0.06;
              const mouthY = sharkRect.top + sharkRect.height * 0.5;
              const targets = Array.from(document.querySelectorAll<HTMLElement>(
                ".glass-card, .glass-chip, .button-glass, .sidebar",
              )).filter((target) => !target.closest(".portrait-stage"));
              const target = targets.find((candidate) => {
                const rect = candidate.getBoundingClientRect();
                const distanceToTarget = travelDirection === "right"
                  ? rect.left - mouthX
                  : mouthX - rect.right;
                const targetIsAhead = distanceToTarget >= 26 && distanceToTarget <= 72;
                const closeOnY = mouthY >= rect.top - 28 && mouthY <= rect.bottom + 28;
                const mouthOnScreen = mouthX >= 0 && mouthX <= window.innerWidth;
                const onScreen = rect.bottom > 0 && rect.top < window.innerHeight;
                return targetIsAhead && closeOnY && mouthOnScreen && onScreen;
              });

              if (target) {
                const targetRect = target.getBoundingClientRect();
                const targetDistance = travelDirection === "right"
                  ? targetRect.left - mouthX
                  : mouthX - targetRect.right;
                host.dataset.sharkTarget = target.classList.contains("sidebar")
                  ? "sidebar"
                  : target.classList.contains("glass-chip")
                    ? "chip"
                    : target.classList.contains("button-glass")
                      ? "button"
                      : "card";
                host.dataset.sharkTargetDistance = targetDistance.toFixed(1);
                playBite();
              }
            }, 120);
          }
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

      let previousTime = performance.now();
      const render = (time: number) => {
        if (disposed || !renderer) return;
        frame = window.requestAnimationFrame(render);
        const delta = Math.min((time - previousTime) / 1000, 0.05);
        previousTime = time;
        mixer?.update(delta);
        if (stage && animatedRoot && anchoredRootPosition) {
          scene.updateMatrixWorld(true);
          animatedRoot.getWorldPosition(currentRootPosition);
          rootCorrection.copy(anchoredRootPosition).sub(currentRootPosition);
          stage.position.add(rootCorrection);
        }
        renderer.render(scene, camera);
      };
      frame = window.requestAnimationFrame(render);
    };

    const timer = window.setTimeout(start, 650);

    return () => {
      disposed = true;
      window.clearTimeout(timer);
      window.clearTimeout(choreographyTimer);
      window.clearInterval(biteScanTimer);
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
