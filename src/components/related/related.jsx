"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';

function Related() {
    const swiperOption = {
        modules: [Pagination, Navigation],
        loop: true,
        spaceBetween: 0,
        navigation: false,
        breakpoints: {
            0: {
                slidesPerView: 1,
                slidesPerGroup: 1,
            },
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            992: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
        pagination: { clickable: true },
    };

    const relatedWorks = [
        { name: "letters art project", role: "print design" },
        { name: "golfino awards 2015", role: "print design" },
        { name: "the foodee", role: "creative kitchen" },
        { name: "letters art project", role: "print design" },
        { name: "golfino awards 2015", role: "print design" },
        { name: "the foodee", role: "creative kitchen" },
        { name: "letters art project", role: "print design" },
        { name: "golfino awards 2015", role: "print design" },
        { name: "the foodee", role: "creative kitchen" },
    ];

    return ( 
        <div className="bg-peach-100 pt-85 pb-70">
            <div className="container text-center">
                <div className='fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>related works</div>
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <Swiper {...swiperOption} className="related-slider">
                            {relatedWorks.map((data, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">
                                            <a href="" className="text-dark">
                                                {data.name}
                                            </a>
                                        </div>
                                        <div className="separator mx-auto my-20"></div>
                                        <p>{data.role}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Related;