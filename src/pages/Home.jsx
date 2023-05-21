import React from 'react';
import Carousel from '@containers/Carousel';
import Section from '@components/Section';
//Mi página principal que contiene mi carrusel y section de presentación
const Home = () => {
	return (
		<>
			<Section />
			<Carousel />
		</>
	);
}

export default Home;