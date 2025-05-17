const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery")
const img = document.querySelector("img")
const modal = document.querySelector("dialog")
const closeBtn = document.querySelector(".close-viewer")

function toggleMenu() {
    menu.classList.toggle("hide");
}

btn.addEventListener("click", toggleMenu);

function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function galleryClicked(clickEvent) {
    clickEvent.target.closest("img");
    const srcValue = img.src;
    const changeImg = srcValue.split("-")[0] + "-full.jpeg";
    showModal(changeImg);
}

function showModal(img) {
    const modal = document.createElement('dialog');
    modal.innerHTML = `<img src="${img}"><button class="close-viewer">X</button>`;
    document.body.appendChild(modal);
    modal.showModal();
}

const clickEvent = gallery.addEventListener("click", galleryClicked);

function closeBtn(clickEvent) {
    if (clickEvent.target.classList.contains("close-viewer")) {
        modal.close();
    }
}

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
    modal.close();
}
});

const closeModal = closeBtn.addEventListener("click");