// Open cover
const btnCover =  document.getElementById("cover-btn")
const cover = document.getElementById("cover")

btnCover.addEventListener("click", () => {
    cover.classList.add("cover-open")
})