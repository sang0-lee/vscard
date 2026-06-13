const card = document.querySelector(".card");

card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-10px)";
    card.style.boxShadow = "0 25px 60px rgba(176,21,249,.35)";
});

card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0)";
    card.style.boxShadow = "0 15px 40px rgba(176,21,249,.2)";
});

const emailButton = document.getElementById("emailCopyButton");
const emailText = document.getElementById("emailText");
const copyMessage = document.getElementById("copyMessage");

if (emailButton) {
    emailButton.addEventListener("click", async () => {

        try {

            await navigator.clipboard.writeText(
                emailText.textContent.trim()
            );

            copyMessage.classList.add("show");

            setTimeout(() => {
                copyMessage.classList.remove("show");
            }, 2000);

        } catch (error) {

            alert("이메일 복사 실패");

        }

    });
}

const githubButton = document.getElementById("githubButton");

if (githubButton) {

    githubButton.addEventListener("click", () => {

        window.open(
            "https://github.com/sang0-lee",
            "_blank"
        );

    });

}