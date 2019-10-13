import Fade from "react-reveal/Fade";
import Typist from "react-typist";
import { useState } from "react";

import Container from "./Container";
import Underline from "./Underline";

import useScroll from "./UseScroll";

const Prices = () => {
	const isInView = useScroll({ query: ".services", offset: 1000 });
	const [isButton, setIsButton] = useState(false);
	const onTypingDone = () => {
		setIsButton(true);
	};

	return (
		<Container>
			<section className="prices">
				<div className="prices-content">
					<Fade bottom>
						<h2 className="prices-content__title--light">
							<span className="prices-content__title--light">
								Indywidualne <br />
								podejście do klienta
							</span>
						</h2>
					</Fade>
					{isInView && (
						<Typist
							cursor={{ show: false }}
							onTypingDone={onTypingDone}
						>
							<h2 className="prices-content__title--bold">
								<Underline isBig>w zgodzie z naturą.</Underline>
							</h2>
						</Typist>
					)}
					{isButton && (
						<Fade left>
							<div className="prices-content__button">
								<p>SPRAWDŹ NASZE CENY</p>
							</div>
						</Fade>
					)}
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
