// Open cover
const btnCover = document.getElementById("cover-btn");
const cover = document.getElementById("cover");

btnCover.addEventListener("click", () => {
	cover.classList.add("cover-open");
});

// Fungsi untuk mendapatkan query parameter dari URL
function getQueryParam(param) {
	const urlParams = new URLSearchParams(window.location.search);
	return urlParams.get(param);
}

const name = getQueryParam("name");
const address = getQueryParam("address");

if (name) {
	document.querySelector(".name").textContent = name;
} else {
	document.querySelector(".name").textContent = "Nama tidak ditemukan di URL.";
}

if (address) {
	document.querySelector(".address").textContent = address;
} else {
	document.querySelector(".address").textContent = "Alamat tidak ditemukan di URL.";
}
