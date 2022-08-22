const navRoundButton = document.querySelector(".nav-round-button");
const navItemBox = navRoundButton.querySelector(".nav-item-box");

navRoundButton.onclick = () => {
    navItemBox.classList.togger("visible");
}