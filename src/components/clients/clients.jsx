'use client';
import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import './index.css';
import Image from 'next/image';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';

function Clients() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    const swiperOption = {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1,
        thumbs: { swiper: thumbsSwiper },
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
    };
    const swiperOption2 = {
        loop: true,
        spaceBetween: 20,
        modules: [FreeMode, Navigation, Thumbs],
        onSwiper: setThumbsSwiper,
        breakpoints: {
            0: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            768: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
            992: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            },
        },
    };
    return (  
        <section className="pt-85 pb-105 clients">
            <div className="container">
                <div className='fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60 text-center'>clients say’s</div>
                <div className="row justify-content-center mb-20">
                    <div className="col-lg-11">
                        <Swiper {...swiperOption} className="client-slider">
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-lg-6 text-lg-end pe-lg-62">
                                        <div className="fs-45 fw-bold">frank sims</div>
                                        <div className="separator ms-lg-auto mt-10 mb-20"></div>
                                        <p className="fade-left">photographer</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="fs-18 fw-light">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-lg-6 text-lg-end pe-lg-62">
                                        <div className="fs-45 fw-bold">frank sims</div>
                                        <div className="separator ms-lg-auto mt-10 mb-20"></div>
                                        <p className="fade-left">photographer</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="fs-18 fw-light">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-lg-6 text-lg-end pe-lg-62">
                                        <div className="fs-45 fw-bold">frank sims</div>
                                        <div className="separator ms-lg-auto mt-10 mb-20"></div>
                                        <p className="fade-left">photographer</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="fs-18 fw-light">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="row">
                                    <div className="col-lg-6 text-lg-end pe-lg-62">
                                        <div className="fs-45 fw-bold">frank sims</div>
                                        <div className="separator ms-lg-auto mt-10 mb-20"></div>
                                        <p className="fade-left">photographer</p>
                                    </div>
                                    <div className="col-lg-6">
                                        <p className="fs-18 fw-light">
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            
                        </Swiper>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <Swiper {...swiperOption2}>
                            <SwiperSlide>
                                <Image src="/images/placeholder.png" alt="" width={266} height={140} className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/images/placeholder.png" alt="" width={266} height={140} className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/images/placeholder.png" alt="" width={266} height={140} className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Image src="/images/placeholder.png" alt="" width={266} height={140} className="img-fluid" />
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
                <div className="swiper-pagination-custom mt-40"></div>
            </div>
        </section>
    );
}

export default Clients;