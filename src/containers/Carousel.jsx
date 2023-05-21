import  { React } from 'react';
import ProductDetail from '@components/ProductDetail';
import '@styles/Carousel.scss';

const Carousel = () => {
    return (
      <div className="row align-items-start itemContainer">
        <h2 className="section-header">Imprescindibles</h2>
        <h3 className="section-header__description">Algunas de nuestras selecciones favoritas de esta semana.</h3>
          <ProductDetail />
      </div>
	);
}

export default Carousel;