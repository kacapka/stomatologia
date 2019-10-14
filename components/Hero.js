import Typist from "react-typist";
import Underline from "./Underline";

const Hero = () => {
	return (
		<section className="hero">
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/logo.svg"
				className="hero-logo"
				alt="Anita Seroka logo"
			/>
			<div className="hero-title">
				<Typist cursor={{ show: false }}>
					<h1 className="hero-title__text">
						Zadbamy o Twój piękny i{" "}
						<Underline>zdrowy uśmiech!</Underline>
					</h1>
				</Typist>
			</div>
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/hero_bg.png"
				className="hero-bg"
				alt="gabinet stomatologiczny"
			/>
		</section>
	);
};

export default Hero;
