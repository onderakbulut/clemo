'use client';
import { useEffect, useRef } from 'react';
import Masonry from 'masonry-layout';
import imagesLoaded from 'imagesloaded';
import styles from './styles.module.css';
import Image from 'next/image';

function Works({ title = "our best work", category }) {
    const masonryRef = useRef(null);

    useEffect(() => {
        let elem = masonryRef.current;
        var msnry = new Masonry(elem);

        var imgLoad = new imagesLoaded(elem);

        imgLoad.on('progress', () => {
            msnry.layout();
        });
    }, []);

    const allWorks = [
        { id: 1, src: "/portfolio/pf1.png", width: 364, height: 364, title: "golfino awards", category: "print design" },
        { id: 2, src: "/portfolio/pf2.png", width: 364, height: 590, title: "golfino awards", category: "print design" },
        { id: 3, src: "/portfolio/pf3.png", width: 364, height: 364, title: "golfino awards", category: "print design" },
        { id: 4, src: "/portfolio/pf4.png", width: 364, height: 590, title: "golfino awards", category: "print design" },
        { id: 5, src: "/portfolio/pf6.png", width: 364, height: 590, title: "golfino awards", category: "print design" },
        { id: 6, src: "/portfolio/pf5.png", width: 364, height: 364, title: "golfino awards", category: "print design" }, 
        { id: 7, src: "/portfolio/pf1.png", width: 364, height: 364, title: "golfino awards", category: "print design" },
        { id: 8, src: "/portfolio/pf2.png", width: 364, height: 590, title: "golfino awards", category: "print design" },
        { id: 9, src: "/portfolio/pf3.png", width: 364, height: 364, title: "golfino awards", category: "print design" },
        { id: 10, src: "/portfolio/pf4.png", width: 364, height: 590, title: "golfino awards", category: "print design" },
        { id: 11, src: "/portfolio/pf6.png", width: 364, height: 590, title: "golfino awards", category: "print design" },
        { id: 12, src: "/portfolio/pf5.png", width: 364, height: 364, title: "golfino awards", category: "print design" },
        
    ];

    // Gösterilecek öğeleri belirle
    const worksToShow = category === 'all' ? allWorks : allWorks.slice(0, 6);

    return (  
        <div className='pt-40 pt-lg-85 pb-40 pb-lg-100 text-center'>
            <div className='fs-42 fs-lg-67 fw-bold mb-40 mb-lg-60'>{title}</div>
            <div className="container">
                <div className="row row-cols-lg-3 text-center" ref={masonryRef}>
                    {worksToShow.map((work) => (
                        <div key={work.id} className="col">
                            <div className={styles['work-item']}>
                                <Image src={work.src} width={work.width} height={work.height} alt="" className="img-fluid" />
                                <div className={styles['work-overlay']}>
                                    <h4 className='fs-32 fs-lg-45 fw-bold lh-lg-45'>{work.title}</h4>
                                    <div className="separator mx-auto my-20"></div>
                                    <p>{work.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <a href="/" className="btn btn-dark mt-20">
                    Learn More
                </a>
            </div>
        </div>
    );
}

export default Works;