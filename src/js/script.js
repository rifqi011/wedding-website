document.addEventListener("DOMContentLoaded", () => {
	// Open cover
	const btnCover = document.getElementById("cover-btn")
	const cover = document.getElementById("cover")
	const body = document.getElementById("body")

	body.style.overflow = "hidden"

	btnCover.addEventListener("click", () => {
		cover.classList.add("cover-open")
		body.style.overflow = "auto"
	})

	// Fungsi query parameter dari URL
	function getQueryParam(param) {
		const urlParams = new URLSearchParams(window.location.search)
		return urlParams.get(param)
	}

	const guestName = getQueryParam("name")
	const guestAddress = getQueryParam("address")

	document.querySelectorAll(".guest__name").forEach((element) => {
		element.textContent = guestName ? guestName : "Nama mboten enten."
	})

	document.querySelectorAll(".guest__address").forEach((element) => {
		element.textContent = guestAddress ? guestAddress : "Alamat mboten enten."
	})

	// Name input from URL
	const nameInput = document.getElementById("name__input")
	if (nameInput) {
		nameInput.value = guestName
	}

	// Scroll Navigation Bar
	const scrollY = window.pageYOffset

	window.addEventListener("scroll", () => {
		const header = document.getElementById("nav-menu")
		// When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
		if (this.scrollY >= 50) {
			header.classList.add("scroll-header")
		} else {
			header.classList.remove("scroll-header")
		}
	})

	// Active menu
	const sections = document.querySelectorAll("section[id]")
	const navLinks = document.querySelectorAll(".nav__link")

	window.addEventListener("scroll", () => {
		const scrollY = window.pageYOffset
		const pageHeight = document.documentElement.scrollHeight
		const viewportHeight = window.innerHeight
		const bottomOfPage = scrollY + viewportHeight >= pageHeight

		sections.forEach((current) => {
			const sectionHeight = current.offsetHeight
			const sectionTop = current.offsetTop - 50 // Offset untuk mengkompensasi margin atas
			const sectionId = current.getAttribute("id")

			if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
				// Remove class active-link dari semua nav__link
				navLinks.forEach((link) => {
					link.classList.remove("active-link")
				})
				// Tambahkan class active-link ke nav__link yang sesuai
				document.querySelector(".nav__link[href*=" + sectionId + "]").classList.add("active-link")
			}

			// Jika sudah sampai bagian paling bawah, aktifkan menu 'Message'
			if (bottomOfPage) {
				navLinks.forEach((link) => {
					link.classList.remove("active-link")
				})
				document.querySelector(".nav__link[href*='message']").classList.add("active-link")
			}
		})
	})

	// Countdown
	;(function () {
		const second = 1000,
			minute = second * 60,
			hour = minute * 60,
			day = hour * 24

		const countDown = new Date("June 02, 2025 11:00:00").getTime(),
			wedding = setInterval(function () {
				const now = new Date().getTime(),
					distance = countDown - now

				document.getElementById("days").innerText = Math.floor(distance / day)
				document.getElementById("hours").innerText = Math.floor((distance % day) / hour)
				document.getElementById("minutes").innerText = Math.floor((distance % hour) / minute)
				document.getElementById("seconds").innerText = Math.floor((distance % minute) / second)

				if (distance < 0) {
					document.getElementById("headline-timer").innerText = "Wedding Day !"
					// document.getElementById("timer").style.display = "none";
					;(document.getElementById("days").innerText = "0"), (document.getElementById("hours").innerText = "0"), (document.getElementById("minutes").innerText = "0"), (document.getElementById("seconds").innerText = "0")
					document.getElementById("content-timer").style.display = "block"
					clearInterval(wedding)

					// Fireworks
					const container = document.createElement("div")
					container.id = "fireworks"
					body.appendChild(container)

					const fireworks = new Fireworks.default(container)
					fireworks.start()
					setTimeout(() => {
						fireworks.stop()
						container.remove()
					}, 60000)
				}
			}, 0)
	})()

	// Gallery
	let images = []
	let currentSlideIndex = 0
	const lightBoxContainer = document.createElement("div")
	lightBoxContainer.className = "lightbox"
	lightBoxContainer.id = "lightbox"
	document.body.appendChild(lightBoxContainer)

	// Make functions global
	window.closeLightBox = function () {
		lightBoxContainer.style.display = "none"
		body.style.overflow = "auto"
	}

	window.changeSlide = function (n) {
		currentSlideIndex += n
		if (currentSlideIndex >= images.length) {
			currentSlideIndex = 0
		}
		if (currentSlideIndex < 0) {
			currentSlideIndex = images.length - 1
		}
		const slides = lightBoxContainer.getElementsByClassName("mySlide")
		for (let i = 0; i < slides.length; i++) {
			slides[i].style.display = "none"
		}
		slides[currentSlideIndex].style.display = "block"
	}

	function openLightBox(index) {
		currentSlideIndex = index
		images = document.querySelectorAll("#gallery .gallery__container img")

		const lightBoxContent = document.createElement("div")
		lightBoxContent.className = "lightbox__content"

		let htmlContent = ""
		images.forEach((image, i) => {
			htmlContent += `<div class="mySlide" style="display: ${i === index ? "block" : "none"};">
                            <img src="${image.src}" class="lightbox__img">
                        </div>`
		})

		const lightboxNavigation = document.createElement("div")
		lightboxNavigation.innerHTML += `<span class="close cursor" onclick="closeLightBox()"><img src="assets/icon/Times.svg"></span>
				    <a onclick="changeSlide(-1)" class="prev"><img src="assets/icon/Left.svg"></a>
				    <a onclick="changeSlide(1)" class="next"><img src="assets/icon/Right.svg"></a>`

		lightBoxContent.innerHTML = htmlContent
		lightBoxContainer.innerHTML = ""
		lightBoxContainer.style.display = "flex"
		lightBoxContainer.appendChild(lightBoxContent)
		lightBoxContainer.appendChild(lightboxNavigation)
		body.style.overflow = "hidden"
	}

	// Add event listeners
	document.querySelectorAll("#gallery .gallery__container img").forEach((image, index) => {
		image.addEventListener("click", () => openLightBox(index))
	})

	window.addEventListener("click", (event) => {
		if (event.target == lightBoxContainer) {
			closeLightBox()
		}
	})

	// Copy Rek
	let rekBca = document.getElementById("no-rekening-bca").innerText
	const copyBca = async () => {
		try {
			await navigator.clipboard.writeText(rekBca)
			alert("Copied to clipboard !")
		} catch (err) {
			console.error("Failed to copy: ", err)
		}
	}
	let rekMandiri = document.getElementById("no-rekening-mandiri").innerText
	const copyMandiri = async () => {
		try {
			await navigator.clipboard.writeText(rekMandiri)
			alert("Copied to clipboard !")
		} catch (err) {
			console.error("Failed to copy: ", err)
		}
	}

	// Message
	// const messageContainer = document.getElementById("message__container");
	// messageContainer.style.display = "none";
	// function submitMessage() {
	// 	let name = document.getElementById("name__input");
	// 	let message = document.getElementById("message__input");

	// 	if (name.value && message.value) {
	// 		const messageName = document.createElement("h4");
	// 		messageName.textContent = name.value;

	// 		const messageMessage = document.createElement("p");
	// 		messageMessage.textContent = message.value;

	// 		const messageContent = document.createElement("div");
	// 		messageContent.classList.add("message__content");
	// 		messageContent.append(messageName);
	// 		messageContent.append(messageMessage);

	// 		const messageContainer = document.getElementById("message__container");
	// 		messageContainer.prepend(messageContent);

	// 		message.value = "";

	// 		messageContainer.style.display = "flex";
	// 	} else {
	// 		alert("Tolong isi pesan terlebih dahulu!");
	// 	}
	// }

	AOS.init({
        duration: 2000,
        offset: 0
	})

	// Footer
	const date = new Date()
	let year = date.getFullYear()

	document.getElementById("copyright").innerText = `Copyright @${year} Rifqi Banu Safingi`
})
