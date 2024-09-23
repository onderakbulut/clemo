import Service from '@/components/service/service'

function Services() {
    return ( 
        <div className='pt-40 pt-lg-85 pb-lg-25'>
            <div className='text-center fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>blog</div>
            <ul className='list-unstyled d-flex justify-content-center column-gap-20 fs-18 fw-light mb-60'>
                <li><a href="" className='text-brown-50'>All</a></li>
                <li><a href="" className='text-brown-50'>creative kitchen</a></li>
                <li><a href="" className='text-brown-50'>art design</a></li>
                <li><a href="" className='text-brown-50'>life events </a></li>
            </ul>
            <Service subTitle="16 november 2015" title="kitchen" image="service1.png" title_reverse link="/blog/detail" />
            <Service subTitle="11 november 2015" title="installation" image="service2.png" reverse title_reverse link="/blog/detail"/>
            <Service subTitle="16 november 2015" title="design" image="service4.jpg" title_reverse link="/blog/detail"/>
            <Service subTitle="11 november 2015" title="installation" image="service5.jpg" reverse title_reverse link="/blog/detail"/>
        </div>
     );
}

export default Services;