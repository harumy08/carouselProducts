//Se creo un hook personalizado para consumir el servicio con axios,
//despues utilizarlo en el componente o componentes que lo requieran
//se limita que solo traiga 10 registros, ya que son los que se usa para este ejercicio

import { useEffect, useState } from "react";
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]);
    const limit = 10;

	useEffect(() => {
		async function check() {
            const response = await axios(API);
            setProducts(response.data.slice(0, limit));
		}

		check()
	}, []);

	return products;
};

export default useGetProducts;