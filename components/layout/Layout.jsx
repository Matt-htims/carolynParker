import React from 'react';
import Footer from './Footer';

// Components
import Navbar from './Navbar';

export default function Layout({ children }) {
	return (
		<div>
			<Navbar />
			<main>{children}</main>
			<Footer />
		</div>
	);
}
