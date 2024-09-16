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
	document.getElementById("name").textContent = name;
} else {
	document.getElementById("name").textContent = "Nama tidak ditemukan di URL.";
}

if (address) {
	document.getElementById("address").textContent = address;
} else {
	document.getElementById("address").textContent = "Alamat tidak ditemukan di URL.";
}
