"use client";

import { Canvas } from "@react-three/fiber";
import { useRef, useMemo } from "react";
import * as random from "maath/random/dist/maath-random.esm";
import { PointMaterial, Points } from "@react-three/drei";

const StarsBackground = (props: any) => {
  const ref = useRef<any>();
  const [sphere] = useMemo(() => {
    return [
      random.inSphere(new Float32Array(5000), { radius: 1.2 }) as Float32Array,
    ];
  }, []);

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color='#ffffff'
          size={0.002}
          sizeAttenuation={true}
          dethWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas = () => {
  return (
    <div className="w-full h-auto inset-0 z-[-1]">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <StarsBackground />
      </Canvas>
    </div>
  );
};

export default StarsCanvas;