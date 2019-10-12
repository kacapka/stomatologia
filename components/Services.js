import Container from "./Container";
import Underline from "./Underline";
import ServicesList from "./ServicesList";

import decoration from "../static/decoration.svg";

const Services = () => {
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
					<h2 className="services-content__title">
						<Underline isBig>Nasze Usługi</Underline>
					</h2>
					<ServicesList />
				</div>
			</section>
		</Container>
	);
};

export default Services;
