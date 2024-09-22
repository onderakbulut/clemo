'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {  Navigation } from 'swiper/modules';
import "swiper/css";

function InstaFeed() {
    const swiperOption2 = {
        loop: true,
        spaceBetween: 20,
        modules: [Navigation],
        breakpoints: {
            0: {
                slidesPerView: 2,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 1,
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 1,
            },
        },
    };
    return (  
        <div className="insta-feed container pt-85 pb-105">  
            <div className='fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60 text-center'>instagram</div>
            <Swiper {...swiperOption2}>
                <SwiperSlide>
                    <img src="/images/268x268.png" alt="" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/268x268.png" alt="" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/268x268.png" alt="" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/268x268.png" alt="" className="img-fluid" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src="/images/268x268.png" alt="" className="img-fluid" />
                </SwiperSlide>

            </Swiper>
        </div>
    );
}

export default InstaFeed;