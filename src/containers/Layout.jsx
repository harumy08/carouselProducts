import React from 'react';
import Header from '@components/Header';

//Cree un Layout general, pensando en una aplicaciñon, que despues puede contener mas elementos y esto evitar llamar constantemente
//componentes generales como Header o Footer

const Layout = ({ children }) => {
	return (
		<div className="Layout">
			<Header />
			{children}
		</div>
	);
}

export default Layout;