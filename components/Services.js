import Reveal from "react-reveal/Reveal";
import { useState, useContext } from "react";
import Typist from "react-typist";
import Container from "./Container";
import Underline from "./Underline";
import ServicesList from "./ServicesList";

import decoration from "../static/decoration.svg";

import useScroll from "./UseScroll";

const Services = () => {
	const isInView = useScroll({ query: ".services" });
	const [isList, setIsList] = useState(false);
	const onTypingDone = () => {
		setIsList(true);
	};

	return (
		<Container>
			<section className="services">
				<div className="services-decoration">{decoration()}</div>
				<img
					src="https://stomatologia.s3.eu-central-1.amazonaws.com/services_img.png"
					alt="nasze usługi"
					className="services-img"
				/>
				<div className="services-content">
					{isInView && (
						<React.Fragment>
							<Typist
								cursor={{ show: false }}
								onTypingDone={onTypingDone}
							>
								<h2 className="services-content__title">
									<Underline isBig>Nasze Usługi</Underline>
								</h2>
							</Typist>
							{isList && <ServicesList />}
						</React.Fragment>
					)}
				</div>
			</section>
		</Container>
	);
};

export default Services;
