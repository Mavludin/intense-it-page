/*!
=========================================================
* Ollie Landing page
=========================================================

* Copyright: 2019 DevCRUD (https://devcrud.com)
* Licensed: (https://devcrud.com/licenses)
* Coded by www.devcrud.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// smooth scroll
// smooth scroll
$(document).ready(function () {

    $(".navbar .nav-link").on('click', function (event) {

        if (this.hash !== "") {

            event.preventDefault();

            window.scrollTo({
                top: document.getElementById(this.hash.replace('#', '')).offsetTop - 80,
                behavior: "smooth"
            });
        }
    });

    $("#know-more").on('click', function (event) {
        window.scrollTo({
            top: document.getElementById("aboutproject").offsetTop - 80,
            behavior: "smooth"
        });
    });

    $("#reactBtn").on('click', function () {
        $("#reactBtn")
    });
});

// portfolio carousel
$('#owl-portfolio').owlCarousel({
    margin: 30,
    dots: true,
    responsiveClass: true,
    nav: false,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 3,
        },
        1000: {
            items: 4,
            loop: false
        }
    }
});

// testmonial carousel
$('#owl-testmonial').owlCarousel({
    center: true,
    items: 1,
    loop: true,
    nav: true,
    dots: false
});

const aboutUS = document.getElementById("aboutus");
const toAboutUsBtn = document.getElementById("to-aboutus");

toAboutUsBtn.addEventListener('click', () => {
    window.scrollTo({
        top: aboutUS.offsetTop - 80,
        behavior: "smooth"
    });
});

const headerLinks = document.querySelectorAll('.navbar-collapse.collapse .nav-link');
const hamburgerBtn = document.querySelector('#scrollspy .navbar-toggler');

headerLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (document.querySelector('.navbar-collapse.collapse.show')) {
            hamburgerBtn.click();
        };
    });
});

const popovers = document.querySelectorAll('.popoverBtn');

popovers.forEach((over) => {
    new bootstrap.Popover(over, { trigger: 'focus' })
})