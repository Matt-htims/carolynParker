import CustomHead from './CustomHead';

// Components
import Banner from '../components/blocks/Banner';
import Padding from '../components/blocks/Padding';
import PageIntro from '../components/blocks/PageIntro';
import ProjectDisplay from '../components/blocks/ProjectDisplay';
import Testimonial from '../components/blocks/Testimonial';

export default function CustomPage({ pageData }) {
	const componentMapping = {
		Banner,
		Padding,
		PageIntro,
		ProjectDisplay,
		Testimonial,
	};

	const dynamicComponents = pageData.blocks.map((block) => {
		return block.__typename.replace('ComponentBlock', '');
	});
	return (
		<div>
			<CustomHead seo={pageData.seo} />
			<main>
				{dynamicComponents.map((componentName, n) => {
					const Component = componentMapping[componentName];
					if (n == 0 && componentName !== 'PageIntro') {
						return (
							<>
								<div className="pt-[112px]"></div>
								<Component key={n} content={pageData.blocks[n]} />
							</>
						);
					}
					return <Component key={n} content={pageData.blocks[n]} />;
				})}
			</main>
		</div>
	);
}
