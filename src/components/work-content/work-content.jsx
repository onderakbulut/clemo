'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import './index.css';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import Social from '@/components/social/social';
import Fancybox from '@/components/fancybox';

function WorkContent() {
    const [swiper, setSwiper] = useState(null);
    const swiperOption = {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        modules: [FreeMode, Navigation, Thumbs, Pagination],
        pagination: {
            el: ".swiper-pagination-custom",
            clickable: true,
            renderBullet: function (index, className) {
                return (
                    '<span class="' + className + '">' + "</span>"
                );
            },
        },
        onSwiper: setSwiper,

    };

    const handlePrev = () => {
        if (swiper) swiper.slidePrev();
    };

    const handleNext = () => {
        if (swiper) swiper.slideNext();
    };

    return (  
        <div className='container work-content'> 
            <div className="row mb-105">
                <div className="d-flex justify-content-center mb-20">
                    <button className='btn-prev btn btn-link px-10 text-gray-800' onClick={handlePrev}>Prev</button>
                    <button className='btn-next btn btn-link px-10 text-gray-800' onClick={handleNext}>Next</button>
                </div>
                <div className="col-12">
                    <Fancybox
                        options={{
                                on: {
                                    close: (fancybox) => {
                                        const index = fancybox.getSlide().index;
                                        swiper.slideToLoop(index);
                                    },
                                },
                            }}
                        >
                        <Swiper {...swiperOption} className="work-slider">
                            <SwiperSlide>
                                    <a href="/work/work1.jpg" data-fancybox="gallery">
                                        <Image src="/work/work1.jpg" alt="work-1" width={952} height={618} className='w-100 object-fit-cover' />
                                    </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <a href="/work/work2.jpg" data-fancybox="gallery">
                                        <Image src="/work/work2.jpg" alt="work-2" width={952} height={618} className='w-100 object-fit-cover' />
                                    </a>
                            </SwiperSlide>
                            <SwiperSlide>
                                    <a href="/work/work3.jpg" data-fancybox="gallery">
                                        <Image src="/work/work3.jpg" alt="work-2" width={952} height={618} className='w-100 object-fit-cover' />
                                    </a>
                            </SwiperSlide>
                    
                        </Swiper>
                    </Fancybox>
                </div>
                <div className="swiper-pagination-custom mt-40"></div>
            </div>
            <div className="row justify-content-between row-gap-20 mb-40 mb-lg-80">
                <div className="col-md-6">
                    <div className="m-20 m-lg-40">
                        <div className="separator mt-10 mb-20 mx-auto mx-lg-0"></div>
                        <div className="fw-bold fs-32 fs-lg-45 lh-48 lh-lg-54 text-center text-lg-start">
                            we create <br />
                            the best projects<br />
                            for the best<br />
                            companies!
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className="separator mt-10 mb-20 mx-auto mx-lg-0"></div>
                    <p className="fs-lg-18 mb-30">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <p className="fs-lg-18 mb-30">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                    </p>
                    <p className="fs-lg-18 mb-30">
                        Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                    </p>
                    <Social theme="dark" />
                </div>
            </div>
        </div>
    );
}

export default WorkContent;