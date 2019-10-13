import { useState } from "react";
import { Fade } from "react-reveal";
import SERVICES from "../data/services";

import arrow from "../static/arrow.svg";

const ServicesList = () => {
	const [activeId, setActiveId] = useState(null);

	if (!activeId) {
		return (
			<ul className="services-content__list">
				{SERVICES.map(service => {
					return (
						<React.Fragment key={service.id}>
							<Fade right>
								<li
									className="services-content__list-item"
									onClick={() => setActiveId(service.id)}
								>
									<p>{service.name}</p>
									<div className="services-content__list-icon">
										{arrow()}
									</div>
								</li>
							</Fade>
						</React.Fragment>
					);
				})}
			</ul>
		);
	}

	const activeItem = SERVICES.find(service => service.id === activeId);

	return (
		<ul className="services-content__list">
			<li
				className="services-content__list-item"
				onClick={() => setActiveId(null)}
			>
				<p>{activeItem.name}</p>
				<div className="services-content__list-icon services-content__list-icon--close">
					{arrow()}
				</div>
			</li>
			{activeItem.desc.map(text => (
				<li key={text} className="services-content__list-item--desc">
					{text}
				</li>
			))}
			<li
				className="services-content__list-item--button"
				onClick={() => setActiveId(null)}
			>
				Sprawdź inne usługi
			</li>
		</ul>
	);
};

export default ServicesList;
