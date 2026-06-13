const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 25px 60px rgba(0, 0, 0, 0.18)";
    card.style.transition = "0.3s ease";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 15px 40px rgba(0, 0, 0, 0.08)";
});