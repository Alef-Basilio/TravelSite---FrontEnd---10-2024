const mobileMenuButton = document.querySelector(".mobileMenu ul").lastElementChild;
const mainMenu = document.querySelector(".menu");
const mainMenuClose = mainMenu.firstElementChild.firstElementChild.firstElementChild;
const navbar = document.querySelector(".navbar");
let mainMenuOpen = false;

mobileMenuButton.addEventListener("click", () => {
    if (window.innerWidth < 1200) {
        mobileMenuButton.style.opacity = "0";
        mainMenu.style.left = "0";
        mainMenuOpen = true;
    }
});

mainMenuClose.addEventListener("click", () => {
    if (window.innerWidth < 1200) {
        mobileMenuButton.style.opacity = "1";
        mainMenu.style.left = "100vw";
        mainMenuOpen = false;
    }
});

setInterval(() => {
    if (window.innerWidth >= 1200) {
        mobileMenuButton.style.opacity = "0";
        mainMenu.style.display = "flex";
        mainMenu.style.left = "0";
        mainMenuOpen = false;
    } else if (window.innerWidth < 1200 && !mainMenuOpen) {
        mobileMenuButton.style.opacity = "1";
        mainMenu.style.left = "100vw";
    }
}, 1);