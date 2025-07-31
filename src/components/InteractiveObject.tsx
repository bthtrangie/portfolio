import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Environment, useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function SceneObjects() {
  const astronautRef = useRef<THREE.Group>(null);
  const issRef = useRef<THREE.Group>(null);
  const { viewport } = useThree();

  const { scene: astronautScene } = useGLTF('/astronaut.glb');
  const { scene: issScene } = useGLTF('/ISS.glb');

  astronautScene.scale.set(1, 1, 1); 
  issScene.scale.set(0.015, 0.015, 0.015);

  astronautScene.position.set(viewport.width * 0.3, viewport.height * 0.2, 0);
  issScene.position.set(-viewport.width * 0.3, -viewport.height * 0.2, 0);

  useFrame(({ clock }) => {
    if (astronautRef.current) {
      astronautRef.current.position.x = Math.sin(clock.getElapsedTime() * 0.3) * viewport.width * 0.4;
      astronautRef.current.position.y = Math.cos(clock.getElapsedTime() * 0.4) * viewport.height * 0.3;
      astronautRef.current.rotation.y += 0.002;
    }

    if (issRef.current) {
      issRef.current.position.x = Math.cos(clock.getElapsedTime() * 0.2) * viewport.width * 0.35;
      issRef.current.position.y = Math.sin(clock.getElapsedTime() * 0.25) * viewport.height * 0.4;
      issRef.current.rotation.y -= 0.001;
    }
  });

  return (
    <group>
      <primitive object={astronautScene} ref={astronautRef} />
      <primitive object={issScene} ref={issRef} />
    </group>
  );
}

export default function InteractiveBackground() {
  return (
    <div className="fixed inset-0 z-1">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Suspense fallback={null}>
          <SceneObjects />
        </Suspense>
        <OrbitControls enableZoom={false} enablePan={false} />
        <Environment preset="city" />
      </Canvas>
    </div>
  );
} 