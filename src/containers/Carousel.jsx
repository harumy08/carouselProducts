//En este archivo es donde envío el producto a mi componente padre, tambien configuro mi slider
import  React, { useState } from 'react';
import ProductDetail from '@components/ProductDetail';//Llamo a mi componente hijo

import Slider from 'react-slick' //Utilizo el plugin Slider de react-slick para configurar mi Slider

import useGetProducts from '@hooks/useGetProducts';//Se realizo un hook personalizado para consumir un rest api demo con productos

import '@styles/Carousel.scss';//Hojas de estilos que se usan en este componente
import '@styles/Controls.scss';
import '@styles/ProgressBar.scss';

const API = 'http://api.escuelajs.co/api/v1/products';//URL de RestApi Demo

const Carousel = () => {
    const products = useGetProducts(API);

    const [progress, setProgress] = useState(0);//Inicializo progress en valor inicial del estado en 0, esto me ayudara para despues hacer mi scroll
    const [slideToShow, setslideToShow] = useState(1);//Inicializo slideToShow en valor inicial del estado en 1, ya que me permite que mi scroll comience a contar por cada producto
    const settings = {
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
        }
    
    };
//Primero consumo las caracteristicas de mi Slider, despues utilizo .map para itinerar por mis elementos, los cuales comparto con mi componente
//hijo agrego mi progress bar, cuyo ancho lo obtengo por la funcion integrada en las características de mi Slider

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