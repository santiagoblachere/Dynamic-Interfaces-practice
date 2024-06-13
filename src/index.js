import carrousel from "./carrousel";
import "./style.css";

const { changeCarrouselRight, changeCarrouselLeft } = carrousel();

const body = document.querySelector("body");
const carrouselContainer = document.createElement("div");
const imageTwo = document.createElement("img");
imageTwo.src =
	"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Zl3jn5bdcXnHvqSmW7oZAJV9Qz36NqlHng&s";
carrouselContainer.appendChild(imageTwo);
const buttonLeft = document.createElement("button");
buttonLeft.textContent = "<-";
const buttonRight = document.createElement("button");
buttonRight.textContent = "->";
buttonLeft.addEventListener("click", () => changeImage("left"));
buttonRight.addEventListener("click", () => changeImage("right"));
body.appendChild(buttonLeft);
body.appendChild(carrouselContainer);
body.appendChild(buttonRight);

function changeImage(direction) {
	let currentImage;
	if (direction === "left") {
		currentImage = changeCarrouselLeft();
	} else if (direction === "right") {
		currentImage = changeCarrouselRight();
	}
	displayImage(currentImage);
}

function displayImage(currentImage) {
	carrouselContainer.innerHTML = "";
	if (currentImage === 0) {
		const imageOne = document.createElement("img");
		imageOne.src =
			"https://cdn1.epicgames.com/offer/24b9b5e323bc40eea252a10cdd3b2f10/EGS_LeagueofLegends_RiotGames_S1_2560x1440-80471666c140f790f28dff68d72c384b";
		carrouselContainer.appendChild(imageOne);
	} else if (currentImage === 1) {
		const imageTwo = document.createElement("img");
		imageTwo.src =
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5Zl3jn5bdcXnHvqSmW7oZAJV9Qz36NqlHng&s";
		carrouselContainer.appendChild(imageTwo);
	} else if (currentImage === 2) {
		const imageThree = document.createElement("img");
		imageThree.src = "https://i.blogs.es/a4641d/fortnite2021/1366_2000.jpeg";
		carrouselContainer.appendChild(imageThree);
	} else if (currentImage === 3) {
		const imageFour = document.createElement("img");
		imageFour.src =
			"https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/570/capsule_616x353.jpg?t=1714502360";
		carrouselContainer.appendChild(imageFour);
	} else if (currentImage === 4) {
		const imageFive = document.createElement("img");
		imageFive.src =
			"https://media.vandal.net/i/640x360/10-2023/19/2023101917221334_1.jpg";
		carrouselContainer.appendChild(imageFive);
	}
}
setInterval(() => changeImage("right"), 5000);
