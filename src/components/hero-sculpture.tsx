import { useEffect, useRef, useState } from "react";

export function HeroSculpture() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let cancelled = false;
    let teardown: (() => void) | undefined;

    void (async () => {
      const [THREE, { RoomEnvironment }] = await Promise.all([
        import("three"),
        import("three/addons/environments/RoomEnvironment.js"),
      ]);
      if (cancelled) return;

      let renderer: import("three").WebGLRenderer;
      try {
        renderer = new THREE.WebGLRenderer({
          antialias: true,
          canvas,
          powerPreference: "high-performance",
        });
      } catch {
        return;
      }

      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.toneMapping = THREE.ACESFilmicToneMapping;
      renderer.toneMappingExposure = 0.82;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
      camera.position.set(0, 0.08, 7.2);

      const environmentGenerator = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const environment = environmentGenerator.fromScene(room);
      scene.environment = environment.texture;
      room.dispose();

      const sculpture = new THREE.Group();
      sculpture.rotation.set(-0.03, -0.12, 0.02);
      scene.add(sculpture);

      const blueMaterial = new THREE.MeshPhysicalMaterial({
        clearcoat: 0.55,
        clearcoatRoughness: 0.3,
        color: 0x0066cc,
        flatShading: true,
        metalness: 0.08,
        roughness: 0.42,
      });
      const obsidianMaterial = new THREE.MeshStandardMaterial({
        color: 0x151a20,
        metalness: 0.76,
        roughness: 0.28,
      });
      const chromeMaterial = new THREE.MeshStandardMaterial({
        color: 0x9da8b3,
        metalness: 0.85,
        roughness: 0.36,
      });
      const shadowMaterial = new THREE.MeshBasicMaterial({
        color: 0x718096,
        depthWrite: false,
        opacity: 0.14,
        transparent: true,
      });

      const core = new THREE.Mesh(
        new THREE.OctahedronGeometry(1.18, 0),
        blueMaterial,
      );
      core.position.z = 0.12;
      core.scale.set(0.84, 1.28, 0.84);
      core.rotation.set(0.22, 0.24, -0.08);
      sculpture.add(core);

      const portal = new THREE.Mesh(
        new THREE.TorusGeometry(1.7, 0.052, 20, 160),
        chromeMaterial,
      );
      portal.rotation.set(0.08, 0.48, -0.16);
      sculpture.add(portal);

      const axis = new THREE.Mesh(
        new THREE.TorusGeometry(1.35, 0.024, 12, 144),
        obsidianMaterial,
      );
      axis.rotation.set(1.12, -0.38, 0.42);
      sculpture.add(axis);

      const shadow = new THREE.Mesh(
        new THREE.CircleGeometry(1.16, 64),
        shadowMaterial,
      );
      shadow.position.set(0, -1.78, -0.2);
      shadow.rotation.x = -Math.PI / 2;
      scene.add(shadow);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x606a74, 1.45));
      const keyLight = new THREE.DirectionalLight(0xffffff, 2.5);
      keyLight.position.set(4.5, 5, 6);
      scene.add(keyLight);
      const rimLight = new THREE.PointLight(0xffffff, 3.5, 10, 2);
      rimLight.position.set(-3, -1, 3.5);
      scene.add(rimLight);

      const syncTheme = () => {
        const dark = document.documentElement.classList.contains("dark");
        const background = dark ? 0x181818 : 0xf1f3f5;
        scene.background = new THREE.Color(background);
        blueMaterial.color.set(0x0066cc);
        obsidianMaterial.color.set(dark ? 0x4b5661 : 0x151a20);
        shadowMaterial.color.set(dark ? 0x000000 : 0x718096);
        shadowMaterial.opacity = dark ? 0.24 : 0.14;
      };
      syncTheme();

      const pointer = {
        velocityX: 0,
        velocityY: 0,
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
      };
      const onPointerMove = (event: PointerEvent) => {
        const bounds = canvas.getBoundingClientRect();
        pointer.targetX =
          ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
        pointer.targetY =
          ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
      };
      const onPointerLeave = () => {
        pointer.targetX = 0;
        pointer.targetY = 0;
      };
      canvas.addEventListener("pointermove", onPointerMove);
      canvas.addEventListener("pointerleave", onPointerLeave);

      const resize = () => {
        const bounds = canvas.getBoundingClientRect();
        const width = Math.max(1, Math.round(bounds.width));
        const height = Math.max(1, Math.round(bounds.height));
        renderer.setSize(width, height, false);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const resizeObserver = new ResizeObserver(resize);
      resizeObserver.observe(canvas);
      resize();

      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      );
      let isIntersecting = true;
      let isPageVisible = !document.hidden;
      let lastFrame = 0;

      const renderFrame = (milliseconds: number) => {
        const time = milliseconds * 0.001;
        const delta = lastFrame
          ? Math.min((milliseconds - lastFrame) * 0.001, 0.05)
          : 1 / 60;
        lastFrame = milliseconds;
        const spring = 10;
        const damping = Math.exp(-8 * delta);
        pointer.velocityX += (pointer.targetX - pointer.x) * spring * delta;
        pointer.velocityY += (pointer.targetY - pointer.y) * spring * delta;
        pointer.velocityX *= damping;
        pointer.velocityY *= damping;
        pointer.x += pointer.velocityX * delta;
        pointer.y += pointer.velocityY * delta;

        sculpture.position.y = Math.sin(time * 0.48) * 0.08;
        sculpture.rotation.y = -0.12 + time * 0.055 + pointer.x * 0.12;
        sculpture.rotation.x =
          -0.03 + Math.sin(time * 0.32) * 0.02 + pointer.y * 0.05;
        core.rotation.y = 0.24 - time * 0.045;
        core.rotation.z = -0.08 + Math.sin(time * 0.36) * 0.035;
        portal.rotation.z = -0.16 + Math.sin(time * 0.22) * 0.07;
        axis.rotation.z = 0.42 - time * 0.075;
        camera.position.x = pointer.x * 0.1;
        camera.position.y = 0.08 - pointer.y * 0.06;
        camera.lookAt(0, -0.05, 0);
        renderer.render(scene, camera);
      };

      const animate = (milliseconds: number) => renderFrame(milliseconds);
      const syncAnimation = () => {
        renderer.setAnimationLoop(null);
        lastFrame = 0;
        if (reducedMotion.matches || !isIntersecting || !isPageVisible) {
          renderFrame(0);
          return;
        }
        renderer.setAnimationLoop(animate);
      };

      const intersectionObserver = new IntersectionObserver(([entry]) => {
        isIntersecting = entry.isIntersecting;
        syncAnimation();
      });
      intersectionObserver.observe(canvas);

      const onVisibilityChange = () => {
        isPageVisible = !document.hidden;
        syncAnimation();
      };
      const onMotionChange = () => syncAnimation();
      document.addEventListener("visibilitychange", onVisibilityChange);
      reducedMotion.addEventListener("change", onMotionChange);

      const themeObserver = new MutationObserver(() => {
        syncTheme();
        if (reducedMotion.matches) renderFrame(0);
      });
      themeObserver.observe(document.documentElement, {
        attributeFilter: ["class"],
        attributes: true,
      });

      renderFrame(0);
      syncAnimation();
      setIsReady(true);

      teardown = () => {
        renderer.setAnimationLoop(null);
        canvas.removeEventListener("pointermove", onPointerMove);
        canvas.removeEventListener("pointerleave", onPointerLeave);
        document.removeEventListener("visibilitychange", onVisibilityChange);
        reducedMotion.removeEventListener("change", onMotionChange);
        intersectionObserver.disconnect();
        resizeObserver.disconnect();
        themeObserver.disconnect();
        scene.traverse((object) => {
          if (!(object instanceof THREE.Mesh)) return;
          object.geometry.dispose();
          const materials = Array.isArray(object.material)
            ? object.material
            : [object.material];
          materials.forEach((material) => material.dispose());
        });
        environment.texture.dispose();
        environmentGenerator.dispose();
        renderer.dispose();
      };
    })();

    return () => {
      cancelled = true;
      teardown?.();
    };
  }, []);

  return (
    <figure
      className={`foundation-preview hero-sculpture landing-enter landing-enter-late${isReady ? " is-ready" : ""}`}
    >
      <div aria-hidden="true" className="hero-sculpture-fallback">
        <span className="hero-sculpture-fallback-core" />
        <span className="hero-sculpture-fallback-halo" />
        <span className="hero-sculpture-fallback-axis" />
      </div>
      <canvas
        aria-hidden="true"
        className="hero-sculpture-canvas"
        ref={canvasRef}
        tabIndex={-1}
      />
      <figcaption className="sr-only">
        A blue geometric form held between two slowly moving metal axes,
        representing one living system shared across every role.
      </figcaption>
    </figure>
  );
}
