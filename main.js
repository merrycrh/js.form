setInterval(createTelegram, 100)
setInterval(createInstagram, 100)
setInterval(createTwitter, 100)
setInterval(createYoutube, 100)

function createTelegram() {
    const telegram = document.createElement("i");
    telegram.classList.add("fa-brands");
    telegram.classList.add("fa-telegram");

    telegram.style.left = Math.random() * window.innerWidth + "px";
    telegram.style.animationDuration = Math.random() * 3 +2 + "s";
    telegram.style.opacity = Math.random();
    document.body.append(telegram);

    setTimeout(() => {
        telegram.remove();
    }, 4000);
}

function createInstagram() {
    const instagram = document.createElement("i");
    instagram.classList.add("fa-brands");
    instagram.classList.add("fa-instagram");

    instagram.style.left = Math.random() * window.innerWidth + "px";
    instagram.style.animationDuration = Math.random() * 3 +2 + "s";
    instagram.style.opacity = Math.random();
    document.body.append(instagram);

    setTimeout(() => {
        instagram.remove();
    }, 4000);
}

function createTwitter() {
    const twitter = document.createElement("i");
    twitter.classList.add("fa-brands");
    twitter.classList.add("fa-square-twitter");

    twitter.style.left = Math.random() * window.innerWidth + "px";
    twitter.style.animationDuration = Math.random() * 3 +2 + "s";
    twitter.style.opacity = Math.random();
    document.body.append(twitter);

    setTimeout(() => {
        twitter.remove();
    }, 4000);
}

function createYoutube() {
    const youatube = document.createElement("i");
    youatube.classList.add("fa-brands");
    youatube.classList.add("fa-youtube");

    youatube.style.left = Math.random() * window.innerWidth + "px";
    youatube.style.animationDuration = Math.random() * 3 +2 + "s";
    youatube.style.opacity = Math.random();
    document.body.append(youatube);

    setTimeout(() => {
        youatube.remove();
    }, 4000);
}