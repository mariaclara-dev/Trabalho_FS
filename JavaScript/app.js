window.addEventListener("scroll", () => {
    const header = document.querySelector("header");

    if (window.scrollY > 80) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const textoSobre = document.querySelector("#sobre-escola p");

    const observer = new IntersectionObserver(
        ([entry]) => {
            if (entry.isIntersecting) {
                textoSobre.classList.add("show");
            }
        },
        {
            threshold: 0.3
        }
    );

    observer.observe(textoSobre);
});
