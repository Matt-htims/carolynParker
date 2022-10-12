import { useEffect } from 'react';
import { useGlobalStore } from '../zustand-state/globalState';

export const useGlobalUpdater = (globalData) => {
	const updateNavbar = useGlobalStore((state) => state.updateNavbar);
	const updateFooter = useGlobalStore((state) => state.updateFooter);

	useEffect(() => {
		updateNavbar(globalData.navBar);
		updateFooter(globalData.footer);
	});
};
