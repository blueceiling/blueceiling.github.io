const images = [
	{
		image: "images/namecards/card0.png",
		link: null
	},
	{
		image: "images/namecards/card1.png",
		link: "https://www.instagram.com/bruttheology/"
	},
	{
		image: "images/namecards/card2.png",
		link: "https://youtu.be/hj0msQnP8L8?si=_uPLTEZa4j9J18OL"
	},
	{
		image: "images/namecards/card3.png",
		link: "https://www.instagram.com/folded_weather/"
	}
];

let currentIndex = 0;
const mainImage = document.getElementById("mainImage");

// Function to update image + text
function updateCard(index) {
    const image = images[index];

    // Update image
    mainImage.src = image.image;

	// store link on the image element
	mainImage.dataset.link = image.link || "";

}

// Initial display
updateCard(currentIndex);

mainImage.addEventListener("click", (e) => {
	e.stopPropagation(); // prevents body click

	const link = mainImage.dataset.link;
	if (!link) return; // no link → do nothing

	window.location.href = link;
});

// disable clicks for first 3 seconds
let clicksEnabled = false;
setTimeout(() => {
	clicksEnabled = true;
}, 1500);

document.body.addEventListener("click", (e) => {
	if(!clicksEnabled) return;
	if (e.target === mainImage) return;

	currentIndex = (currentIndex + 1) % images.length;
	updateCard(currentIndex);
});
