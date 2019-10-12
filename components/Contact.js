const Contact = () => {
	return (
		<section className="contact">
			<div className="contact-item">
				<img
					src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_phone.png"
					alt="kontakt"
					className="contact-item__img"
				/>
				<h3 className="contact-item__title">Skontaktuj się z nami:</h3>
				<p className="contact-item__text">
					ul. Jagiellońska 5A, lok. 2, <br />
					05-120 Legionowo <br />
					Telefon: <a href="tel:+4822123456">22 123 456</a>
				</p>
			</div>
			<div className="contact-item">
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
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration1.png"
				className="contact-decoration1"
			/>
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration2.png"
				className="contact-decoration2"
			/>
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/contact_decoration3.png"
				className="contact-decoration3"
			/>
		</section>
	);
};

export default Contact;
