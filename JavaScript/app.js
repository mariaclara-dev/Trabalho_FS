document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const alturaHeader = header.offsetHeight;

    window.addEventListener("scroll", function () {
        if (window.scrollY > alturaHeader) {
            header.classList.add("header-fixo");
            document.body.style.paddingTop = alturaHeader + "px";
        } else {
            header.classList.remove("header-fixo");
            document.body.style.paddingTop = "0";
        }
    });
});
