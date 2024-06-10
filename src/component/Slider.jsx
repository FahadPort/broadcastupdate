import { useEffect, useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa6";

export default function Carousel({
	slides,
	autoSlide = false,
	autoSlideInterval = 3000,
}) {
	const [curr, setCurr] = useState(0);
	const [hovered, setHovered] = useState(false);

	const prev = () =>
		setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	const next = () =>
		setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
	useEffect(() => {
		if (!autoSlide) return;
		const slideInterval = setInterval(next, autoSlideInterval);
		return () => clearInterval(slideInterval);
	});
	const goToSlide = (index) => {
		setCurr(index);
	};
	return (
		<div
			className="main-carousel"
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}>
			<div
				className="carousel-container"
				style={{ transform: `translateX(-${curr * 100}%)` }}>
				{slides.map((slide) => (
					<img
						key={slide.id}
						src={slide.src}
						alt="img"
						className="container-img"
					/>
				))}
			</div>
			{hovered && (
				<div className="carousel-icon">
					<button
						onClick={prev}
						className="prev">
						<FaChevronLeft
							size={20}
							className="prev-icon"
						/>
					</button>
					<button
						onClick={next}
						className="next">
						<FaChevronRight
							size={20}
							className="next-icon"
						/>
					</button>
				</div>
			)}
			<div className="dots">
				<div className="dots-container">
					{slides.map((_, i) => (
						<button
							key={i}
							onClick={() => goToSlide(i)}
							className={`btn
                ${
									curr === i
										? "p-[5px] bg-gray-600"
										: "bg-opacity-75 bg-gray-200"
								}
              `}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
