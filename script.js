$(window).on("load", function() {

    $(".hero-slider").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        nav: true,
        dots: true,
        navText: [
            "<i class=\"fa-solid fa-chevron-left\"></i>",
            "<i class=\"fa-solid fa-chevron-right\"></i>"
        ]
    });

    $(".testimonial-slider").owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        dots: true,
        navText: [
            "<i class=\"fa-solid fa-chevron-left\"></i>",
            "<i class=\"fa-solid fa-chevron-right\"></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1000: {
                items: 2
            }
        }
    });

    let valueDisplays = document.querySelectorAll(".num");
    let interval = 4000;

    valueDisplays.forEach((valueDisplay) => {
        let startValue = 0;
        let endValue = parseInt(valueDisplay.getAttribute("data-val"));
        let duration = Math.floor(interval / endValue);
        let counter = setInterval(function() {
            startValue += 1;
            valueDisplay.textContent = startValue;
            if (startValue == endValue) {
                clearInterval(counter);
            }
        }, duration);
    });
    
    const colorBoxes = document.querySelectorAll(".color-box");
    const root = document.documentElement;
    const gearIcon = document.querySelector(".theme-switcher .gear-icon");
    const themeSwitcher = document.querySelector(".theme-switcher");

    gearIcon.addEventListener("click", function() {
        themeSwitcher.classList.toggle("open");
    });
    
    colorBoxes.forEach(box => {
        box.addEventListener("click", function() {
            let newColor = this.getAttribute("data-color");
            root.style.setProperty("--primary-color", newColor);
        });
    });

    $(window).on('scroll', function() {
        if ($(window).scrollTop() > 100) {
            $('.main-nav').addClass('sticky');
        } else {
            $('.main-nav').removeClass('sticky');
        }
    });

});