import CustomImage from '../CustomImage';

export default function PageIntro({ content }) {
	console.log(content);
	return (
		<div className="h-screen">
			<CustomImage content={content.image} layout="fill" objectFit="cover" />
		</div>
	);
}
