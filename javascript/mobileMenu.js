const mobileMenuButton = document.querySelector(".mobileMenu ul").lastElementChild;
const menut = document.querySelector(".menu");
const menutClose = menut.firstElementChild;
const navbar = document.querySelector(".navbar");
let menutOpen = false;

mobileMenuButton.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
        mobileMenuButton.style.opacity = "0";
        menut.style.left = "0";
        menutOpen = true;
    }
});

menutClose.addEventListener("click", () => {
    if (window.innerWidth < 1000) {
        mobileMenuButton.style.opacity = "1";
        menut.style.left = "100vw";
        menutOpen = false;
    }
});

setInterval(() => {
    if (window.innerWidth > 1000) {
        mobileMenuButton.style.opacity = "0";
        menut.style.display = "flex";
        menut.style.left = "0";
        menutOpen = false;
    } else if (window.innerWidth < 1000 && !menutOpen) {
        mobileMenuButton.style.opacity = "1";
        menut.style.left = "100vw";
    }
}, 1);

console.log(mobileMenuButton.children);