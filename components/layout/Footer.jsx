import React from 'react';

// State
import { useGlobalStore } from '../../zustand-state/globalState';

export default function Footer() {
	const footerData = useGlobalStore((state) => state.footer);
	return (
		<footer>
			<div></div>
		</footer>
	);
}
