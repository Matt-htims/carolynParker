import Image from 'next/image';
import ReactMarkdown from 'react-markdown';

export default function ProjectDisplay({ content }) {
	console.log(content);
	if (content.displayType == 'fullscreenImage') {
		return (
			<div>
				<Image alt="" />
			</div>
		);
	} else if (content.displayType == 'textFirst || imageFirst') {
		return (
			<div>
				<p>hello</p>
			</div>
		);
	}
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
