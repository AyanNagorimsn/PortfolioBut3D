import { Cloud, Clouds, Float } from "@react-three/drei";
import * as THREE from "three";

const CloudBackground = () => {
  return (
    <Float>
      <Clouds material={THREE.MeshBasicMaterial}>
        <Cloud
          scale={1}
          segments={10}
          bounds={[10, 2, 2]}
          position={[5, 0, -5]}
          volume={10}
          color="hotpink"
        />
        <Cloud
          scale={0.2}
          position={[2, 0, -5]}
          segments={60}
          bounds={[10, 10, 2]}
          volume={10}
          color="orangered"
        />
        <Cloud
          scale={0.24}
          position={[-2, 0, -5]}
          segments={60}
          bounds={[20, 10, 2]}
          volume={20}
          color="beige"
        />
      </Clouds>
    </Float>
  );
};

export default CloudBackground;
