import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const modelPath = "/iphone_14_pro.glb";

export default function PhoneModel() {
    const ref = useRef();
    const { scene } = useGLTF(modelPath);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        ref.current.rotation.y = t * 0.2;      // slow premium rotation
        ref.current.position.y = Math.sin(t) * 0.1 - 1; // floating
    });

    return (
        <primitive
            ref={ref}
            object={scene}
            scale={1.6}
        />
    );
}
