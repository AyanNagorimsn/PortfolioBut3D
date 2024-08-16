import { Canvas } from "@react-three/fiber";
import MainScene from "./components/MainScene";
import { Suspense } from "react";
import { Loader } from "@react-three/drei";

import Slider from "./components/Slider";

function App() {
  return (
    <main>
      <div className="h-screen w-full">
        <Slider />

        <Canvas camera={{ position: [-1.3, 1, 3], fov: 80 }}>
          <Suspense>
            <MainScene />
          </Suspense>
        </Canvas>
        <Loader
          containerStyles={{
            position: "fixed",
            top: 0,
            left: 0,
            background: "#111",
            zIndex: 300,
            scale: 2,
            height: "100vh",
          }}
        />
      </div>
    </main>
  );
}

export default App;
