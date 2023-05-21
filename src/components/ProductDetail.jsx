import React from 'react';
import '@styles/ProductDetail.scss';//Se agregan hojas de estilos para el detalle de producto
import '@styles/Responsive.scss';//Se agregan hojas de estilos para el detalle de producto en versión mobile

const ProductDetail = ({ product }) => {//Obtengo la lista de productos desde el componente padre e imprimo los datos que necesito
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