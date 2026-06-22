/** @format */

import React, { useRef, useState } from "react";
import { gsap, Power3 } from "gsap";

const MagnetoButton = ({ text, type = "button", disabled = false }) => {
	const buttonRef = useRef(null);
	const innerRef = useRef(null);
	const haloRef = useRef(null);
	const [hovered, setHovered] = useState(false);

	const activateMagneto = (event) => {
		const button = buttonRef.current;
		const inner = innerRef.current;
		const halo = haloRef.current;
		if (!button || !inner) return;

		const rect = button.getBoundingClientRect();
		const buttonStrength = 50;
		const innerStrength = 100;
		const haloStrength = 30;

		const x = (event.clientX - rect.left) / button.offsetWidth - 0.5;
		const y = (event.clientY - rect.top) / button.offsetHeight - 0.5;

		gsap.to(button, {
			duration: 0.7,
			x: x * buttonStrength,
			y: y * buttonStrength,
			ease: Power3.easeOut,
		});
		gsap.to(inner, {
			duration: 0.7,
			x: x * innerStrength,
			y: y * innerStrength,
			ease: Power3.easeOut,
		});
		if (halo) {
			gsap.to(halo, {
				duration: 0.9,
				x: x * haloStrength,
				y: y * haloStrength,
				ease: Power3.easeOut,
			});
		}
	};

	const resetMagneto = () => {
		const button = buttonRef.current;
		const inner = innerRef.current;
		const halo = haloRef.current;
		if (!button || !inner) return;

		setHovered(false);

		gsap.to(button, {
			duration: 0.9,
			x: 0,
			y: 0,
			ease: "elastic.out(1, 0.4)",
		});
		gsap.to(inner, {
			duration: 0.9,
			x: 0,
			y: 0,
			ease: "elastic.out(1, 0.4)",
		});
		if (halo) {
			gsap.to(halo, {
				duration: 0.9,
				x: 0,
				y: 0,
				ease: "elastic.out(1, 0.4)",
			});
		}
	};

	return (
		<div className="relative inline-flex items-center justify-center">
			{/* Soft glowing halo (follows magneto with reduced strength) */}
			<span
				ref={haloRef}
				aria-hidden
				className={`pointer-events-none absolute inset-0 rounded-full bg-accent/40 blur-2xl transition-opacity duration-500 ${
					hovered ? "opacity-90" : "opacity-50"
				}`}
			/>

			<button
				ref={buttonRef}
				type={type}
				disabled={disabled}
				onMouseEnter={() => setHovered(true)}
				onMouseMove={activateMagneto}
				onMouseLeave={resetMagneto}
				className="group/mag relative flex h-40 w-40 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent via-blue-500 to-indigo-500 text-white shadow-glow-lg ring-1 ring-white/15 transition-transform duration-300 ease-out hover:scale-105 disabled:cursor-not-allowed disabled:opacity-60">
				{/* Rotating conic ring behind */}
				<span
					aria-hidden
					className="pointer-events-none absolute -inset-px rounded-full opacity-0 transition-opacity duration-500 group-hover/mag:opacity-100"
					style={{
						background:
							"conic-gradient(from 0deg, rgba(255,255,255,0.0), rgba(255,255,255,0.6), rgba(255,255,255,0.0))",
						animation: "spin 4s linear infinite",
						mask: "radial-gradient(circle, transparent 64%, #000 66%)",
						WebkitMask: "radial-gradient(circle, transparent 64%, #000 66%)",
					}}
				/>

				{/* Shine sweep on hover */}
				<span
					aria-hidden
					className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000 ease-out group-hover/mag:translate-x-full"
				/>

				<span
					ref={innerRef}
					className="relative z-[1] flex items-center gap-2 text-base font-semibold tracking-wide">
					<span>{text}</span>
					<span className="inline-block transition-transform duration-300 group-hover/mag:translate-x-1">
						→
					</span>
				</span>
			</button>
		</div>
	);
};

export default MagnetoButton;
