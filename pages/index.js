import "../styles/index.scss";

import { useEffect } from "react";

import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default () => {
	useEffect(() => {
		window.onbeforeunload = function() {
			window.scrollTo(0, 0);
		};
	}, []);

	return (
		<React.Fragment>
			<Head title="Stomatologia dr A. Seroka" />
			<Hero />
			{/* <Hr /> */}
			<Services />
			{/* <Hr /> */}
			<Prices />
			{/* <Hr /> */}
			<Contact />
			<Hr />
			<Footer />
		</React.Fragment>
	);
};
