import React from 'react';

// Import suspence
import { Suspense } from 'react';

// import canvas
import { Canvas } from '@react-three/fiber';

// Import decal, float, OrbitControls, preload, useTexture
import {
	Decal,
	Float,
	OrbitControls,
	Preload,
	useTexture,
} from '@react-three/drei';

// import loader
import Loader from '../Loader';

const Ball = (props) => {
	const [decal] = useTexture([props.imgUrl]);
	return (
		<Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
			<ambientLight intensity={0.25} />
			<directionalLight position={[0, 0, 0.05]} />
			<mesh castShadow recieveShadow scale={2.75}>
				<icosahedronGeometry args={[1, 1]} />
				<meshStandardMaterial
					color="#fff8eb"
					polygonOffset
					polygonOffsetFactor={-5}
					flatShading
				/>
				<Decal
					map={decal}
					position={[0, 0, 1]}
					rotation={[2 * Math.PI, 0, 6.25]}
					flatShading
				/>
			</mesh>
		</Float>
	);
};

const BallCanvas = ({ icon }) => {
	return (
		<Canvas frameLoop="demand" gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={<Loader />}>
				<OrbitControls enableZoom={false} />
				<Ball imgUrl={icon} />
			</Suspense>

			<Preload all />
		</Canvas>
	);
};

export default BallCanvas;
