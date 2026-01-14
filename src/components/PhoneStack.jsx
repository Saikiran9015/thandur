import { useRef, useMemo } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";

const modelPath = "/iphone_14_pro.glb";

// Config for 3 phones as seen in the image
const PHONE_CONFIGS = [
    { x: -1.2, z: -1.0, r: 0.2 }, // Left back
    { x: -0.1, z: -0.5, r: 0.1 }, // Middle
    { x: 1.0, z: 0.2, r: 0.0 },   // Right front
];

export default function PhoneStack() {
    const { scene } = useGLTF(modelPath);
    const { viewport } = useThree();
    const refs = useRef([]);

    // Determine if we are on a small screen
    const isMobile = viewport.width < 10;

    // Clone models
    const sceneClones = useMemo(() =>
        PHONE_CONFIGS.map(() => scene.clone()),
        [scene]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();

        refs.current.forEach((ref, i) => {
            if (!ref) return;
            const config = PHONE_CONFIGS[i];

            // Hovering effect
            ref.position.y = -0.5 + Math.sin(t + i) * 0.1; // Increased float range slightly for flow

            // smooth flow continuous rotation
            // We add the config.r (initial offset) + a continuous time-based rotation
            ref.rotation.y = config.r + t * 0.3;
        });
    });

    return (
        <group position={isMobile ? [0, 0, 0] : [1.5, 0, 0]}>
            {/* Shifted right for desktop split layout, centered for mobile */}
            {PHONE_CONFIGS.map((p, i) => (
                <primitive
                    key={i}
                    ref={(el) => (refs.current[i] = el)}
                    object={sceneClones[i]}
                    scale={isMobile ? 10.5 : 11.5} // Increased scale as requested
                    position={[p.x, -0.5, p.z]}
                />
            ))}
        </group>
    );
}
