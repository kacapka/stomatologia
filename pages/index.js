import "../styles/index.scss";

import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Services from "../components/Services";
import Prices from "../components/Prices";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default () => (
	<div>
		<Head title="Gabinet Stomatologiczny dr Anita Seroka" />
		<Hero />
		<Hr />
		<Services />
		<Hr />
		<Prices />
		<Hr />
		<Contact />
		<Hr />
		<Footer />
	</div>
);
