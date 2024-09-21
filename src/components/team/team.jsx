"use client";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './index.css';
import Image from "next/image";

function Team() {
    const swiperOption = {
        modules: [Pagination, Navigation],
        loop: true,
        spaceBetween: 0,
        navigation: true,
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
    return ( 
        <div className="bg-peach-100 pt-85 pb-105">
            <div className="container text-center">
                <div className='fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>best team</div>
                <div className="row justify-content-center">
                    <div className="col-lg-11">
                        <Swiper {...swiperOption} className="team-slider">
                            <SwiperSlide>
                                <div>
                                    <Image src="/team/team1.jpg" width={168} height={168} alt="" className="team-img" />
                                    <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">paul hall</div>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>art director</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <Image src="/team/team2.jpg" width={168} height={168} alt="" className="team-img" />
                                    <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">joshua spencer</div>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>founder</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <Image src="/team/team3.jpg" width={168} height={168} alt="" className="team-img" />
                                    <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">diane lewis</div>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>artist, designer</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <Image src="/team/team3.jpg" width={168} height={168} alt="" className="team-img" />
                                    <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">diane lewis</div>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>artist, designer</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <Image src="/team/team3.jpg" width={168} height={168} alt="" className="team-img" />
                                    <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">diane lewis</div>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>artist, designer</p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div>
                                    <Image src="/team/team3.jpg" width={168} height={168} alt="" className="team-img" />
                                    <div className="fs-32 fs-lg-45 fw-bold lh-lg-45">diane lewis</div>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>artist, designer</p>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Team;