import create from 'zustand';
import { devtools } from 'zustand/middleware';

export const useGlobalStore = create(
	devtools((set) => ({
		navbar: {
			brand: {
				data: {
					attributes: {
						alternativeText: '',
						height: '',
						placeholder: '',
						url: '',
						width: '',
					},
				},
			},
			navLinks: [],
		},
		footer: {
			icon: {
				data: {
					attributes: {
						alternativeText: '',
						height: '',
						placeholder: '',
						url: '',
						width: '',
					},
				},
			},
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
