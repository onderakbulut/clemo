function Event() {
    return ( 
        <div className="bg-black">
            <div className="container">
                <div className="row py-90 align-items-center row-gap-20">
                    <div className="col-md-8 text-white text-center text-md-start">
                        <span className="fs-30 fs-lg-33 fw-light">best price</span>
                        <div className="separator bg-white d-inline-block mx-50 my-10"></div>
                        <span className="fs-32 fs-lg-45 fw-bold">$ 999</span>
                        <span className="fs-30 fs-lg-33 fw-light text-gray-800 ms-20">/ event</span>
                    </div>
                    <div className="col-md-4 text-center text-md-end">
                        <a href="/" className="btn btn-light">get started</a>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Event;