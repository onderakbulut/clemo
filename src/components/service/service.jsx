import Image from "next/image";
import Link from "next/link";

function Service(props) {    
    const link = props.link || "/";
    return (
        <div className="container">
            <div className={`row justify-content-between row-gap-20 mb-40 mb-lg-80 ${props.reverse ? 'flex-row-reverse':''}`}>
                <div className="col-md-6">
                    <Link href={link}>
                        <Image src={`/services/${props.image}`} width={560} height={560} alt="" className="img-fluid" />
                    </Link>
                </div>
                <div className="col-lg-5">
                    <div className={`d-flex ${props.title_reverse ? 'flex-column-reverse' : 'flex-column'}`}>
                        <div className={`fw-light text-center text-lg-start ${props.title_reverse ? 'fs-lg-20' : 'fs-30 fs-lg-33'}`}>{props.subTitle}</div>
                        <div className="fw-bold fs-48 fs-lg-54 text-center text-lg-start">{props.title}</div>
                    </div>
                    <div className="separator mt-10 mb-20 mx-auto mx-lg-0"></div>
                    <p className="fs-lg-18 mb-30">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.  
                    </p>
                    <p className="fs-lg-18 mb-30">
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, 
                        sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                    </p>
                    <Link href={`${link}`} className="btn btn-light">
                        Learn More
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default Service;