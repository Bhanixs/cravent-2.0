import { Canvas, useFrame } from "@react-three/fiber";
import { Edges } from "@react-three/drei";
import { useRef, useMemo } from "react";
import * as THREE from "three";
import type { Group } from "three";

// Exact contour coordinates of the official Cravent logo mark (normalized to ~[-2, 2])
const CRAVENT_MARK_POINTS: [number, number][] = [
  [1.971, 2.0],
  [-0.3216, -0.6989],
  [-0.3023, -0.6989],
  [0.162, -0.4039],
  [0.2104, -0.2975],
  [1.2938, -1.7533],
  [1.2987, -1.7775],
  [1.2358, -1.8984],
  [1.1536, -1.9661],
  [1.0617, -2.0],
  [0.3507, -2.0],
  [0.2539, -1.971],
  [0.1572, -1.9226],
  [0.0556, -1.8307],
  [-0.5538, -1.0036],
  [-1.4244, -2.0],
  [-1.4244, -0.9117],
  [-1.4196, -0.6699],
  [-1.4002, -0.6022],
  [-1.3615, -0.5151],
  [-1.2938, -0.4087],
  [-1.1729, -0.283],
  [-0.5732, 0.1524],
  [-0.5828, 0.1572],
  [-0.6119, 0.1475],
  [-1.1439, -0.0508],
  [-1.2068, -0.1185],
  [-1.971, 0.8972],
  [-0.9891, 0.9166],
  [-0.7811, 0.8827],
  [-0.6264, 0.8102],
  [-0.578, 0.7618],
  [-0.3313, 0.4426],
  [-0.2733, 0.3797],
];

function Cravent3DMark() {
  const group = useRef<Group>(null);

  const geometry = useMemo(() => {
    const shape = new THREE.Shape();
    CRAVENT_MARK_POINTS.forEach(([x, y], i) => {
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    });
    shape.closePath();

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: 0.62,
      bevelEnabled: true,
      bevelThickness: 0.09,
      bevelSize: 0.07,
      bevelSegments: 5,
      curveSegments: 12,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    geo.computeVertexNormals();
    return geo;
  }, []);

  useFrame(({ pointer }, rawDelta) => {
    if (!group.current) return;
    const delta = Math.min(rawDelta, 0.05);
    // Continuous subtle floating rotation
    group.current.rotation.y += delta * 0.14;

    // Interactive mouse parallax
    group.current.rotation.x +=
      (pointer.y * 0.18 + 0.22 - group.current.rotation.x) * (1 - Math.exp(-3.5 * delta));
    group.current.rotation.z +=
      (-pointer.x * 0.14 - 0.06 - group.current.rotation.z) * (1 - Math.exp(-3.5 * delta));
  });

  return (
    <group ref={group} rotation={[0.22, -0.42, -0.06]}>
      <mesh geometry={geometry}>
        <meshPhysicalMaterial
          color="#2563eb"
          emissive="#1d4ed8"
          emissiveIntensity={0.08}
          metalness={0.12}
          roughness={0.24}
          clearcoat={0.6}
          clearcoatRoughness={0.18}
        />
        <Edges color="#60a5fa" threshold={24} opacity={0.4} transparent />
      </mesh>
    </group>
  );
}

export function HeroObject() {
  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 8.8], fov: 38 }}
        gl={{ antialias: true, alpha: true }}
      >
        {/* Balanced soft studio lighting without washing out colors */}
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 6, 7]} intensity={1.2} />
        <directionalLight position={[-4, -2, 5]} intensity={0.6} color="#93c5fd" />
        <directionalLight position={[0, -4, -3]} intensity={0.3} color="#e0f2fe" />
        <Cravent3DMark />
      </Canvas>
    </div>
  );
}
