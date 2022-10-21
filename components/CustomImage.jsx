// Layout options
// - intrinsic		(Scale down to fit width of conteint, up to image size)
// - fixed			(Sized to 'width' and 'height' exactly)
// - responsive 	(Scale to fit width of container)
// - fill 			(Grow in both X and Y axes to fill container)

// objectFit options
// - fill
// - contain
// - cover
// - none
// - scale-down

import Image from 'next/image';

export default function CustomImage({
	content,
	placeholder = true,
	width,
	height,
	layout,
	objectFit,
}) {
	return (
		<Image
			placeholder={placeholder ? 'blur' : 'empty'}
			blurDataURL={content.data.attributes.placeholder}
			src={content.data.attributes.url}
			alt={content.data.attributes.alternativeText}
			width={width ? width : content.data.attributes.width}
			height={height ? height : content.data.attributes.height}
			layout={layout ? layout : 'intrinsic'}
			objectFit={layout == 'fill' ? objectFit : ''}
		/>
	);
}
