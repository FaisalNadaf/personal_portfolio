/** @format */

import React, { useRef } from "react";
import { gsap, Power4 } from "gsap";
import styled from "styled-components";

const MagnetoButtonWrapper = styled.button`
  min-height: 10rem;
  min-width: 10rem;
  border-radius: 50%;
  border: none;
  background-color: rgb(149, 93, 253);
  cursor: pointer;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgb(129, 73, 233);
  }
`;

const MagnetoText = styled.span`
textdecoration: none;
  position: relative;
  font-size: 1rem;
  font-weight: bold;
  color: white;
  transition: transform 0.3s ease;
`;

const Debugger = styled.div`
  display: none;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: #f3f4f6; /* Tailwind's gray-100 */
  color: black;
  padding: 2rem;
  width: 20rem;
  border: 1px solid #e5e7eb; /* Tailwind's gray-200 */
  border-radius: 0.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const MagnetoButton = ({ text }) => {
	const buttonRef = useRef(null);
	const textRef = useRef(null);

	const activateMagneto = (event) => {
		const button = buttonRef.current;
		const text = textRef.current;

		if (!button || !text) return;

		const boundBox = button.getBoundingClientRect();
		const magnetoStrength = 40;
		const magnetoTextStrength = 80;
		const newX = (event.clientX - boundBox.left) / button.offsetWidth - 0.5;
		const newY = (event.clientY - boundBox.top) / button.offsetHeight - 0.5;

		gsap.to(button, {
			duration: 1,
			x: newX * magnetoStrength,
			y: newY * magnetoStrength,
			ease: Power4.easeOut,
		});

		gsap.to(text, {
			duration: 1,
			x: newX * magnetoTextStrength,
			y: newY * magnetoTextStrength,
			ease: Power4.easeOut,
		});
	};

	const resetMagneto = () => {
		const button = buttonRef.current;
		const text = textRef.current;

		if (!button || !text) return;

		gsap.to(button, {
			duration: 1,
			x: 0,
			y: 0,
			ease: Power4.easeOut,
		});

		gsap.to(text, {
			duration: 1,
			x: 0,
			y: 0,
			ease: Power4.easeOut,
		});
	};

	return (
		<div className="relative">
			<MagnetoButtonWrapper
				ref={buttonRef}
				onMouseMove={activateMagneto}
				onMouseLeave={resetMagneto}>
				<MagnetoText ref={textRef}>{text}</MagnetoText>
			</MagnetoButtonWrapper>
			<Debugger id="debugger"></Debugger>
		</div>
	);
};

export default MagnetoButton;
