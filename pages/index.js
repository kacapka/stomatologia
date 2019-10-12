import "../styles/index.scss";

import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import Hero from "../components/Hero";
import Hr from "../components/Hr";
import Services from "../components/Services";

export default () => (
	<div>
		<Head title="Gabinet Stomatologiczny dr Anita Seroka" />
		<Hero />
		<Hr />
		<Services />
		<Hr />
		{/* <Nav /> */}
		<div className="hero">aaaa</div>
	</div>
);
