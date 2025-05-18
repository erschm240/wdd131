const btn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const gallery = document.querySelector(".gallery");
const img = document.querySelector("img");
const modal = document.querySelector("dialog");
const modalBtn = document.querySelector(".close-viewer");


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
const clickEvent = gallery.addEventListener("click", galleryClicked);


function showModal(img) {
    let modal = document.createElement('dialog');
    modal.innerHTML = `<img src="${img}"><button class="close-viewer">X</button>`;
    document.body.appendChild(modal);
    let modalBtn = modal.querySelector(".close-viewer");
    modal.showModal();
    function closeBtn(closeBtn) {
        if (closeBtn.target.classList.contains("close-viewer")) {
            modal.close();
            modal.remove();
        }
    }
    const closeModal = modalBtn.addEventListener("click", closeBtn);
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.close();
            modal.remove();
        }
    });
}