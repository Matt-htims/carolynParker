import React from 'react';

export default function Testimonial({ content }) {
	console.log(content);
	return (
		<div className="max-w-screen-2xl m-auto px-11 relative">
			<div className="quotemarks w-[80px] h-[60px] bg-cta absolute -left-14 -top-8"></div>
			<div className="text w-8/12 space-y-7">
				<p className="quote text-7xl font-accent">{content.quote}</p>
				<p className="author text-2xl text-cta">{content.author}</p>
			</div>
		</div>
	);
}
