function toggleMenu() {
    const menu = document.getElementById("navMenu");

    if (menu) {
        menu.classList.toggle("show");
    }
}

document.querySelectorAll(".nav-menu a").forEach(function(link) {
    link.addEventListener("click", function() {
        const menu = document.getElementById("navMenu");

        if (menu) {
            menu.classList.remove("show");
        }
    });
});
