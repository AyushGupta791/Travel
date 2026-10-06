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

// ================= SEARCH FUNCTION =================

const searchForm = document.getElementById("searchForm");

const searchInput = document.getElementById("searchInput");

const clearSearch = document.getElementById("clearSearch");


if (searchForm) {

    searchForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const searchTerm =
            searchInput.value.trim().toLowerCase();


        if (searchTerm === "") {

            alert("Please enter a destination to search.");

            return;

        }


        const pageText =
            document.body.innerText.toLowerCase();


        if (pageText.includes(searchTerm)) {

            alert(
                "Destination found on this page!"
            );

        } else {

            alert(
                "Sorry, no matching destination was found."
            );

        }

    });

}


if (clearSearch) {

    clearSearch.addEventListener("click", function() {

        searchInput.value = "";

        searchInput.focus();

    });

}