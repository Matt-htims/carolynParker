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
	fromGallery = false,
	placeholder = true,
	width,
	height,
	layout,
	objectFit,
	priority,
}) {
	let image = {};
	if (fromGallery) {
		image = content.attributes;
	} else {
		image = content.data.attributes;
	}

	if (layout == 'fill') {
		return (
			<Image
				placeholder={placeholder && image.placeholder ? 'blur' : 'empty'}
				blurDataURL={image.placeholder}
				src={image.url}
				alt={image.alternativeText}
				layout={layout ? layout : 'intrinsic'}
				objectFit={layout == 'fill' ? objectFit : ''}
				priority={priority ? true : false}
				quality={100}
			/>
		);
	}
	return (
		<Image
			placeholder={placeholder && image.placeholder ? 'blur' : 'empty'}
			blurDataURL={image.placeholder}
			src={image.url}
			alt={image.alternativeText}
			width={width ? width : image.width}
			height={height ? height : image.height}
			layout={layout ? layout : 'intrinsic'}
			objectFit={layout == 'fill' ? objectFit : ''}
			priority={priority ? true : false}
			quality={100}
		/>
	);
}
