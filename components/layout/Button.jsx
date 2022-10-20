import Link from 'next/link';

export default function Button({ text, link, internal }) {
	if (!internal) {
		return (
			<a href={link}>
				<p>{text}</p>
				<div className="icon"></div>
			</a>
		);
	}
	return (
		<Link href={link} passHref={true}>
			<a>
				<p>{text}</p>
				<div className="icon"></div>
			</a>
		</Link>
	);
}
