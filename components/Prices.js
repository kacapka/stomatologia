import Container from "./Container";
import Underline from "./Underline";

const Prices = () => {
	return (
		<Container>
			<section className="prices">
				<div className="prices-content">
					<h2 className="prices-content__title">
						<span className="prices-content__title--light">
							Indywidualne <br />
							podejście do klienta
						</span>
						<br />
						<span className="prices-content__title--bold">
							<Underline isBig>w zgodzie z naturą.</Underline>
						</span>
					</h2>
					<div className="prices-content__button">
						<p>SPRAWDŹ NASZE CENY</p>
					</div>
				</div>
				<img
					src="https://stomatologia.s3.eu-central-1.amazonaws.com/prices_img.png"
					alt="indiwidualne podejście do klienta"
					className="prices-img"
				/>
				<img
					src="https://stomatologia.s3.eu-central-1.amazonaws.com/prices_decoration.png"
					alt=""
					className="prices-decoration"
				/>
			</section>
		</Container>
	);
};

export default Prices;
