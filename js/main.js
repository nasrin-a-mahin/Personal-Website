
const lamp = document.getElementById("lamp");

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark-mode");
}

// Click lamp to toggle theme
lamp.addEventListener("click", () => {
    const isDark = document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Swing animation
    lamp.classList.remove("swing");
    void lamp.offsetWidth;
    lamp.classList.add("swing");
});

function forceDownload() {
    const link = document.createElement("a");
    link.href = "resume/Nasrin_A_Mahin_Resume.pdf";
    link.download = "Nasrin_A_Mahin_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}
