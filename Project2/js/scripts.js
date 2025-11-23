/*!
 * Start Bootstrap - Freelancer v7.0.7 (https://startbootstrap.com/theme/freelancer)
 * Copyright 2013-2023 Start Bootstrap
 * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
 */

window.addEventListener("DOMContentLoaded", (event) => {
    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector("#mainNav");
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove("navbar-shrink");
        } else {
            navbarCollapsible.classList.add("navbar-shrink");
        }
    };

    // Shrink the navbar
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener("scroll", navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector("#mainNav");
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: "#mainNav",
            rootMargin: "0px 0px -40%",
        });
    }

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector(".navbar-toggler");
    const responsiveNavItems = [].slice.call(document.querySelectorAll("#navbarResponsive .nav-link"));
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener("click", () => {
            if (window.getComputedStyle(navbarToggler).display !== "none") {
                navbarToggler.click();
            }
        });
    });

    // Theme Switcher
    const themeSwitch = document.getElementById("flexSwitchCheckDefault");
    const body = document.body;

    themeSwitch.addEventListener("change", () => {
        if (themeSwitch.checked) {
            body.classList.add("dark-theme");
            document.querySelector(".navbar").classList.add("dark-theme");
            document.querySelectorAll(".modal-content").forEach((modal) => {
                modal.classList.add("dark-theme");
            });
            document.querySelectorAll(".card-body").forEach((card) => {
                card.classList.add("dark-theme");
            });
        } else {
            body.classList.remove("dark-theme");
            document.querySelector(".navbar").classList.remove("dark-theme");
            document.querySelectorAll(".modal-content").forEach((modal) => {
                modal.classList.remove("dark-theme");
            });
            document.querySelectorAll(".card-body").forEach((card) => {
                card.classList.remove("dark-theme");
            });
        }
    });

    // Fetch from JSON file
    fetch("assets/list.json")
        .then((response) => response.json())
        .then((data) => {
            displayAllPeopleDetails(data);
        })

    function displayAllPeopleDetails(people) {
        const entityDetailsDiv = document.getElementById("entity-details");
        entityDetailsDiv.innerHTML = "";

        people.forEach((person) => {
            const personDiv = document.createElement("div");
            personDiv.classList.add("col-md-4", "mb-4");

            const cardDiv = document.createElement("div");
            cardDiv.classList.add("card");

            const cardBodyDiv = document.createElement("div");
            cardBodyDiv.classList.add("card-body");

            const nameHeading = document.createElement("h5");
            nameHeading.classList.add("card-title");
            nameHeading.textContent = person.name;

            const descriptionParagraph = document.createElement("p");
            descriptionParagraph.classList.add("card-text");
            descriptionParagraph.textContent = person.description;

            const editButton = document.createElement("button");
            editButton.textContent = "Edit";
            editButton.classList.add("btn", "btn-primary", "me-2");
            editButton.addEventListener("click", () => {
                document.getElementById("editName").value = person.name;
                document.getElementById("editDescription").value = person.description;
                const editModal = new bootstrap.Modal(document.getElementById("editModal"));
                editModal.show();
                document.getElementById("saveChanges").addEventListener("click", () => {
                    nameHeading.textContent = document.getElementById("editName").value;
                    descriptionParagraph.textContent = document.getElementById("editDescription").value;
                    editModal.hide();
                    toastr.success("Changes saved successfully!");
                });
            });

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.classList.add("btn", "btn-danger");
            deleteButton.addEventListener("click", () => {
                const confirmationModal = new bootstrap.Modal(document.getElementById("confirmationModal"));
                confirmationModal.show();
                document.getElementById("confirmDelete").addEventListener("click", () => {
                    personDiv.remove();
                    confirmationModal.hide();
                    toastr.clear();
                    toastr.success(`${person.name}'s information has been deleted successfully!`);
                });
            });

            cardBodyDiv.appendChild(nameHeading);
            cardBodyDiv.appendChild(descriptionParagraph);
            cardBodyDiv.appendChild(editButton);
            cardBodyDiv.appendChild(deleteButton);
            cardDiv.appendChild(cardBodyDiv);
            personDiv.appendChild(cardDiv);
            entityDetailsDiv.appendChild(personDiv);
        });
    }

    // Accordion menu functionality
    const accordionParts = document.querySelectorAll(".accordion-item");

    accordionParts.forEach((item) => {
        const header = item.querySelector(".accordion-header");
        header.addEventListener("click", () => {
            accordionParts.forEach((openItem) => {
                if (openItem !== item) {
                    openItem.classList.remove("active");
                } else {
                    item.classList.toggle("active");
                }
            });
        });
    });
});
