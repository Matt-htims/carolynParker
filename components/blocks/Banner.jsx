export default function Banner({ content }) {
	const colour = content.backgroundColour;
	console.log(content);
	return (
		<div
			className={`${
				colour == 'main'
					? 'bg-main'
					: colour == 'secondary'
					? 'bg-secondary'
					: colour == 'tertiary'
					? 'bg-tertiary'
					: 'bg-cta'
			}`}
		>
			<div className="max-w-screen-2xl m-auto px-11 py-20">
				<p className="text-2xl w-8/12 text-white">{content.text}</p>
			</div>
		</div>
	);
}
