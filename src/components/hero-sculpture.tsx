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
      renderer.toneMappingExposure = 0.94;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75));

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 40);
      camera.position.set(0, 0.1, 7.6);

      const environmentGenerator = new THREE.PMREMGenerator(renderer);
      const room = new RoomEnvironment();
      const environment = environmentGenerator.fromScene(room);
      scene.environment = environment.texture;
      room.dispose();

      const sculpture = new THREE.Group();
      sculpture.rotation.set(-0.04, -0.16, 0.03);
      scene.add(sculpture);

      const blueMaterial = new THREE.MeshPhysicalMaterial({
        clearcoat: 1,
        clearcoatRoughness: 0.12,
        color: 0x0066cc,
        flatShading: true,
        iridescence: 0.18,
        metalness: 0.24,
        roughness: 0.3,
      });
      const obsidianMaterial = new THREE.MeshPhysicalMaterial({
        clearcoat: 0.7,
        clearcoatRoughness: 0.2,
        color: 0x111820,
        metalness: 0.82,
        roughness: 0.2,
      });
      const chromeMaterial = new THREE.MeshStandardMaterial({
        color: 0xe8eef4,
        metalness: 0.96,
        roughness: 0.12,
      });
      const orbitMaterial = new THREE.MeshStandardMaterial({
        color: 0x0066cc,
        metalness: 0.72,
        opacity: 0.48,
        roughness: 0.2,
        transparent: true,
      });
      const groundMaterial = new THREE.MeshStandardMaterial({
        color: 0xdce5ed,
        metalness: 0.12,
        roughness: 0.8,
      });

      const darkDisc = new THREE.Mesh(
        new THREE.CylinderGeometry(1.42, 1.42, 0.2, 96),
        obsidianMaterial,
      );
      darkDisc.position.z = -0.64;
      darkDisc.rotation.x = Math.PI / 2;
      sculpture.add(darkDisc);

      const core = new THREE.Mesh(
        new THREE.IcosahedronGeometry(1.2, 0),
        blueMaterial,
      );
      core.position.z = 0.18;
      core.scale.set(0.88, 1.15, 0.88);
      core.rotation.set(0.28, 0.18, -0.12);
      sculpture.add(core);

      const portal = new THREE.Mesh(
        new THREE.TorusGeometry(1.82, 0.072, 24, 192),
        chromeMaterial,
      );
      portal.rotation.set(0.08, 0.46, -0.14);
      sculpture.add(portal);

      const outerOrbit = new THREE.Mesh(
        new THREE.TorusGeometry(2.34, 0.018, 8, 192),
        orbitMaterial,
      );
      outerOrbit.rotation.set(0.38, -0.7, 0.18);
      sculpture.add(outerOrbit);

      const base = new THREE.Mesh(
        new THREE.CylinderGeometry(1.28, 1.48, 0.14, 96),
        obsidianMaterial,
      );
      base.position.y = -2.02;
      sculpture.add(base);

      const baseLight = new THREE.Mesh(
        new THREE.TorusGeometry(1.35, 0.022, 12, 128),
        orbitMaterial,
      );
      baseLight.position.y = -1.94;
      baseLight.rotation.x = Math.PI / 2;
      sculpture.add(baseLight);

      const ground = new THREE.Mesh(
        new THREE.CircleGeometry(3.2, 96),
        groundMaterial,
      );
      ground.position.set(0, -2.1, -0.05);
      ground.rotation.x = -Math.PI / 2;
      scene.add(ground);

      scene.add(new THREE.HemisphereLight(0xffffff, 0x6b7a89, 2));
      const keyLight = new THREE.DirectionalLight(0xffffff, 3.2);
      keyLight.position.set(4.5, 5, 6);
      scene.add(keyLight);
      const blueLight = new THREE.PointLight(0x1485f5, 9, 11, 2);
      blueLight.position.set(-3.5, 1.4, 3.8);
      scene.add(blueLight);
      const rimLight = new THREE.PointLight(0xffffff, 7, 10, 2);
      rimLight.position.set(3, -1, 2.5);
      scene.add(rimLight);

      const syncTheme = () => {
        const dark = document.documentElement.classList.contains("dark");
        const background = dark ? 0x0f141a : 0xeef3f7;
        scene.background = new THREE.Color(background);
        scene.fog = new THREE.Fog(background, 7.2, 13);
        groundMaterial.color.set(dark ? 0x17202a : 0xdce5ed);
      };
      syncTheme();

      const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
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

      const renderFrame = (milliseconds: number) => {
        const time = milliseconds * 0.001;
        pointer.x += (pointer.targetX - pointer.x) * 0.045;
        pointer.y += (pointer.targetY - pointer.y) * 0.045;
        sculpture.position.y = Math.sin(time * 0.62) * 0.1;
        sculpture.rotation.y = -0.16 + time * 0.09 + pointer.x * 0.13;
        sculpture.rotation.x =
          -0.04 + Math.sin(time * 0.38) * 0.025 + pointer.y * 0.05;
        core.rotation.y = 0.18 - time * 0.07;
        core.rotation.z = -0.12 + time * 0.035;
        portal.rotation.z = -0.14 + time * 0.035;
        outerOrbit.rotation.z = 0.18 - time * 0.055;
        camera.position.x = pointer.x * 0.12;
        camera.position.y = 0.1 - pointer.y * 0.08;
        camera.lookAt(0, -0.05, 0);
        renderer.render(scene, camera);
      };

      const animate = (milliseconds: number) => renderFrame(milliseconds);
      const syncAnimation = () => {
        renderer.setAnimationLoop(null);
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
        <span className="hero-sculpture-fallback-disc" />
        <span className="hero-sculpture-fallback-core" />
        <span className="hero-sculpture-fallback-orbit" />
      </div>
      <canvas
        aria-hidden="true"
        className="hero-sculpture-canvas"
        ref={canvasRef}
        tabIndex={-1}
      />
      <figcaption className="sr-only">
        A slowly rotating blue geometric sculpture held between precise metal
        orbits, representing one living system shared across every role.
      </figcaption>
    </figure>
  );
}
