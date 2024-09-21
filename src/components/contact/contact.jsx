import { FaMapMarkerAlt, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import Social from "@/components/social/social";
import './index.css';

function Contact({theme}) {
    return ( 
        <section className={`contact py-85 ${theme === 'light' ? '-light' : ''}`}>
            <div className={`container position-relative z-2 mb-100 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                <div className='fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60 text-center'>get in touch</div>
                <div className="row pt-lg-65 row-gap-40 gx-lg-40">
                    <div className="col-lg-6">
                        <ul className="list-unstyled">
                            <li className="d-flex column-gap-20 mb-40">
                                <div className="icon">
                                    <FaMapMarkerAlt />
                                </div>
                                <address className="fs-18 fs-lg-20 fw-light">
                                    23 Mulholland Drive, Suite 721. Los Angeles 10010 100 S. Main Street. Los Angeles 90012
                                </address>
                            </li>
                            <li className="d-flex column-gap-20 mb-40">
                                <div className="icon">
                                    <FaMobileAlt />
                                </div>
                                <div className="fs-18 fs-lg-20 fw-light">
                                    +1-670-567-5590
                                </div>
                            </li>
                            <li className="d-flex column-gap-20 mb-40">
                                <div className="icon">
                                    <FaRegEnvelope />
                                </div>
                                <div className="fs-18 fs-lg-20 fw-light">
                                    hello@clemocreative.com
                                </div>
                            </li>
                        </ul>
                        <Social theme={theme === 'light' ? 'dark' : 'light'} />
                    </div>
                    <div className="col-lg-6">
                        <form action="">
                            <div className="mb-20">
                                <input type="text" className="form-control bg-transparent border-0 border-bottom border-brown px-0" placeholder="Name" />
                            </div>
                            <div className="mb-20">
                                <input type="email" className="form-control bg-transparent border-0 border-bottom border-brown px-0" placeholder="Email" />
                            </div>
                            <div className="mb-20">
                                <textarea className="form-control bg-transparent border-0 border-bottom border-brown px-0" placeholder="Message" rows="5"></textarea>
                            </div>
                            <div className="pt-40">
                                <button className="btn btn-light px-40 px-lg-50">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;