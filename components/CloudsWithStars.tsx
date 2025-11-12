'use client';

import { useEffect, useRef } from 'react';

interface CloudsWithStarsProps {
  style?: React.CSSProperties;
}

export default function CloudsWithStars({ style }: CloudsWithStarsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<any>(null);
  const cameraRef = useRef<any>(null);
  const rendererRef = useRef<any>(null);
  const cloudsRef = useRef<any>(null);
  const starsRef = useRef<any>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const animationIdRef = useRef<number>();

  useEffect(() => {
    if (!containerRef.current) return;

    // Load THREE.js
    const loadThree = async () => {
      if (!(window as any).THREE) {
        await new Promise((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r121/three.min.js';
          script.onload = resolve;
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const THREE = (window as any).THREE;
      const container = containerRef.current;
      if (!container) return;

      // Setup scene
      const scene = new THREE.Scene();
      scene.fog = new THREE.FogExp2(0x0a0a0a, 0.0008);
      sceneRef.current = scene;

      // Setup camera
      const camera = new THREE.PerspectiveCamera(
        75,
        container.clientWidth / container.clientHeight,
        0.1,
        5000
      );
      camera.position.set(0, 0, 400);
      cameraRef.current = camera;

      // Setup renderer
      const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setClearColor(0x0a0a0a, 1);
      container.appendChild(renderer.domElement);
      rendererRef.current = renderer;

      // Create stars
      const starCount = 2000;
      const starsGeometry = new THREE.BufferGeometry();
      const starPositions = new Float32Array(starCount * 3);
      const starColors = new Float32Array(starCount * 3);

      for (let i = 0; i < starCount; i++) {
        // Position stars in a huge sphere
        const radius = 1500 + Math.random() * 2000;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;

        starPositions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
        starPositions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
        starPositions[i * 3 + 2] = radius * Math.cos(phi);

        // 20% purple, 80% white stars
        if (Math.random() < 0.2) {
          starColors[i * 3] = 0.8;
          starColors[i * 3 + 1] = 0.6;
          starColors[i * 3 + 2] = 1.0;
        } else {
          starColors[i * 3] = 1.0;
          starColors[i * 3 + 1] = 1.0;
          starColors[i * 3 + 2] = 1.0;
        }
      }

      starsGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
      starsGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

      const starsMaterial = new THREE.PointsMaterial({
        size: 3,
        vertexColors: true,
        transparent: true,
        opacity: 0.9,
        blending: THREE.AdditiveBlending,
        depthWrite: false,
        sizeAttenuation: true
      });

      const stars = new THREE.Points(starsGeometry, starsMaterial);
      scene.add(stars);
      starsRef.current = stars;

      console.log('✨ Stars created:', starCount);

      // Create clouds
      const cloudGroup = new THREE.Group();
      const cloudGeometry = new THREE.SphereGeometry(80, 16, 16);
      const cloudMaterial = new THREE.MeshPhongMaterial({
        color: 0x4a388f,
        transparent: true,
        opacity: 0.6,
        shininess: 10,
        emissive: 0x2d1f5c,
        emissiveIntensity: 0.3
      });

      // Create multiple cloud puffs
      for (let i = 0; i < 30; i++) {
        const cloud = new THREE.Mesh(cloudGeometry, cloudMaterial.clone());

        cloud.position.x = Math.random() * 800 - 400;
        cloud.position.y = Math.random() * 400 - 200;
        cloud.position.z = Math.random() * 400 - 200;

        cloud.scale.set(
          Math.random() * 2 + 0.5,
          Math.random() * 2 + 0.5,
          Math.random() * 2 + 0.5
        );

        cloudGroup.add(cloud);
      }

      scene.add(cloudGroup);
      cloudsRef.current = cloudGroup;

      // Lighting
      const ambientLight = new THREE.AmbientLight(0x9b7fd9, 0.5);
      scene.add(ambientLight);

      const directionalLight = new THREE.DirectionalLight(0xff9ffc, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      const pointLight = new THREE.PointLight(0x5227ff, 1, 1000);
      pointLight.position.set(0, 0, 200);
      scene.add(pointLight);

      console.log('☁️ Clouds created');

      // Mouse movement
      const onMouseMove = (event: MouseEvent) => {
        mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
        mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      };

      window.addEventListener('mousemove', onMouseMove);

      // Animation loop
      const animate = () => {
        animationIdRef.current = requestAnimationFrame(animate);

        // Rotate clouds slowly
        if (cloudsRef.current) {
          cloudsRef.current.rotation.y += 0.0005;
          cloudsRef.current.rotation.x += 0.0002;
        }

        // Camera follows mouse smoothly
        const targetX = mouseRef.current.x * 100;
        const targetY = mouseRef.current.y * 100;

        camera.position.x += (targetX - camera.position.x) * 0.05;
        camera.position.y += (targetY - camera.position.y) * 0.05;
        camera.lookAt(0, 0, 0);

        renderer.render(scene, camera);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!container) return;
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      };

      window.addEventListener('resize', handleResize);

      // Cleanup
      return () => {
        window.removeEventListener('mousemove', onMouseMove);
        window.removeEventListener('resize', handleResize);
        if (animationIdRef.current) {
          cancelAnimationFrame(animationIdRef.current);
        }
        if (renderer.domElement && container.contains(renderer.domElement)) {
          container.removeChild(renderer.domElement);
        }
        renderer.dispose();
      };
    };

    loadThree();
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '100%',
        ...style
      }}
    />
  );
}
