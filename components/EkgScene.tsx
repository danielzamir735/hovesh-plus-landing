"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function EkgLine() {
  const lineObj = useRef<THREE.Line | null>(null);
  const time = useRef(0);

  const geometry = useMemo(() => {
    const count = 200;
    const pts: THREE.Vector3[] = [];
    for (let i = 0; i < count; i++) {
      pts.push(new THREE.Vector3((i / count) * 12 - 6, 0, 0));
    }
    return new THREE.BufferGeometry().setFromPoints(pts);
  }, []);

  const material = useMemo(
    () => new THREE.LineBasicMaterial({ color: 0x06b6d4, linewidth: 2 }),
    []
  );

  useEffect(() => {
    lineObj.current = new THREE.Line(geometry, material);
  }, [geometry, material]);

  useFrame((_, delta) => {
    time.current += delta * 0.8;
    if (!lineObj.current) return;
    const pos = lineObj.current.geometry.attributes.position;
    const count = pos.count;
    for (let i = 0; i < count; i++) {
      const x = (i / count) * 12 - 6;
      const t = time.current - x * 0.3;
      const phase = ((t % 4) + 4) % 4;
      let y = 0;
      if (phase < 0.1) y = phase * 5;
      else if (phase < 0.2) y = (0.2 - phase) * 15;
      else if (phase < 0.35) y = (phase - 0.2) * 10;
      else if (phase < 0.5) y = (0.5 - phase) * 8;
      else if (phase < 0.7) y = Math.sin((phase - 0.5) * Math.PI * 5) * 0.3;
      else y = 0;
      pos.setY(i, y);
    }
    pos.needsUpdate = true;
  });

  if (!lineObj.current) {
    // Create synchronously for SSR compat
    const l = new THREE.Line(geometry, material);
    lineObj.current = l;
  }

  return <primitive object={lineObj.current} />;
}

function FloatingParticles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const dummy = useMemo(() => new THREE.Object3D(), []);
  const positions = useMemo(() => {
    const pos = new Float32Array(60 * 3);
    for (let i = 0; i < 60; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 14;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    return pos;
  }, []);

  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    for (let i = 0; i < 60; i++) {
      const t = clock.getElapsedTime() + i * 0.1;
      dummy.position.set(
        positions[i * 3] + Math.sin(t * 0.3) * 0.3,
        positions[i * 3 + 1] + Math.cos(t * 0.4) * 0.2,
        positions[i * 3 + 2]
      );
      dummy.scale.setScalar(0.03 + Math.sin(t) * 0.01);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, 60]}>
      <sphereGeometry args={[1, 6, 6]} />
      <meshBasicMaterial color={0x8b5cf6} transparent opacity={0.5} />
    </instancedMesh>
  );
}

export default function EkgScene() {
  return (
    <div className="w-full h-48 md:h-64" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <EkgLine />
        <FloatingParticles />
      </Canvas>
    </div>
  );
}
