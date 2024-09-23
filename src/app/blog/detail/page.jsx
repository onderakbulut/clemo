import Image from "next/image";
import Social from '@/components/social/social';
import Related from '@/components/related/related';
function BlogDetail() {
    return ( 
        <div>
            <div className="container pt-40 pt-lg-85 pb-lg-105">
                <div className="mb-60">
                    <div className='text-center fs-42 fs-lg-67 fw-bold'>how to make a good design?</div>
                    <p className="text-center my-18 fs-20 fw-light">16 november 2015</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <Image src="/images/blog-banner.jpg" width={800} height={457} alt="" className="w-100 mb-80" />
                        
                        <div className="separator mt-10 mb-20 mx-auto mx-lg-0" />
                        <div className="fs-lg-18 fw-light">
                            <p className="mb-30">
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, 
                                totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                            </p>
                            <p className="mb-30">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                            </p>
                            <p className="mb-40">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>

                            <div className="fw-bold fs-20 fs-lg-54 mb-20">sketching and conceptualising</div>
                            <p className="mb-30">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>
                            <p className="mb-30">
                                Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                            </p>
                            <p className="mb-30">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                            </p>
                            <p className="mb-30">
                                Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                            </p>                    
                        
                        </div>
                        <Social theme="dark" />
                    </div>
                </div>
            </div>
            <Related />
        </div>
     );
}

export default BlogDetail;