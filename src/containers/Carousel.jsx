import  React, { useState } from 'react';
import ProductDetail from '@components/ProductDetail';

import Slider from 'react-slick'

import useGetProducts from '@hooks/useGetProducts';

import '@styles/Carousel.scss';
import '@styles/Controls.scss';
import '@styles/ProgressBar.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const Carousel = () => {
    const products = useGetProducts(API);

    const [progress, setProgress] = useState(0);
    const [slideToShow, setslideToShow] = useState(1);

    const settings = {
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        swipeToSlide: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: true,
        scrollBar: true,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                }
            }
        ],

            afterChange: current =>{
                setProgress(100 / (10 - slideToShow + 1) * (current + 1));
                console.log(progress);
            /*return () => {
                clearInterval(timer);
            };*/
        }

    };


    return (
        <>
        <div className="row align-items-start itemContainer">
            <h2 className="section-header">Imprescindibles</h2>
            <h3 className="section-header__description">Algunas de nuestras selecciones favoritas de esta semana.</h3>
            <Slider {...settings}>
                {products.map(product => (
                    <ProductDetail product={product} key={product.id} />
                ))}
            </Slider>
            <div className="progress-bar__container">
                <div className="progress-bar" style={{width: `${progress}%`}}></div>  
            </div>
        </div>
        </>
	);
}

export default Carousel;