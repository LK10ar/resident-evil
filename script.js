window.addEventListener("resize", function () {
    let screenWidth = window.innerWidth;
    let menu = document.querySelector(".menu-links");

    if (screenWidth >= 1024) {
        menu.classList.remove("active"); 
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const burger = document.querySelector(".burger-menu");
    const menu = document.querySelector(".menu-mobile");

    burger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });
});