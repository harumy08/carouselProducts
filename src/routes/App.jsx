import React from 'react';
import { BrowserRouter, Routes , Route } from 'react-router-dom';
import Home from '@pages/Home';
import Layout from '@containers/Layout';
import '@styles/global.scss';
//Se creo este archivo para tener el router de React,
//Los componentes los contiene el Layout 
//Y llamo a mis estilos generales
const App = () => {
	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={<Home />} />
				</Routes>
			</Layout>
		</BrowserRouter>
	);
}

export default App;