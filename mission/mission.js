let selectElem = document.querySelector("select");
let logo = document.querySelector(".logo");

selectElem.addEventListener("change", changeTheme);

function changeTheme() {
    // check to see what the current value of our select is.
    // The current value is conveniently found in themeSelector.value!
    let current = selectElem.value;
    if (current == "dark") {
        // add dark class to body
        // change logo to new logo
        document.body.className = "dark";
        logo.src = "byui-logo_white.png";
    } else {
        // remove dark class
        // change logo to original logo
        document.body.className = "";
        logo.src = "byui-logo_blue.webp";
    }
}