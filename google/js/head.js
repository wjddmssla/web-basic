const navRoundButton = document.querySelector(".nav-round-button");
const navItemBox = document.querySelector(".nav-item-box");

navRoundButton.onclick = () => {
    navItemBox.classList.toggle("visible");
}