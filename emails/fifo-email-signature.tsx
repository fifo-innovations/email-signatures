import {
	Font,
	Link,
	Row,
	Section,
} from "@react-email/components";
import * as React from "react";

interface SignatureProps { 
  name: string;
  title: string;
  cell?: string;
	customerCareTeam?: string;
}

export function FifoEmailSignature(props: SignatureProps) {
  const { name, title, cell, customerCareTeam } = props;

	return (
		<Section
			style={{
				fontSize: "1em",
				lineHeight: "1.25em",
				fontWeight: 300,
				color: "#9E9E9E",
			}}
		>
			<Font
				fontFamily="Arial, Helvetica, sans-serif"
				fallbackFontFamily="Verdana"
			/>
			<Row>
				<span
					style={{
						color: "#D16D6A",
                fontWeight: 600,
					}}
				>
					{name} {" "}
				</span>
				| {title}
			</Row>
			<Row>
				<span style={{ fontWeight: 800 }}>FIFO Innovations</span> | p.{" "}
        <Link href="tel:17783836200">+1 778-383-6200</Link>
        {cell && (
          <>
            {" | c. "}
            <Link href={`tel:1${cell}`}>+1 {cell}</Link>
          </>
        )}
			</Row>
			<Row>107 - 2999 Underhill Avenue, Burnaby BC Canada V5A 3C2 | <Link href="https://www.fifobottle.com?utm_source=email&utm_medium=email&utm_campaign=email_sig&utm_id=email_sig">
					www.fifoinnovations.com
				</Link></Row>
		
			<Row style={{ padding: 6 }}>
				{icons.map((icon, i) => (
					<Icon
						key={icon.id}
						id={icon.id}
						src={icon.src}
						alt={icon.alt}
						href={icon.href}
						index={i}
					/>
				))}
			</Row>
		</Section>
	);
};
export default FifoEmailSignature;

const icons = [
	{
		id: "ig-link",
		src: "https://cdn11.bigcommerce.com/s-k2dk6gxxpb/images/stencil/original/image-manager/icon-ig-grey-xs.png",
		alt: "Find us on Instagram",
		href: "https://www.instagram.com/fifoinnovations/",
	},
	{
		id: "li-link",
		src: "https://cdn11.bigcommerce.com/s-k2dk6gxxpb/images/stencil/original/image-manager/icon-li-grey-xs.png",
		alt: "Find us on LinkedIn",
		href: "https://www.linkedin.com/company/fifo-innovations/",
	},
	{
		id: "yt-link",
		src: "https://cdn11.bigcommerce.com/s-k2dk6gxxpb/images/stencil/original/image-manager/icon-yt-grey-xs.png",
		alt: "Find us on Youtube",
		href: "https://www.youtube.com/user/FIFOInnovations",
	},
	{
		id: "fb-link",
		src: "https://cdn11.bigcommerce.com/s-k2dk6gxxpb/images/stencil/original/image-manager/icon-fb-grey-xs.png",
		alt: "Find us on Facebook",
		href: "https://www.facebook.com/FIFOInnovations/",
	},
	{
		id: "x-link",
		src: "https://cdn11.bigcommerce.com/s-k2dk6gxxpb/images/stencil/original/image-manager/icon-x-grey-xs.png",
		alt: "Find us on X",
		href: "https://twitter.com/FIFOInnovations",
	},
];

interface IconProps {
	id: string;
	src: string;
	alt: string;
	href: string;
	index: number;
}

const Icon = (props: IconProps) => {
	const { id, src, alt, href, index } = props;

	return (
		<a id={id} href={href} style={{ textDecoration: "none" }}>
			<img
				src={src}
				alt={alt}
				style={{
					height: 22,
					maxHeight: 22,
					width: 22,
					maxWidth: 22,
					marginLeft: index !== 0 ? 6 : 0,
					marginTop: 1,
					paddingTop: 0,
				}}
			/>
		</a>
	);
};


FifoEmailSignature.PreviewProps = {
  name: "John Doe",
  title: "CEO",
  cell: "123-456-7890",
}