import { useState, useEffect } from "react";

const Underline = ({ children, isBig }) => {
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsReady(true);
		}, 500);
		return () => clearTimeout(timer);
	}, []);

	return (
		<span
			className={`underline ${isBig ? "underline--big" : ""} ${
				isReady ? "underline--active" : ""
			}`}
		>
			{children}
		</span>
	);
};

export default Underline;
