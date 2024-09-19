// Open cover
const btnCover = document.getElementById("cover-btn");
const cover = document.getElementById("cover");
const body = document.getElementById("body");

body.style.overflow = "hidden";

btnCover.addEventListener("click", () => {
	cover.classList.add("cover-open");
	body.style.overflow = "auto";
});

// Fungsi untuk mendapatkan query parameter dari URL
function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

const name = getQueryParam("name");
const address = getQueryParam("address");

document.querySelectorAll(".name").forEach((element) => {
	element.textContent = name ? name : "Nama tidak ditemukan di URL.";
});

// Update all elements with class 'address'
document.querySelectorAll(".address").forEach((element) => {
	element.textContent = address ? address : "Alamat tidak ditemukan di URL.";
});

// Scroll
const scrollY = window.pageYOffset;

window.addEventListener("scroll", () => {
	const header = document.getElementById("nav-menu");
	// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
	if (this.scrollY >= 50) {
		header.classList.add("scroll-header");
	} else {
		header.classList.remove("scroll-header");
	}
});
