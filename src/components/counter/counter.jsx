'use client'
import { useState, useRef } from 'react';
import CountUp from 'react-countup';
import { useInView } from "framer-motion"

function Counter() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return ( 
        <div className="counter container py-40 pt-lg-80 pb-lg-110">
            <div className="row row-cols-1 row-cols-lg-3 text-center row-gap-20">
                <div className="col">
                    <div className="counter-item">
                        <div className="counter-item-number fw-bold fs-32 fs-lg-45">
                            <div ref={ref}>
                                {(isInView) ? <CountUp start={0} end={3800} duration={2.5} /> : null}
                            </div>
                        </div>
                        <div className="separator mt-10 mb-20 mx-auto"></div>
                        <div className="counter-item-text fs-18 text-brown-50">
                            project complete
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="counter-item">
                        <div className="counter-item-number fw-bold fs-32 fs-lg-45">
                            <div ref={ref}>
                                {(isInView) ? <CountUp start={0} end={4510} duration={2.5} separator="" /> : null}
                            </div>
                        </div>
                        <div className="separator mt-10 mb-20 mx-auto"></div>
                        <div className="counter-item-text fs-18 text-brown-50">
                            happy clients
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="counter-item">
                        <div className="counter-item-number fw-bold fs-32 fs-lg-45">
                            <div ref={ref}>
                                {(isInView) ? <CountUp start={0} end={2800} duration={2.5} /> : null}
                            </div>
                        </div>
                        <div className="separator mt-10 mb-20 mx-auto"></div>
                        <div className="counter-item-text fs-18 text-brown-50">
                            cups of milk
                        </div>
                    </div>
                </div>

            </div>
        </div>
     );
}

export default Counter;