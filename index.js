window.onload = () => {
    let burger = document.querySelector(".menu__burger");
    let menu = document.querySelector(".menu");

    burger.onclick = () => {
        if (burger.dataset.openMenu === "false") {
            menu.style.display = "block";
            burger.dataset.openMenu = "true";
        } else {
            menu.style.display = "none";
            burger.dataset.openMenu = "false";
            menu.removeAttribute("style"); //JavaScript автоматически генерирует аттрибут style="display: none", для того что бы меню не проподало необходимо удалить этот аттрибут
        }
    }
}