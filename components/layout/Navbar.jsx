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

	useEffect(() => {
		if (open) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}
	});

	return (
		<header className="sticky top-0 w-full">
			<nav className="z-50 relative">
				<div className="flex justify-between items-center py-5 px-11">
					<div></div>
					<Link href="/" passHref={true}>
						<a onClick={closeTray}>
							<Image
								src={brand.url}
								height={66}
								width={53}
								alt={brand.alternativeText}
							/>
						</a>
					</Link>
					<div onClick={handleTray} className="cursor-pointer text-white">
						Hammy
					</div>
				</div>
			</nav>
			<div
				onClick={handleTray}
				className={`w-screen h-screen bg-black flex justify-center absolute top-0 z-40 overflow-hidden ${
					!open ? 'hidden' : ''
				}`}
			>
				{open ? (
					<div className="flex flex-col justify-center items-center">
						{navbarData.navLinks.map((item) => (
							<Link href={item.url} key={item.id}>
								<a onClick={handleTray} className="text-white">
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
