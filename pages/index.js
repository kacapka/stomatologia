import "react-app-polyfill/ie9";
import "react-app-polyfill/stable";
import "../styles/index.scss";

import { useEffect } from "react";

import Head from "../components/head";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import { ParallaxProvider } from "react-scroll-parallax";

export default () => {
	useEffect(() => {
		window.onbeforeunload = function() {
			window.scrollTo(0, 0);
		};
	}, []);

	return (
		<ParallaxProvider>
			<Head title="Stomatologia dr A. Seroka - zadbamy o Twoj uśmiech" />
			<Hero />
			<Services />
			<Prices />
			<Contact />
			<Hr />
			<Footer />
		</ParallaxProvider>
	);
};
