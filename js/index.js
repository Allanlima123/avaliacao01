const btnMenu = document.querySelector("#menu-btn");
const navBar = document.querySelector(".nav--bar");
const dropMenu = document.querySelector(".menu--icon");

const drop = document.querySelector(".suspense-box");
console.log(drop)

btnMenu.addEventListener("click", () =>{
    navBar.classList.toggle("active");
})

dropMenu.addEventListener("click", () =>{
    drop.classList.toggle("drop");
})