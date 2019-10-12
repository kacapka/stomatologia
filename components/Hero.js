import Underline from "./Underline";

const Hero = () => {
	return (
		<section className="hero">
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/logo.svg"
				className="hero-logo"
				alt="Anita Seroka logo"
			/>
			<h1 className="hero-text">
				Zadbamy o Twój piękny i <Underline>zdrowy uśmiech!</Underline>
			</h1>
			<img
				src="https://stomatologia.s3.eu-central-1.amazonaws.com/hero_bg.png"
				className="hero-bg"
				alt="gabinet stomatologiczny"
			/>
		</section>
	);
};

export default Hero;
