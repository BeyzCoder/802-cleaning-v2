import "../styles/GallerySlide.css";

const GallerySlide = ({ images }) => {
	const imageCount = images.length;

	const animationDelay = (index) => {
		return `calc(20s / ${imageCount} * (${imageCount} - ${index + 1}) * -1)`;
	}

	return (
		<div className="gallery-page">
			<h1>Our Showcase Work</h1>
			<div className="slider-contain">
				<div className="slider-track">
					{images.map((img, index) => (
						<div className="slide" key={index} style={{ animationDelay: animationDelay(index) }}>
							<img src={img.image} alt={index} />
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default GallerySlide;