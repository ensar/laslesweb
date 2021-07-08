let menuBtn = document.querySelector(".nav-btn");
let menu = document.querySelector(".menu");
var i = document.querySelector(".fas")


menuBtn.addEventListener("click",()=>{
    menu.classList.toggle("active");
    if(menu.classList.contains("active")){
        i.classList.remove("fa-bars");
        i.classList.add("fa-times")
    }else{
        i.classList.remove("fa-times")
        i.classList.add("fa-bars")
    }
})
