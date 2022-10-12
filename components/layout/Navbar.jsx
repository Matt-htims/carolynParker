import { useState, useEffect } from 'react';
import Router from 'next/router';
import Link from 'next/link';

export default function Navbar() {
	const [open, setOpen] = useState(false);

	const items = [
		{ url: '/what-we-do', title: 'What we do', id: '12fj32lofkj' },
		{ url: '/projects', title: 'Projects', id: 'lskafj938' },
		{ url: '/about', title: 'About', id: 'j23f028jf' },
		{ url: '/contact', title: 'Contact', id: 'lskdfj093' },
	];
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
		<div className="sticky top-0 w-full">
			<nav className="z-50 relative">
				<div>
					<Link href="/" passHref={true}>
						<a>brand</a>
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
					<div>
						{items.map((item) => (
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
		</div>
	);
}
