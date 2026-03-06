import { Suspense, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Text } from '@react-three/drei'
import { Model } from './components/Model'
import './App.css'

function Hotspot({ children, ...props }) {
  const [hovered, setHover] = useState(false)
  const [clicked, setClick] = useState(false)

  return (
    <group {...props}>
      <mesh
        onPointerOver={() => setHover(true)}
        onPointerOut={() => setHover(false)}
        onClick={() => setClick(!clicked)} >
        <boxGeometry args={[0.3, 0.3, 0.3]} />
        <meshBasicMaterial transparent opacity={0.1} />
      </mesh>
      {hovered && (
        <Text
          position={[0, 0.5, 0]}
          fontSize={0.2}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          Cup
        </Text>
      )}
    </group>
  )
}

function App() {
  return (
    <div id="canvas-container">
      <Canvas camera={{ position: [0, 2, 5], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 5, 2]} intensity={1} />
        <Suspense fallback={null}>
          <Model path="/models/kitchen.glb" scale={[0.5, 0.5, 0.5]} />
          <Model path="/models/plant.glb" position={[0.4, 0.9, 0.5]} scale={[0.2, 0.2, 0.2]} />
          <Hotspot position={[0.05, 0, 0.1]} scale={[0.2, 0.2, 0.2]} />
          <Environment preset="sunset" />
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  )
}

export default App
