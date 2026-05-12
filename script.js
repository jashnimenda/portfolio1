// Typing animation
const text = ["AI & ML Student", "Full Stack Developer", "Tech Enthusiast"];
let i = 0, j = 0, currentText = "", isDeleting = false;

function type() {
    currentText = text[i];

    if (!isDeleting) {
        document.getElementById("typing").innerHTML = currentText.substring(0, j++);
        if (j > currentText.length) {
            isDeleting = true;
            setTimeout(type, 1000);
            return;
        }
    } else {
        document.getElementById("typing").innerHTML = currentText.substring(0, j--);
        if (j < 0) {
            isDeleting = false;
            i = (i + 1) % text.length;
        }
    }

    setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Scroll animation
window.addEventListener("scroll", () => {
    document.querySelectorAll("section").forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
});