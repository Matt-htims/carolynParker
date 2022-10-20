export default function Padding({ content }) {
	if (content.paddingSize == 'small') {
		return <div className="py-2"></div>;
	} else if (content.paddingSize == 'medium') {
		return <div className="py-4"></div>;
	} else if (content.paddingSize == 'large') {
		return <div className="py-10"></div>;
	} else if (content.paddingSize == 'xlarge') {
		return <div className="py-16"></div>;
	} else if (content.paddingSize == 'xxlarge') {
		return <div className="py-20"></div>;
	} else {
		return '';
	}
}
