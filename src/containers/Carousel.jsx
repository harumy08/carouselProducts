import  { React } from 'react';
import ProductDetail from '@components/ProductDetail';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/Carousel.scss';

const API = 'http://api.escuelajs.co/api/v1/products';

const Carousel = () => {
    const products = useGetProducts(API);
    
    return (
        <div className="row align-items-start itemContainer">
            <h2 className="section-header">Imprescindibles</h2>
            <h3 className="section-header__description">Algunas de nuestras selecciones favoritas de esta semana.</h3>
                {products.map(product => (
                    <ProductDetail product={product} key={product.id} />
                ))}
        </div>
	);
}

export default Carousel;