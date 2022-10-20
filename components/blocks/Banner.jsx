export default function Banner({ content }) {
	const colour = content.backgroundColour;
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
			<p>{content.text}</p>
		</div>
	);
}
