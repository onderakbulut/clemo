import Service from '@/components/service/service'
function Services() {
    return (  
        <div className='pt-40 pt-lg-85 pb-lg-25 bg-white-50'>
            <div className='text-center fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>what we do?</div>
            <Service subTitle="creative" title="kitchen" image="service1.png" reverse/>
            <Service subTitle="art" title="installation" image="service2.png" />
            <Service subTitle="print" title="design" image="service3.jpg" reverse/>
        </div>
    );
}

export default Services;