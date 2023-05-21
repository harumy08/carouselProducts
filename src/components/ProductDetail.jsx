import React from 'react';
import '@styles/ProductDetail.scss';
import '@styles/Responsive.scss';

const ProductDetail = ({ product }) => {
	return (
		<>
			<div className="p-3">
				<div className="ProductItem card item">
					<img src={product.images[0]} className="card-img-top" alt={product.title} />
					<div className="card-body item__meta">
						<h5 className="title card-title">{product.title}</h5>
						<p className="text card-text">${product.price}</p>
							<a href="#" className="button btn btn-primary">Agregar</a>
					</div>
				</div>
			</div>
		</>
			
	);
}

export default ProductDetail;