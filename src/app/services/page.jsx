import Service from '@/components/service/service'

function Services() {
    return ( 
        <div className='pt-40 pt-lg-85 pb-lg-25'>
            <div className='text-center fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>services</div>
            <Service subTitle="creative" title="kitchen" image="service4.jpg" link="/services/detail"/>
            <Service subTitle="art" title="installation" image="service5.jpg" reverse link="/services/detail"/>
            <Service subTitle="print" title="design" image="service6.jpg" link="/services/detail"/>
        </div>
     );
}

export default Services;