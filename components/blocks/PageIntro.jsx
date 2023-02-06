import CustomImage from '../CustomImage';

export default function PageIntro({ content }) {
	return (
		<div className="h-screen relative">
			<CustomImage
				content={content.image}
				layout="fill"
				objectFit="cover"
				// priority={true}
			/>
			<div
				className="w-full h-full absolute bg-black/10"
				aria-hidden="true"
			></div>
		</div>
	);
}
