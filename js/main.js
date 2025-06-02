let burgerIcon = document.querySelector(".header-icon");
let menuList = document.querySelector(".header-links_item");
let listItems = document.querySelectorAll(".header-links ul li a");
let landing = document.querySelector(".landing");
let sectionParagraph = document.querySelectorAll(".sec-title + p");
let sectionHehing = document.querySelectorAll(".sec-title");
let btn = document.querySelector(".up");


burgerIcon.onclick = _ => {
    if (menuList.className==="header-links_item hide") {
        menuList.className = "header-links_item";
    } else {
        menuList.className = "header-links_item hide";
    }
};

listItems.forEach((ele, index) => {
    ele.onclick = _ => {
        listItems.forEach((ele) => {
            ele.classList.remove("active");
        });
        ele.classList.add("active");
        menuList.className = "header-links_item hide";
        
        sectionHehing.forEach((ele) => {
            ele.classList.remove("header-color");
        });
        sectionParagraph.forEach((ele) => {
            ele.classList.remove("hide");
        });
        
        if (!(index===listItems.length-1)) {
            sectionHehing[index].classList.add("header-color");
            sectionParagraph[index].classList.add("hide");
        }
    }
});

landing.onclick = _ => {
    if (menuList.className==="header-links_item") {
        menuList.className = "header-links_item hide";
    }
};