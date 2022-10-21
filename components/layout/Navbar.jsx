import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// State
import { useGlobalStore } from '../../zustand-state/globalState';

export default function Navbar() {
	const navbarData = useGlobalStore((state) => state.navbar);

	const brand = navbarData.brand.data.attributes;

	const [open, setOpen] = useState(false);

	function handleTray() {
		setOpen(!open);
	}
	function closeTray() {
		setOpen(false);
	}

	// useEffect(() => {
	// 	if (open) {
	// 		document.body.style.overflow = 'hidden';
	// 	} else {
	// 		document.body.style.overflow = 'unset';
	// 	}
	// });

	return (
		<header className="sticky top-0 w-full z-50">
			<nav className="z-50 absolute w-full">
				<div className="flex justify-center items-center py-5">
					<Link href="/" passHref={true} className="">
						<a onClick={closeTray}>
							<Image
								src={brand.url}
								height={66}
								width={53}
								alt={brand.alternativeText}
							/>
						</a>
					</Link>
					<div
						onClick={handleTray}
						className="cursor-pointer text-white absolute right-0 mr-11"
					>
						<div
							className={`w-9 h-0.5 bg-black mb-3 origin-top-left transition duration-300 ${
								open ? 'mb-[22px] rotate-45' : ''
							}`}
						></div>
						<div
							className={`w-9 h-0.5 bg-black origin-bottom-left transition duration-300 ${
								open ? '-rotate-45' : ''
							}`}
						></div>
					</div>
				</div>
			</nav>
			<div
				onClick={handleTray}
				className={`w-screen h-screen bg-main flex justify-center absolute top-0 z-40 overflow-hidden ${
					!open ? 'hidden' : ''
				}`}
			>
				{open ? (
					<div className="flex flex-col justify-center items-center space-y-7">
						{navbarData.navLinks.map((item) => (
							<Link href={item.url} key={item.id}>
								<a
									onClick={handleTray}
									className="text-white text-5xl transition hover:text-black font-main"
								>
									{item.title}
								</a>
							</Link>
						))}
					</div>
				) : (
					''
				)}
			</div>
		</header>
	);
}
