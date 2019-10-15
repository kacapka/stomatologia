import Fade from "react-reveal/Fade";
import Typist from "react-typist";
import { useState } from "react";
import useScroll from "./UseScroll";

import Container from "./Container";
import Underline from "./Underline";

import { Parallax } from "react-scroll-parallax";

const Prices = () => {
	const [isTyping, setIsTyping] = useState(false);
	const [isButton, setIsButton] = useState(false);
	const animateDecoration = useScroll({
		query: ".prices",
		offset: 500
	});
	const onTypingDone = () => {
		setIsButton(true);
	};

	const onReveal = () => {
		setTimeout(() => setIsTyping(true), 800);
	};

	return (
		<Container>
			<section className="prices">
				<div className="prices-content">
					<Fade bottom onReveal={onReveal}>
						<h2 className="prices-content__title--light">
							<span className="prices-content__title--light">
								Indywidualne <br />
								podejście do klienta
							</span>
						</h2>
					</Fade>
					{isTyping && (
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
				{/* <img
					src="https://stomatologia.s3.eu-central-1.amazonaws.com/prices_decoration.png"
					alt=""
					className={`prices-decoration ${
						animateDecoration ? "prices-decoration--end" : ""
					}`}
				/> */}
				<Parallax
					y={[-30, 30]}
					x={[-20, 20]}
					tagOuter="figure"
					className="prices-decoration"
				>
					<img
						src="https://stomatologia.s3.eu-central-1.amazonaws.com/prices_decoration.png"
						alt=""
						// className={`prices-decoration ${
						// 	animateDecoration ? "prices-decoration--end" : ""
						// }`}
					/>
				</Parallax>
			</section>
		</Container>
	);
};

export default Prices;
