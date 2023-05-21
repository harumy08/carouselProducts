import  { React } from 'react';
import ProductDetail from '@components/ProductDetail';

import Slider from 'react-slick'

import useGetProducts from '@hooks/useGetProducts';

import '@styles/Carousel.scss';
import '@styles/Controls.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const Carousel = () => {
    const products = useGetProducts(API);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
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
        </div>
        </>
	);
}

export default Carousel;