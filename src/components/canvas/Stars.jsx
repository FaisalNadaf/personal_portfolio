/** @format */

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";
import * as random from "maath/random/dist/maath-random.esm";
import styled from "styled-components";

const StyledCanvasWrapper = styled.div`
	width: 100%;
	height: auto;
	position: absolute;
	inset: 0;
`;

const Stars = React.memo((props) => {
	const ref = useRef();
	const sphere = useMemo(
		() => random.inSphere(new Float32Array(1000), { radius: 1}),
		[]
	);

	useFrame((state, delta) => {
		ref.current.rotation.x -= delta / 10;
		ref.current.rotation.y -= delta / 15;
	});

	return (
		<group rotation={[990, 990, Math.PI / 4]}>
			<Points
				ref={ref}
				positions={sphere}
				stride={3}
				frustumCulled
				{...props}>
				<PointMaterial
					transparent
					color="#f272c8"
					size={0.003}
					sizeAttenuation={true}
					depthWrite={false}
				/>
			</Points>
		</group>
	);
});

const StyledStarsCanvas = () => {
	return (
		<StyledCanvasWrapper>
			<Canvas camera={{ position: [0, 0, 1] }}>
				<Suspense fallback={null}>
					<Stars />
				</Suspense>
				<Preload all />
			</Canvas>
		</StyledCanvasWrapper>
	);
};

export default StyledStarsCanvas;
