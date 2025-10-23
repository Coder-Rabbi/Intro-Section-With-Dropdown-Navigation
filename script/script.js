const mainContainer = document.querySelector(".main-container");
const openMenuBtn = document.querySelector(".open_menu-icon");
const closeMenuBtn = document.querySelector(".close_menu-icon");
const sideBar = document.querySelector(".navbar_links");

openMenuBtn.addEventListener("click",() => {
    mainContainer.classList.add("overlay");
    sideBar.classList.add("open-sidebar");
    document.body.classList.add("no-scroll");
})

closeMenuBtn.addEventListener("click",() => {
    mainContainer.classList.remove("overlay");
    sideBar.classList.remove("open-sidebar");
    document.body.classList.remove("no-scroll");

})


const mainMenus = document.querySelectorAll(".mainMenu");
mainMenus.forEach(mainMenu => {
    mainMenu.addEventListener("click", () => {
        mainMenu.classList.toggle("active");
    })
} )


window.addEventListener("resize", () => {
    if(window.innerWidth > 850){ 
        mainContainer.classList.remove("overlay");
    } else{
        if(sideBar.classList.contains("open-sidebar")){
            mainContainer.classList.add("overlay");
        }
    }
})


const menuLinks = document.querySelectorAll(".links a");
menuLinks.forEach(menu => {
    menu.addEventListener("click",() => {
        menuLinks.forEach(unActive => unActive.classList.remove("active"));
        menu.classList.add("active");
    })
})
