const images = [
	{
		image: "images/namecards/card1.png",
		texts: [
			"Pangyo, Korea, Philly, CO",
			"A human being"
		]
	},
	{
		image: "images/namecards/card2.png",
		texts: [
			"hey"
		]
	},
	{
		image: "images/namecards/card3.png",
		texts: [
			"new yorker not true",
			"love nyc tho",
			"im testing so do not read"
		]
	}
];

let currentIndex = 0;
const mainImage = document.getElementById("mainImage");
const textList = document.getElementById("textList");

// Function to update image + text
function updateCard(index) {
    const image = images[index];

    // Update image
    mainImage.src = image.image;

    // Clear previous text
    textList.innerHTML = "";

    // Add new list items
    image.texts.forEach(text => {
        const li = document.createElement("li");
        li.textContent = text;
        textList.appendChild(li);
    });
}

// Initial display
updateCard(currentIndex);

// disable clicks for first 3 seconds
let clicksEnabled = false;
setTimeout(() => {
	clicksEnabled = true;
}, 1500);

document.body.addEventListener("click", (e) => {
	if(!clicksEnabled) return;

	currentIndex = (currentIndex + 1) % images.length;
	updateCard(currentIndex);
});
