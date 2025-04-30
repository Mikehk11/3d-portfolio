import React from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const HeroExperience = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
      <mesh rotation={[45, 45, 0]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="teal" />
      </mesh>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}

export default HeroExperience