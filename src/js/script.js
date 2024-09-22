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

document.querySelectorAll(".guest__name").forEach((element) => {
	element.textContent = name ? name : "Nama tidak ditemukan di URL.";
});

document.querySelectorAll(".guest__address").forEach((element) => {
	element.textContent = address ? address : "Alamat tidak ditemukan di URL.";
});

// Scroll Navigation Bar
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

// Copy Rek
let rekBca = document.getElementById("no-rekening-bca").innerText;
const copyBca = async () => {
	try {
		await navigator.clipboard.writeText(rekBca);
		alert("Copied to clipboard !");
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
};
let rekMandiri = document.getElementById("no-rekening-mandiri").innerText;
const copyMandiri = async () => {
	try {
		await navigator.clipboard.writeText(rekMandiri);
		alert("Copied to clipboard !");
	} catch (err) {
		console.error("Failed to copy: ", err);
	}
};

// Message
const messageContainer = document.getElementById("message__container");
messageContainer.style.display= "none"
function submitMessage() {
	let name = document.getElementById("name__input").value;
	let message = document.getElementById("message__input").value;

	const messageName = document.createElement("h4");
	messageName.textContent = name;

	const messageMessage = document.createElement("p");
	messageMessage.textContent = message;

	const messageContent = document.createElement("div");
	messageContent.classList.add("message__content");
	messageContent.append(messageName);
	messageContent.append(messageMessage);

	const messageContainer = document.getElementById("message__container");
	messageContainer.append(messageContent);

	document.getElementById("name__input").value = "";
	document.getElementById("message__input").value = "";

    messageContainer.style.display = "flex"
}
