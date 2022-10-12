import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGlobalStore = create(
	devtools((set) => ({
		navbar: { brand: {}, navLinks: [] },
		footer: {
			icon: '',
			addressLine1: '',
			addressLine2: '',
			number: '',
			email: '',
			copyrightText: '',
			socialMedia: [],
		},
		updateNavbar: (data) => set((state) => ({ ...state, navbar: data })),
		updateFooter: (data) => set((state) => ({ ...state, footer: data })),
	}))
);
