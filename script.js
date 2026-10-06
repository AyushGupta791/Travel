// ================= MOBILE NAVIGATION =================

const menuButton = document.querySelector(".menu-toggle");

const nav = document.querySelector(".nav-links");


if (menuButton) {

    menuButton.addEventListener("click", function () {

        nav.classList.toggle("open");

    });

}


// Close mobile menu after selecting a link

document.querySelectorAll(".nav-links a").forEach(function (link) {

    link.addEventListener("click", function () {

        if (nav) {

            nav.classList.remove("open");

        }

    });

});


// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

const message = document.getElementById("formMessage");


if (form) {

    form.addEventListener("submit", function () {

        if (message) {

            message.textContent =
                "Your email application will open in your default mail app.";

        }

    });

}