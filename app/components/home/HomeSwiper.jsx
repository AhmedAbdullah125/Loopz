'use client'
import React from 'react'
import { Link } from 'next/link';
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import back from '../../assets/Home/s.png'
import Image from 'next/image';
export default function HomeSwiper() {
    return (
        <div className="container home-slider">
            <Swiper
                // navigation
                pagination={{ type: "bullets", clickable: true }}
                spaceBetween={12}
                slidesPerView={7.5}
                autoplay={true}
                loop={true}
                modules={[Autoplay, Navigation, Pagination]}
                breakpoints={{
                    1400: {
                        slidesPerView: 1,
                    },
                    1100: {
                        slidesPerView: 1,
                    },
                    767: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 1,
                        autoplay: false,
                    },
                    640: {
                        slidesPerView: 1,
                        autoplay: false,
                    },

                    100: {
                        slidesPerView: 1,
                        autoplay: false,
                    },
                }}
            >

                <SwiperSlide >
                    <div className="slide-img">
                        <Image src={back} alt='Loops' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="slide-img">
                        <Image src={back} alt='Loops' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="slide-img">
                        <Image src={back} alt='Loops' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="slide-img">
                        <Image src={back} alt='Loops' />
                    </div>
                </SwiperSlide>
                <SwiperSlide >
                    <div className="slide-img">
                        <Image src={back} alt='Loops' />
                    </div>
                </SwiperSlide>

            </Swiper>
        </div>
    )
}
