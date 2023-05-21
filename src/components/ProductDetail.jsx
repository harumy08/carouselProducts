import React from 'react';
import '@styles/ProductDetail.scss';

import demo from '@images/itemOne.jpg';

const ProductDetail = () => {
	return (
		<>
			<div className="col-md-3">
				<div className="p-3">
					<div className="card item">
						<img src={demo} className="card-img-top" alt="..." />
  							<div className="card-body item__meta">
    							<h5 className="title card-title">Assess Skirt // Black / Ivory - COMING SOON</h5>
    							<p className="text card-text">$267.00</p>
    							<a href="#" className="button btn btn-primary">Añadir a la cesta</a>
  							</div>
					</div>
				</div>
			</div>

<div className="col-md-3">
<div className="p-3">
	<div className="card item">
		<img src={demo} className="card-img-top" alt="..." />
			  <div className="card-body item__meta">
				<h5 className="title card-title">Assess Skirt // Black / Ivory - COMING SOON</h5>
				<p className="text card-text">$267.00</p>
				<a href="#" className="button btn btn-primary">Añadir a la cesta</a>
			  </div>
	</div>
</div>
</div>
<div className="col-md-3">
<div className="p-3">
	<div className="card item">
		<img src={demo} className="card-img-top" alt="..." />
			  <div className="card-body item__meta">
				<h5 className="title card-title">Assess Skirt // Black / Ivory - COMING SOON</h5>
				<p className="text card-text">$267.00</p>
				<a href="#" className="button btn btn-primary">Añadir a la cesta</a>
			  </div>
	</div>
</div>
</div>
<div className="col-md-3">
<div className="p-3">
	<div className="card item">
		<img src={demo} className="card-img-top" alt="..." />
			  <div className="card-body item__meta">
				<h5 className="title card-title">Assess Skirt // Black / Ivory - COMING SOON</h5>
				<p className="text card-text">$267.00</p>
				<a href="#" className="button btn btn-primary">Añadir a la cesta</a>
			  </div>
	</div>
</div>
</div>
</>
			
	);
}

export default ProductDetail;