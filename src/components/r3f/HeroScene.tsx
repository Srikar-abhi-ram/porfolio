"use client";

import { useRef, useMemo, MutableRefObject } from "react";
import { useFrame, Canvas, invalidate } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Icosahedron, TorusKnot, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function Rig({
  scrollRef,
}: {
  scrollRef: MutableRefObject<number>;
}) {
  const g = useRef<THREE.Group>(null);
  useFrame((_, delta) => {
    const s = scrollRef.current;
    if (!g.current) return;
    g.current.rotation.y += delta * 0.15 + s * 0.25 * delta;
    g.current.rotation.x = THREE.MathUtils.lerp(
      g.current.rotation.x,
      s * 0.55,
      0.04,
    );
    g.current.position.z = THREE.MathUtils.lerp(
      g.current.position.z,
      -0.2 + s * 0.6,
      0.04,
    );
    invalidate();
  });
  return (
    <group ref={g} rotation={[0.2, 0, 0]}>
      <Float speed={1.4} floatIntensity={0.35} rotationIntensity={0.2}>
        <Icosahedron args={[1.25, 1]} castShadow>
          <MeshDistortMaterial
            color="#52525b"
            emissive="#18181b"
            emissiveIntensity={0.12}
            roughness={0.35}
            metalness={0.5}
            distort={0.2}
            speed={1.6}
          />
        </Icosahedron>
      </Float>
      <Float speed={1.1} floatIntensity={0.2} position={[1.1, 0.4, -0.3]}>
        <TorusKnot args={[0.38, 0.12, 80, 12]} castShadow>
          <meshStandardMaterial
            color="#71717a"
            emissive="#09090b"
            emissiveIntensity={0.15}
            metalness={0.55}
            roughness={0.25}
          />
        </TorusKnot>
      </Float>
      <Sparkles
        count={40}
        speed={0.35}
        scale={4}
        size={0.9}
        opacity={0.22}
        color="#a1a1aa"
      />
    </group>
  );
}

export function HeroCanvas({
  scrollRef,
}: {
  scrollRef: MutableRefObject<number>;
}) {
  const dpr = useMemo(() => [1, 1.5] as [number, number], []);
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 h-[100dvh] w-full">
      <Canvas
        dpr={dpr}
        frameloop="demand"
        gl={{
          powerPreference: "high-performance",
          antialias: true,
          alpha: true,
        }}
        camera={{ position: [0, 0, 5.2], fov: 45 }}
        onPointerMove={() => invalidate()}
        onCreated={({ gl }) => {
          gl.setClearColor("#00000000", 0);
        }}
      >
        <color attach="background" args={["#00000000"]} />
        <ambientLight intensity={0.35} />
        <spotLight
          position={[4, 6, 4]}
          angle={0.4}
          penumbra={0.4}
          intensity={1.6}
          color="#d4d4d8"
        />
        <pointLight position={[-3, 2, 2]} intensity={0.5} color="#a1a1aa" />
        <Rig scrollRef={scrollRef} />
      </Canvas>
    </div>
  );
}
