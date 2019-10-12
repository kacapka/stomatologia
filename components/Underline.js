const Underline = ({ children, isBig }) => {
	return (
		<span className={`underline ${isBig ? "underline--big" : ""}`}>
			{children}
		</span>
	);
};

export default Underline;
