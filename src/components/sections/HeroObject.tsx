import { Canvas, useFrame } from "@react-three/fiber";
import { Edges, Environment, Lightformer, RoundedBox } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function Sculpture() {
  const group = useRef<Group>(null);

  useFrame(({ pointer }, rawDelta) => {
    if (!group.current) return;
    const delta = Math.min(rawDelta, 0.05);
    group.current.rotation.y += delta * 0.09;
    group.current.rotation.x +=
      (pointer.y * 0.12 - group.current.rotation.x) * (1 - Math.exp(-3 * delta));
    group.current.rotation.z +=
      (-pointer.x * 0.08 - group.current.rotation.z) * (1 - Math.exp(-3 * delta));
  });

  return (
    <group ref={group} rotation={[0.28, -0.5, -0.08]}>
      <RoundedBox
        args={[1, 6.4, 1]}
        radius={0.48}
        smoothness={8}
        rotation-z={Math.PI / 4}
        castShadow
      >
        <meshPhysicalMaterial
          color="#101828"
          metalness={0.42}
          roughness={0.2}
          clearcoat={0.9}
          clearcoatRoughness={0.25}
        />
        <Edges color="#3b82f6" threshold={18} opacity={0.65} transparent />
      </RoundedBox>
      <RoundedBox
        args={[1, 6.4, 1]}
        radius={0.48}
        smoothness={8}
        rotation-z={-Math.PI / 4}
        castShadow
      >
        <meshPhysicalMaterial
          color="#e8eef8"
          metalness={0.22}
          roughness={0.28}
          clearcoat={1}
          clearcoatRoughness={0.18}
        />
        <Edges color="#2563eb" threshold={18} opacity={0.5} transparent />
      </RoundedBox>
      <mesh scale={0.82}>
        <torusGeometry args={[2.72, 0.035, 12, 96]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.5} />
      </mesh>
    </group>
  );
}

export function HeroObject() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 10], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
        shadows
      >
        <ambientLight intensity={0.75} />
        <directionalLight position={[5, 7, 8]} intensity={2.2} castShadow />
        <pointLight position={[-4, -2, 4]} intensity={18} color="#2563eb" />
        <Environment resolution={64}>
          <Lightformer intensity={2.8} position={[0, 5, 3]} scale={[8, 2, 1]} />
          <Lightformer
            intensity={1.6}
            color="#8db4ff"
            position={[-5, 0, 1]}
            rotation-y={Math.PI / 2}
            scale={[8, 2, 1]}
          />
        </Environment>
        <Sculpture />
      </Canvas>
    </div>
  );
}
