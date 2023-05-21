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