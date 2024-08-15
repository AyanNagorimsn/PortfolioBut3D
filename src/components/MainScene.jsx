import { Html, ContactShadows, Environment, Float, PresentationControls } from "@react-three/drei";
import Laptop from "./Laptop";
import { useControls } from "leva";

const MainScene = () => {
  //   const { position, rotateX } = useControls({
  //     position: { y: 0.34700000000000025 },
  //     rotateX: -0.2,
  //   });
  return (
    <>
      <color args={["#695b5b"]} attach="background" />

      <Environment preset="city" />

      <PresentationControls
        global
        snap
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 0.75]}
        config={{ mass: 2, tension: 300 }}
      >
        <Float rotationIntensity={0.4}>
          <Html
            rotation={[-0.272, 0, 0]}
            position={[0, 0.345, -1.335]}
            wrapperClass="htmlScreen"
            distanceFactor={1.17}
            transform
          >
            <iframe src="https://ayannagori.vercel.app" />
          </Html>
          <Laptop position-y={-1.2}></Laptop>
        </Float>
      </PresentationControls>

      <ContactShadows position-y={-1.4} opacity={0.4} scale={5} blur={2.4} />
    </>
  );
};

export default MainScene;
