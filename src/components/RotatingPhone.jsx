import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

export default function RotatingPhone({ scale = 1, rotationSpeed = 0.5 }) {
    const { scene } = useGLTF("/iphone_14_pro.glb");
    const ref = useRef();

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * rotationSpeed;
            ref.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.1;
        }
    });

    return (
        <primitive
            ref={ref}
            object={scene.clone()}
            scale={scale}
            rotation={[0, -0.5, 0]}
        />
    );
}
