"use client";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import './index.css';

function Hero() {
    const swiperOption = {
        modules: [Pagination],
        loop: true,
        spaceBetween: 0,
        slidesPerView: 1,
        pagination: { clickable: true },
    };
    return (
        <section className="container">
            <Swiper {...swiperOption} className="hero-slider">
                <SwiperSlide>
                    <div className="position-relative">
                        <div className="position-absolute start-0 top-0 end-0 bottom-0 z-n1">
                            <img
                                className="w-100 h-100 object-fit-cover"
                                src="/images/slide.jpg"
                                alt="hero-bg"
                            />
                        </div>
                        <div className="container position-relative z-1">
                            <div className="row justify-content-center py-132 text-center">
                                <div className="col-md-8 col-lg-6">
                                    <div className="">
                                        <div className="fw-bold fs-48 fs-lg-54">
                                            we are clemo.
                                        </div>
                                        <div className="separator mx-auto my-20"></div>
                                        <p className="fs-24 fs-lg-27 mb-25">
                                            professionals <br />
                                            in the creative industries
                                        </p>
                                        <a href="/" className="btn btn-dark">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="position-relative">
                        <div className="position-absolute start-0 top-0 end-0 bottom-0 z-n1">
                            <img
                                className="w-100 h-100 object-fit-cover"
                                src="/images/slide.jpg"
                                alt="hero-bg"
                            />
                        </div>
                        <div className="container position-relative z-1">
                            <div className="row justify-content-center py-132 text-center">
                                <div className="col-md-8 col-lg-6">
                                    <div className="">
                                        <div className="fw-bold fs-48 fs-lg-54">
                                            we are clemo.
                                        </div>
                                        <div className="separator mx-auto my-20"></div>
                                        <p className="fs-24 fs-lg-27 mb-25">
                                            professionals <br />
                                            in the creative industries
                                        </p>
                                        <a href="/" className="btn btn-dark">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>
        </section>
    );
}

export default Hero;