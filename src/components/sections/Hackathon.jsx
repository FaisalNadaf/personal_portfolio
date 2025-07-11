/** @format */

import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import styled from "styled-components";
import {  hackathons } from "../../data/constants";
import HacakathonCard from "../cards/HacakathonCard";

const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-top: 50px;
	position: relative;
	z-index: 1;
	align-items: center;
`;

const Wrapper = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-direction: column;
	width: 100%;
	max-width: 1100px;
	gap: 12px;
	@media (max-width: 960px) {
		flex-direction: column;
	}
`;
const Title = styled.div`
	font-size: 52px;
	text-align: center;
	font-weight: 600;
	margin-top: 20px;
	color: ${({ theme }) => theme.text_primary};
	@media (max-width: 768px) {
		margin-top: 12px;
		font-size: 32px;
	}
`;
const Desc = styled.div`
	font-size: 18px;
	text-align: center;
	font-weight: 600;
	color: ${({ theme }) => theme.text_secondary};
	@media (max-width: 768px) {
		font-size: 16px;
	}
`;

const Hackathon = () => {
	return (
		<Container id="Hackathon">
			<Wrapper>
				<Title>Hackathon</Title>
				<Desc
					style={{
						marginBottom: "40px",
					}}>
					My hackathon experience includes building innovative projects,
					collaborating in teams, and solving real-world problems under time
					constraints.
				</Desc>

				<VerticalTimeline>
					{hackathons.map((experience, index) => (
						<HacakathonCard
							key={`experience-${index}`}
							experience={experience}
						/>
					))}
				</VerticalTimeline>
			</Wrapper>
		</Container>
	);
};

export default Hackathon;
