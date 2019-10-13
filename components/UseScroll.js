import { useState, useEffect, useLayoutEffect } from "react";

const UseScroll = ({ query, offset = 100 }) => {
	const [isInitoView, setIsIntoView] = useState(false);
	const [element, setElement] = useState(null);
	const listener = e => {
		if (!element) return;
		const scroll = window.scrollY + window.innerHeight - offset;
		if (scroll > element.offsetTop) {
			setIsIntoView(true);
		}
	};

	useEffect(() => {
		window.addEventListener("scroll", listener);
		return () => {
			window.removeEventListener("scroll", listener);
		};
	});

	useLayoutEffect(() => {
		const el = document.querySelector(query);
		setElement(el);
	}, []);

	return isInitoView;
};

export default UseScroll;
