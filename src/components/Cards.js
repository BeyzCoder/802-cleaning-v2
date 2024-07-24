import "../styles/Cards.css";

const Cards = ({boxes}) => {
	return (
		<div className="boxes-flex">
			{boxes.map((box, index) => (
				<div className="box">
					<div className="box-head">
						<img src={box.icon} alt={index} />
						<h2>{box.header}</h2>
					</div>
					<div className="box-body">
						<p>
							{box.desc}
						</p>
					</div>
					<div className="box-bottom">
						<img src={box.image} alt={index} />
					</div>
				</div>
			))}
		</div>
	);
}

export default Cards;