import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import CoinModel from '../CoinModel/CoinModel'

function Coin() {
	return (
		<Canvas
			style={{ width: '100%', height: '80vh', background: "orange" }}
			camera={{
				position: [-3, 3, 5]
			}}
		>
			<OrbitControls />
			<ambientLight intensity={10} />
			<directionalLight color="white" position={[1, 1, 1]} intensity={10} castShadow shadow-mapSize={1024} />

			<CoinModel />
		</Canvas>
	)
}

export default Coin