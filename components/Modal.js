import Modal from "react-modal";
import PRICES from "../data/prices";

const ModalPrices = () => {
	const renderPrices = () => {
		return PRICES.map(item => {
			return (
				<div key={item.title} className="modal-list__item">
					<h3>{item.title}</h3>
					<ul>
						{item.prices.map(price => {
							return (
								<li key={price.name}>
									<p>{price.name}</p>
									<p>{price.price} PLN</p>
								</li>
							);
						})}
					</ul>
				</div>
			);
		});
	};

	return <div className="modal-list">{renderPrices()}</div>;
};

export default ModalPrices;
