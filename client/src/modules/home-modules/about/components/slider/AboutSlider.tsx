import React, {useCallback, useRef} from 'react';
import styles from './AboutSlider.module.scss'
import {Swiper, SwiperRef, SwiperSlide} from "swiper/react";
import {Autoplay} from "swiper";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import image1 from '@assets/images/image1.jpg'
import image2 from '@assets/images/image2.jpg'
import image3 from '@assets/images/image3.jpg'
import image4 from '@assets/images/image4.jpg'
import {ButtonRound} from "@components/ui/button-round";
import Icons from "@components/ui/icons";


export const AboutSlider = () => {
	const sliderRef = useRef<SwiperRef>(null);

	const handlePrev = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slidePrev();
	}, []);

	const handleNext = useCallback(() => {
		if (!sliderRef.current) return;
		sliderRef.current.swiper.slideNext();
	}, []);

	return (
		<div className={styles.aboutSlider}>
			<ButtonRound onClick={handlePrev} className={styles.sliderButton}>
				<Icons name={"arrow-left"} size={30} />
			</ButtonRound>
			<Swiper
				ref={sliderRef}
				loop={true}
				autoplay={{
					delay: 5000,
				}}
				modules={[Autoplay]}
				className={styles.slider}
				breakpoints={{
					0: {
						slidesPerView: 1.25,
						centeredSlides: true,
						spaceBetween: 16
					},
					600: {
						slidesPerView: 1.55,
						centeredSlides: false,
						spaceBetween: 32
					},
					1125: {
						slidesPerView: 2,
						centeredSlides: false,
						spaceBetween: 32
					}
				}}
			>
				<SwiperSlide>
					<div className={styles.slide}>
						<img src={image1} alt={""} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slide}>
						<img src={image2} alt={""} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slide}>
						<img src={image3} alt={""} />
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles.slide}>
						<img src={image4} alt={""} />
					</div>
				</SwiperSlide>
			</Swiper>
			<ButtonRound onClick={handleNext} className={styles.sliderButton}>
				<Icons name={"arrow-right"} size={30} />
			</ButtonRound>
		</div>
	);
};