import Image from 'next/image';
import React from 'react';

export default function ProjectDisplay({ content }) {
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
		<div>
			<p>Project</p>
		</div>
	);
}
