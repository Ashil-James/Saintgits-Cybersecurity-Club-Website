import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

export default function CyberGlobe() {
  return (
    <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-auto opacity-60 hidden lg:block">
      <Canvas camera={{ position: [0, 0, 3] }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} intensity={2} color="#7a00ff" />
        <directionalLight
          position={[-2, -2, -2]}
          intensity={2}
          color="#ff0055"
        />

        <Sphere args={[1, 64, 64]} scale={1.2}>
          <MeshDistortMaterial
            color="#0044ff"
            attach="material"
            distort={0.4}
            speed={2}
            roughness={0.2}
            wireframe={true}
            transparent={true}
            opacity={0.3}
          />
        </Sphere>

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
}
