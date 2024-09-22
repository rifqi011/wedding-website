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

// Countdown
(function () {
	const second = 1000,
		minute = second * 60,
		hour = minute * 60,
		day = hour * 24;

	const countDown = new Date("January 11, 2025 07:00:00").getTime(),
		wedding = setInterval(function () {
			const now = new Date().getTime(),
				distance = countDown - now;

			document.getElementById("days").innerText = Math.floor(distance / day);
			document.getElementById("hours").innerText = Math.floor((distance % day) / hour);
			document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute);
			document.getElementById("seconds").innerText = Math.floor((distance % minute) / second);

			if (distance < 0) {
				document.getElementById("headline-timer").innerText = "Wedding Day !";
				// document.getElementById("timer").style.display = "none";
				(document.getElementById("days").innerText = "0"), (document.getElementById("hours").innerText = "0"), (document.getElementById("minutes").innerText = "0"), (document.getElementById("seconds").innerText = "0");
				document.getElementById("content-timer").style.display = "block";
				clearInterval(wedding);
			}
		}, 0);
})();

// Swiper
let swiper = new Swiper(".swiper-container", {
	slidesPerView: 1,
	spaceBetween: 10,
	centeredSlides: true,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	autoplay: {
		enabled: false,
	},
	lazy: true,
});

let modal = document.getElementById("gallery-modal");
let closeModal = document.getElementById("close-modal");

document.querySelectorAll(".gallery__img").forEach((img, index) => {
	img.addEventListener("click", function () {
		modal.style.display = "block";
		swiper.slideTo(index); // Pindah ke slide sesuai gambar yang di-klik
		body.style.overflow = "hidden";
		swiper.update();
	});
});

closeModal.addEventListener("click", () => {
	modal.style.display = "none";
	body.style.overflow = "scroll";
});

window.addEventListener("click", (event) => {
	if (event.target == modal) {
		modal.style.display = "none";
		body.style.overflow = "scroll";
	}
});
