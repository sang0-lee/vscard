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

const phoneCopyButton = document.getElementById("phoneCopyButton");
const phoneText = document.getElementById("phoneText");

const copyMessage = document.getElementById("copyMessage");
const githubButton = document.getElementById("githubButton");

emailButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(emailText.textContent.trim());
        showCopyMessage("이메일이 복사되었습니다.");
    } catch (error) {
        alert("이메일 복사 실패");
    }
});

phoneCopyButton.addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(phoneText.textContent.trim());
        showCopyMessage("전화번호가 복사되었습니다.");
    } catch (error) {
        alert("전화번호 복사 실패");
    }
});

githubButton.addEventListener("click", () => {
    window.open("https://github.com/sang0-lee", "_blank");
});

function showCopyMessage(message) {
    copyMessage.textContent = message;
    copyMessage.classList.add("show");

    setTimeout(() => {
        copyMessage.classList.remove("show");
    }, 2000);
}