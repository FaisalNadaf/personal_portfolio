/** @format */

import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import { certificateSwiperImages } from "../../data/constants";
import StartCanvas from "../canvas/Stars";

// Styled Components
const SwiperContainer = styled.div`
	width: 100%;
	padding: 2rem 0;
	display: flex;
	justify-content: center;
	align-items: center;
	position: relative;
	background-color: ${({ theme }) => theme.bg};
`;

const SwiperWrapper = styled.div`
	max-width: 100vw;
	padding: 2rem;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Heading = styled.h1`
	font-size: 3rem;
	color: ${({ theme }) => theme.text_primary};
	text-align: center;
	margin-bottom: 2rem;
`;

const StyledSwiper = styled(Swiper)`
	width: 100%;
	height: 50vh;
	position: relative;

	.swiper-slide {
		width: 500px;
		height: 300px;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 20px;
		overflow: hidden;
		background: ${({ theme }) => theme.bg_secondary};
	}

	.swiper-slide img {
		width: 100%;
		height: 100%;
		object-fit: fill;
		border-radius: 20px;
	}

	.swiper-pagination-bullet {
		background: ${({ theme }) => theme.soft2};
		&.swiper-pagination-bullet-active {
			background: ${({ theme }) => theme.primary};
		}
	}

	.swiper-button-prev,
	.swiper-button-next {
		color: ${({ theme }) => theme.primary};
		&:hover {
			color: ${({ theme }) => theme.text_primary};
		}
	}
`;

const SwiperControl = styled.div`
	margin-top: 1rem;
	display: flex;
	justify-content: space-between;
	width: 100%;
`;

const CertificateSwiper = () => {
	return (
		<SwiperContainer>
			<StartCanvas />
			<SwiperWrapper>
				<Heading>Certificates</Heading>
				<StyledSwiper
					effect={"coverflow"}
					grabCursor={true}
					centeredSlides={true}
					loop={true}
					slidesPerView={"auto"}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 100,
						modifier: 2.5,
					}}
					pagination={{ clickable: true }}
					navigation={true}
					modules={[EffectCoverflow, Pagination, Navigation]}>
					{certificateSwiperImages.map((img, idx) => (
						<SwiperSlide key={idx}>
							<img
								src={img}
								alt={`Certificate ${idx + 1}`}
							/>
						</SwiperSlide>
					))}
				</StyledSwiper>
				<SwiperControl />
			</SwiperWrapper>
		</SwiperContainer>
	);
};

export default CertificateSwiper;
