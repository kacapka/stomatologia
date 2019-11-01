import { useState } from "react";
import Typist from "react-typist";
import Container from "./Container";
import Underline from "./Underline";
import ServicesList from "./ServicesList";

import decoration from "../static/decoration.svg";
import decorationMobile1 from "../static/services_mobile_1.svg";
import decorationMobile2 from "../static/services_mobile_2.svg";

import { Parallax } from "react-scroll-parallax";

import useScroll from "./UseScroll";

const Services = () => {
	const isInView = useScroll({
		query: ".services",
		offset: 100
	});
	const [isList, setIsList] = useState(false);
	const onTypingDone = () => {
		setIsList(true);
	};

	return (
		<Container>
			<section className="services">
				<Parallax
					y={[-30, 40]}
					x={[-20, 0]}
					tagOuter="figure"
					className="services-decoration"
				>
					{decoration()}
				</Parallax>
				<Parallax
					y={[40, -100]}
					x={[-20, 0]}
					tagOuter="figure"
					className="services-decoration--mobile1"
				>
					{decorationMobile1()}
				</Parallax>
				<Parallax
					y={[30, -100]}
					x={[0, 0]}
					tagOuter="figure"
					className="services-decoration--mobile2"
				>
					{decorationMobile2()}
				</Parallax>
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
