import Counter from "@/components/counter/counter";
import Team from "@/components/team/team";
import InstaFeed from "@/components/insta-feed/insta-feed";
import Contact from "@/components/contact/contact";

function About() {
    return (  
        <div className='pt-20 pt-lg-45'>
            <div className='text-center fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>about us</div>
            <div className="container">
                <div className={`row justify-content-between row-gap-20 mb-40 mb-lg-80`}>
                    <div className="col-md-6">
                        <img src='./services/service3.jpg' alt="" className="img-fluid" />
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
                        
                        <a href="/" className="btn btn-light">
                            get in touch
                        </a>

                    </div>
                </div>
            </div>
            <hr className="border-white-100 opacity-100" />
            <Counter />
            <Team />
            <InstaFeed />
            <Contact />
        </div>
    );
}

export default About;