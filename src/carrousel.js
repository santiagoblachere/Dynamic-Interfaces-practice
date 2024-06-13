export default function carrousel() {
	let currentImage = 2;

	function changeCarrouselRight() {
		if (currentImage === 4) {
			currentImage = 0;
		} else {
			currentImage++;
		}
		console.log(currentImage);
		return currentImage;
	}

	function changeCarrouselLeft() {
		if (currentImage === 0) {
			currentImage = 4;
		} else {
			currentImage--;
		}
		console.log(currentImage);
		return currentImage;
	}

	return {
		changeCarrouselRight,
		changeCarrouselLeft,
	};
}
