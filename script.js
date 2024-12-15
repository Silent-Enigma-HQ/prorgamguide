// Получаем кнопку
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Отслеживаем прокрутку страницы
window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
    } else {
        scrollToTopBtn.classList.remove("show");
    }
});

// Логика возврата наверх
scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Плавная прокрутка
    });
});
