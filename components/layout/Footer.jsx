import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ footerData }) {
	return (
		<footer className="bg-main text-white border-t-[20px] border-secondary">
			<div className="max-w-screen-2xl m-auto lg:flex justify-between items-center px-11 py-12 lg:py-36 ">
				<div className="leftSection w-full lg:w-7/12 lg:max-w-2xl flex flex-col lg:flex-row justify-between items-center flex-none text-center lg:text-left space-y-4 lg:space-y-0">
					<Image
						src={footerData.icon.data.attributes.url}
						width={53}
						height={66}
						alt={footerData.icon.data.attributes.alternativeText}
						className=""
					/>
					<div className="address">
						<p className="text-base">{footerData.addressLine1}</p>
						<p className="text-base">{footerData.addressLine2}</p>
					</div>
					<div className="contact">
						<a href={`tel:${footerData.number}`}>
							<p className="text-base">{footerData.number}</p>
						</a>
						<a href={`mailto:${footerData.email}`}>
							<p className="text-base">{footerData.email}</p>
						</a>
					</div>
				</div>
				<div className="rightSection text-center lg:text-right mt-16 lg:mt-0 space-y-3 lg:space-y-0">
					<div className="socials flex justify-center lg:justify-end space-x-5">
						{footerData.socialMedia.map((social) => (
							<Link href={social.link} key={social.id}>
								<a>
									<Image
										src={social.icon.data.attributes.url}
										height={20}
										width={20}
										alt={social.platformName}
									/>
								</a>
							</Link>
						))}
					</div>
					<p className="text-xs text-secondary">{footerData.copyrightText}</p>
				</div>
			</div>
		</footer>
	);
}
