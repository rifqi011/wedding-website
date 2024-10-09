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
	img.addEventListener("click", () => {
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
