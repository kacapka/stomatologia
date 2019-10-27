import NextHead from "next/head";
import { string } from "prop-types";

const defaultDescription = "";
const defaultKeywords = "";
const defaultOGURL = "";
const defaultOGImage = "";

const Head = props => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>{props.title || ""}</title>
		<meta name="viewport" content="width=device-width, initial-scale=1" />
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="keywords" content={props.keywords || defaultKeywords} />

		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/static/apple-touch-icon.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="32x32"
			href="/static/favicon-32x32.png"
		/>
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/static/favicon-16x16.png"
		/>
		<link rel="manifest" href="/static/site.webmanifest"></link>
		<meta
			property="og:image"
			content="https://stomatologia.s3.eu-central-1.amazonaws.com/services_img.png"
		/>

		<meta
			property="og:description"
			content="Zadbamy o Twój piękny i zdrowy uśmiech!"
		/>

		<meta property="og:url" content="https://www.drseroka.pl/" />

		<meta property="og:title" content="Stomatologia dr Anita Seroka" />

		<link
			rel="stylesheet"
			href="https://use.typekit.net/tys8kdf.css"
		></link>
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	keywords: string,
	url: string,
	ogImage: string
};

export default Head;
