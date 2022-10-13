import Image from 'next/image';
import Link from 'next/link';

// State
import { useGlobalStore } from '../../zustand-state/globalState';

export default function Footer() {
	const footerData = useGlobalStore((state) => state.footer);
	return (
		<footer>
			<div className="leftSection">
				<Image
					src={footerData.icon.data.attributes.url}
					width={53}
					height={66}
					alt={footerData.icon.data.attributes.alternativeText}
				/>
				<div className="address">
					<p>{footerData.addressLine1}</p>
					<p>{footerData.addressLine2}</p>
				</div>
				<div className="contact">
					<p>{footerData.number}</p>
					<p>{footerData.email}</p>
				</div>
			</div>
			<div className="rightSection">
				<div className="socials">
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
				<p>{footerData.copyrightText}</p>
			</div>
		</footer>
	);
}
