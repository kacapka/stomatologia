import { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";
import useScroll from "./UseScroll";
import { Parallax } from "react-scroll-parallax";

const Contact = () => {
	const [isReveal, setIsReveal] = useState(false);
	const onReveal = () => {
		const timeout = setTimeout(() => setIsReveal(true), 1000);
	};

	// const animateDecoration1 = useScroll({
	// 	query: ".contact",
	// 	offset: 200
	// });

	// const animateDecoration3 = useScroll({
	// 	query: ".contact",
	// 	offset: 500
	// });

	return (
		<section className="contact">
			<Slide bottom onReveal={onReveal}>
				<div
					className={`contact-item ${
						isReveal ? "contact-item--shadow" : ""
					}`}
				>
					<img
						src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_phone.png"
						alt="kontakt"
						className="contact-item__img"
					/>
					<h3 className="contact-item__title">
						Skontaktuj się z nami:
					</h3>
					<p className="contact-item__text">
						ul. Jagiellońska 5A, lok. 2, <br />
						05-120 Legionowo <br />
						Telefon: <a href="tel:+48500195375">500 195 375</a>
					</p>
				</div>
			</Slide>
			<Slide bottom>
				<div
					className={`contact-item ${
						isReveal ? "contact-item--shadow" : ""
					}`}
				>
					<img
						src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_scheduler.png"
						alt="umów wizytę"
						className="contact-item__img scheduler"
					/>
					<h3 className="contact-item__title">Umów wizytę online:</h3>
					<p className="contact-item__text">
						Prosimy o chwilę cierpliwości,
						<br />
						opcja dostępna wkrótce.
					</p>
				</div>
			</Slide>
			<Parallax
				y={[0, 0]}
				x={[-40, 40]}
				tagOuter="figure"
				className="contact-decoration1--mobile"
			>
				<img src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration1.png" />
			</Parallax>
			<Parallax
				y={[20, -50]}
				x={[-10, 0]}
				tagOuter="figure"
				className="contact-decoration1"
			>
				<img src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration1.png" />
			</Parallax>
			<Parallax
				y={[20, -100]}
				x={[-10, 0]}
				tagOuter="figure"
				className="contact-decoration2"
			>
				<img src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration2.png" />
			</Parallax>
			<Parallax
				y={[30, -30]}
				x={[30, -20]}
				tagOuter="figure"
				className="contact-decoration3"
			>
				<img src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration3.png" />
			</Parallax>
			{/* <img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration1.png"
				className={`contact-decoration contact-decoration1 ${
					animateDecoration1 ? "contact-decoration1--end" : ""
				}`}
			/> */}
			{/* <img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration2.png"
				className={`contact-decoration contact-decoration2 ${
					animateDecoration1 ? "contact-decoration2--end" : ""
				}`}
			/>
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration3.png"
				className={`contact-decoration contact-decoration3 ${
					animateDecoration3 ? "contact-decoration3--end" : ""
				}`}
			/> */}
		</section>
	);
};

export default Contact;
