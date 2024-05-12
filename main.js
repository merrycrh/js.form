// Function to create social media icons
function createIcon(iconClass) {
    const icon = document.createElement("i");
    icon.classList.add("fa-brands");
    icon.classList.add(iconClass);

    icon.style.left = Math.random() * window.innerWidth + "px";
    icon.style.animationDuration = Math.random() * 3 + 2 + "s";
    icon.style.opacity = Math.random();
    document.querySelector(".social-icons").append(icon);

    setTimeout(() => {
        icon.remove();
    }, 4000);
}

// Create icons at intervals
setInterval(() => createIcon("fa-telegram"), 100);
setInterval(() => createIcon("fa-instagram"), 100);
setInterval(() => createIcon("fa-square-twitter"), 100);
setInterval(() => createIcon("fa-youtube"), 100);
