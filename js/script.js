console.log("script.js is connected!");

const factBtn = document.querySelector("#fact-btn");
const funFact = document.querySelector("#fun-fact");

if (factBtn && funFact) {
    factBtn.addEventListener("click", function () {
        funFact.style.display = "block";
    });
}


const skillPills = document.querySelectorAll(".skill-pill");

skillPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
        const detail = pill.querySelector(".skill-detail");

        if (detail) {
            detail.style.display = "inline";
        }
    });
});


// 🌙 DARK MODE
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Load saved setting
if (localStorage.getItem("darkMode") === "on") {
    document.documentElement.classList.add("dark-mode");
    darkModeToggle.checked = true;
}

// Change dark mode immediately
darkModeToggle.addEventListener("change", function () {

    if (darkModeToggle.checked) {
        document.documentElement.classList.add("dark-mode");
        localStorage.setItem("darkMode", "on");
    } else {
        document.documentElement.classList.remove("dark-mode");
        localStorage.setItem("darkMode", "off");
    }

});
