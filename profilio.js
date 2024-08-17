document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    const navbar = document.querySelector(".navbar");
    const navbarLinks = navbar.querySelectorAll("a"); // Select all navbar links

    // Function to toggle themes
    function toggleTheme() {
        body.classList.toggle("dark-theme");
        body.classList.toggle("light-theme");
        const linkColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-link-color');
        navbarLinks.forEach(link => {
            link.style.color = linkColor;
        });
        navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-bg-color');
    }

    // Check local storage for user preference
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        body.classList.add(savedTheme);
        const linkColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-link-color');
        navbarLinks.forEach(link => {
            link.style.color = linkColor;
        });
        navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-bg-color');
    } else {
        // Set initial theme based on system preference (light/dark mode)
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        if (prefersDarkMode) {
            body.classList.add("dark-theme");
            const linkColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-link-color');
            navbarLinks.forEach(link => {
                link.style.color = linkColor;
            });
            navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-bg-color');
        } else {
            body.classList.add("light-theme");
            const linkColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-link-color');
            navbarLinks.forEach(link => {
                link.style.color = linkColor;
            });
            navbar.style.backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--navbar-bg-color');
        }
    }

    // Theme switcher button click event
    themeToggle.addEventListener("click", function() {
        toggleTheme();
        const currentTheme = body.classList.contains("dark-theme") ? "dark-theme" : "light-theme";
        localStorage.setItem("theme", currentTheme);
    });
});
