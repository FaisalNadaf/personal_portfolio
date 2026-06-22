/** @format */

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
	EffectCoverflow,
	Pagination,
	Navigation,
	Autoplay,
} from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { certificateSwiperImages } from "../../data/constants";
import StarCanvas from "../canvas/Stars";
import SectionHeader from "../ui/SectionHeader";

const CertificateSwiper = () => {
	return (
		<section
			id="Certifications"
			className="relative w-full overflow-hidden bg-bg py-16 md:py-24">
			<StarCanvas />

			{/* Header stays inside the page container */}
			<div className="section-container relative z-[2]">
				<SectionHeader
					eyebrow="Certifications"
					title="Certificates"
					description="Swipe to explore. Tap dots to jump quickly."
				/>
			</div>

			{/* Swiper breaks out to full viewport width */}
			<div className="relative z-[2] w-full">
				<Swiper
					className="cert-swiper"
					effect="coverflow"
					grabCursor
					centeredSlides
					loop
					slidesPerView="auto"
					speed={900}
					observer
					observeParents
					autoplay={{
						delay: 2800,
						disableOnInteraction: false,
						pauseOnMouseEnter: true,
					}}
					coverflowEffect={{
						rotate: 0,
						stretch: 0,
						depth: 220,
						modifier: 2,
						slideShadows: false,
					}}
					pagination={{ clickable: true, dynamicBullets: false }}
					navigation
					modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}>
					{certificateSwiperImages.map((img, idx) => (
						<SwiperSlide key={idx}>
							<div className="relative h-full w-full overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 shadow-lg shadow-black/40 backdrop-blur-md">
								<div className="absolute inset-3 overflow-hidden rounded-xl bg-zinc-950/40 ring-1 ring-zinc-800">
									<img
										src={img}
										alt={`Certificate ${idx + 1}`}
										loading="lazy"
										className="h-full w-full object-contain"
									/>
								</div>
							</div>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default CertificateSwiper;
