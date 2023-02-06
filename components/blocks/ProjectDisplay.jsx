import ReactMarkdown from 'react-markdown';
import CustomImage from '../CustomImage';

export default function ProjectDisplay({ content }) {

	if (content.displayType == 'fullscreenImageTextLeft' || content.displayType == 'fullscreenImageTextRight') {
		return (
			<div className="h-[1000px] relative">
				<CustomImage
					content={content.project.data.attributes.gallery.data[0]}
					fromGallery={true}
					layout="fill"
					objectFit="cover"
				/>
				<div
					className={`absolute transform rotate-180 w-16 h-full bg-secondary/60 sideways-text flex items-center ${
						content.displayType == 'fullscreenImageTextRight' ? 'right-0' : ''
					}`}
				>
					<div className="flex items-start text-white pt-6 space-y-4">
						<h3>{content.project.data.attributes.location}</h3>
						<p>{content.project.data.attributes.displayTitle}</p>
					</div>
				</div>
				<div
					className={`absolute w-4 h-full bg-main/20 ${
						content.displayType == 'fullscreenImageTextRight'
							? 'right-16'
							: 'left-16'
					}`}
				></div>
			</div>
		);
	}
	else if (content.displayType == 'textFirst' || content.displayType == 'imageFirst') {
		return (
			<div>
				<p>hello</p>
			</div>
		);}
	return (
		<div className="max-w-screen-2xl m-auto px-11 space-y-12">
			<div className="w-max space-y-3">
				<h3 className="as-h1">{content.project.data.attributes.location}</h3>
				<p className="text-3xl text-secondary text-right mr-8 ">
					{content.project.data.attributes.displayTitle}
				</p>
			</div>
			<ReactMarkdown className="space-y-6 w-custom">
				{content.project.data.attributes.description}
			</ReactMarkdown>
		</div>
	);
}
