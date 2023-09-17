const faqs = document.querySelectorAll(".content");

faqs.forEach((content) => {
    content.addEventListener("click", () => {
        content.classList.toggle("active");
    });
});
