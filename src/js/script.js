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

// Active menu
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav__link");

window.addEventListener("scroll", () => {
	const scrollY = window.pageYOffset;
	const pageHeight = document.documentElement.scrollHeight;
	const viewportHeight = window.innerHeight;
	const bottomOfPage = scrollY + viewportHeight >= pageHeight;

	sections.forEach((current) => {
		const sectionHeight = current.offsetHeight;
		const sectionTop = current.offsetTop - 50; // Offset untuk mengkompensasi margin atas
		const sectionId = current.getAttribute("id");

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			// Remove class active-link dari semua nav__link
			navLinks.forEach((link) => {
				link.classList.remove("active-link");
			});
			// Tambahkan class active-link ke nav__link yang sesuai
			document.querySelector(".nav__link[href*=" + sectionId + "]").classList.add("active-link");
		}

		// Jika sudah sampai bagian paling bawah, aktifkan menu 'Message'
		if (bottomOfPage) {
			navLinks.forEach((link) => {
				link.classList.remove("active-link");
			});
			document.querySelector(".nav__link[href*='message']").classList.add("active-link");
		}
	});
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
messageContainer.style.display = "none";
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

	messageContainer.style.display = "flex";
}
