const images = [
	"images/namecards/card1.png",
	"images/namecards/tyler.jpg",
];

let currentIndex = 0;
const mainImage = document.getElementById("mainCard");

// disable clicks for first 3 seconds
let clicksEnabled = false;
setTimeout(() => {
	clicksEnabled = true;
}, 3000);

document.body.addEventListener("click", (e) => {
	if (e.target !== mainCard) {
		currentIndex = (currentIndex + 1) % images.length;
		mainCard.src = images[currentIndex];
	}
});
