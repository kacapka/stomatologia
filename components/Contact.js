import { useState, useEffect } from "react";
import Slide from "react-reveal/Slide";
import useScroll from "./UseScroll";

const Contact = () => {
	const [isReveal, setIsReveal] = useState(false);
	const onReveal = () => {
		const timeout = setTimeout(() => setIsReveal(true), 1000);
	};

	const animateDecoration1 = useScroll({
		query: ".contact",
		offset: 200
	});

	const animateDecoration3 = useScroll({
		query: ".contact",
		offset: 500
	});

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
						Telefon: <a href="tel:+4822123456">22 123 456</a>
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
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration1.png"
				className={`contact-decoration contact-decoration1 ${
					animateDecoration1 ? "contact-decoration1--end" : ""
				}`}
			/>
			<img
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
			/>
		</section>
	);
};

export default Contact;
