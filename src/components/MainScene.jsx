import {
  Html,
  ContactShadows,
  Environment,
  Float,
  PresentationControls,
  Text,
  Sparkles,
} from "@react-three/drei";

import * as THREE from "three";
import { useThree } from "@react-three/fiber";

import { useEffect, useRef, useState } from "react";

import Laptop from "./Laptop";
import CloudBackground from "./CloudBackground";
import { useSpring, a } from "@react-spring/three";

const textColor = new THREE.Color(30, 30, 30);

const MainScene = () => {
  const { size } = useThree();
  const sceneRef = useRef(null);

  const [isLaptopOpen, setIsLaptopOpen] = useState(false);

  useEffect(() => {
    const { width } = size;

    if (width >= 600) {
      sceneRef.current.scale.set(1, 1, 1);
    }
    if (width < 600) {
      sceneRef.current.scale.set(0.7, 0.7, 0.7);
    }
    if (width < 450) {
      sceneRef.current.scale.set(0.6, 0.6, 0.6);
      sceneRef.current.position.set(-0.3, 0, 0);
    }

    setTimeout(() => {
      setIsLaptopOpen(true);
    }, 700);
  }, [size]);

  const springs = useSpring({
    intensity: isLaptopOpen ? 85 : 0,
    delay: 2000,
  });

  return (
    <>
      <color args={["#313bac"]} attach="background" />
      <Environment preset="city" />
      <Sparkles size={5} scale={[6, 6, 2]} count={60} />

      <CloudBackground />

      <group ref={sceneRef} position={[-0.5, 0, 0]}>
        <PresentationControls
          global
          snap
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-1, 0.75]}
          config={{ mass: 2, tension: 300 }}
        >
          <Float rotationIntensity={0.6}>
            <Text
              fontSize={0.9}
              maxWidth={1}
              textAlign="center"
              rotation={[0, -1.180000000000002, 0.20900000000000013]}
              position={[2.2, 0.8, 0.1]}
              color={textColor}
              font="./banger.woff"
            >
              Ayan Nagori
            </Text>
            <Html
              rotation={[-0.272, 0, 0]}
              position={[0, 0.345, -1.335]}
              wrapperClass="htmlScreen"
              distanceFactor={1.17}
              transform
            >
              <iframe
                style={
                  isLaptopOpen ? { transform: "scale(0.985,1)" } : { transform: "scale(0.985,0)" }
                }
                src="https://ayannagori.vercel.app"
              />
            </Html>
            <Laptop positionY={-1.2} isLaptopOpen={isLaptopOpen} />
            <a.rectAreaLight
              position={[0, 0.15, -1.15]}
              rotation={[0, Math.PI, 0]}
              color={"#57a5fc"}
              width={2.5}
              height={1.65}
              intensity={springs.intensity}
            />
          </Float>
        </PresentationControls>
      </group>

      <ContactShadows position-y={-1.4} opacity={0.35} scale={5} blur={2.4} />
    </>
  );
};

export default MainScene;
