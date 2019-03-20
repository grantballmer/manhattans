const categoryTops = document.querySelectorAll(".category__top");

categoryTops.forEach(top =>
  top.addEventListener("click", function() {
    const backgroundImg = this.querySelector(".backgroundImg");
    const category = this.parentElement;
    const dropdown = category.querySelector(".dropdown");
    const menu = category.querySelector(".category__menu");

    category.style.height = "auto";
    category.style.overflow = "hidden";

    backgroundImg.classList.toggle("backgroundImg__display");
    dropdown.classList.toggle("rotate"); // rotate dropdown button
    menu.classList.toggle("expand"); // expand categories menu
  })
);
