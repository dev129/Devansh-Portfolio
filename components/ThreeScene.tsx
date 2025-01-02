'use client'
import { Suspense, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

const Model = () => {
  const { scene } = useGLTF('/model.glb');
  const modelRef = useRef<Mesh>(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.01;
    }
  });

  return <primitive ref={modelRef} object={scene} scale={7} position={[0, 0, 0]} />;
};

const ThreeScene = () => {
  return (
    <Canvas
      style={{ width: '800px', height: '600px' }}
      camera={{ position: [0, 0, 5], fov: 50 }}
    >
      <Suspense fallback={<>Loading...</>}>
        <ambientLight intensity={0.5} />
        <hemisphereLight color={'white'} groundColor={'gray'} intensity={1} />
        <directionalLight position={[5, 5, 5]} intensity={1} />
        <directionalLight position={[-5, 5, 5]} intensity={1} />
        <directionalLight position={[5, -5, 5]} intensity={1} />
        <directionalLight position={[-5, -5, 5]} intensity={1} />
        <Model />
      </Suspense>
    </Canvas>
  );
};

export default ThreeScene;