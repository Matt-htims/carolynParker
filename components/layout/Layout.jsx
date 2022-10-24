import React from 'react';
import Footer from './Footer';

// Components
import Navbar from './Navbar';

export default function Layout({ children, globalData }) {
	return (
		<div>
			<Navbar navbarData={globalData.navBar} />
			<main>{children}</main>
			<Footer footerData={globalData.footer} />
		</div>
	);
}
