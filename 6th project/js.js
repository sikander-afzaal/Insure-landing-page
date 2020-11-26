const hamburger = document.querySelector(".hamburger")
const mobileMenu = document.querySelector(".mobile-menu")
const homeHero = document.querySelector(".home-hero")
const homeServices = document.querySelector(".home-services")
const find = document.querySelector(".home-find-more")
const foot = document.querySelector(".foot-js")
hamburger.addEventListener("click", ()=> {
    if(hamburger.classList.contains("open")){
        hamburger.classList.remove("open")
        mobileMenu.classList.remove("clicked")
        homeHero.classList.remove("display-none")
        homeServices.classList.remove("display-none")
        find.style.display = "flex"
        foot.classList.remove("display-none")
        document.body.style.overflow = "scroll";
    }else{
        mobileMenu.classList.add("clicked")
        hamburger.classList.add("open")
        homeHero.classList.add("display-none")
        homeServices.classList.add("display-none")
        foot.classList.add("display-none")
        find.style.display = "none"
        document.body.style.overflow = "hidden";
    }
})