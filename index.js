$(document).ready(function() {
    let lastScrollTop = 0;
    const navbar = $(".nav");
    let currentScroll = 0;

    $(window).on('scroll', function() {
        currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            navbar.addClass('hidden');
        } else {
            navbar.removeClass('hidden');
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    let currentIndex = 0;

    function moveSlide(direction) {
        const slides = document.querySelectorAll('.select-image img');
        const totalSlides = slides.length;

        currentIndex += direction;

        if (currentIndex < 0) {
            currentIndex = totalSlides - 1;
        } else if (currentIndex >= totalSlides) {
            currentIndex = 0;
        }

        const offset = -currentIndex * 100;
        document.querySelector('.select-image').style.transform = `translateX(${offset}%)`;
    }

    $('.nav-button.left').on('click', function() {
        moveSlide(-1);
    });

    $('.nav-button.right').on('click', function() {
        moveSlide(1);
    });

    setInterval(function() {
        moveSlide(1);
    }, 5000);

    let textElement = document.getElementsByClassName("typing-animation")[0];
    let content = [
        "Discover our best offers.",
        "Make auctions and bid.",
        "Sell your car.",
        "Discover experiences of other users.",
        "Select and filter the car that fits your need."
    ];

    let currentIndex2 = 0;
    let images = document.querySelectorAll(".images-services .blur-layer");

    function typeWriterEffect(text, callback) {
        let i = 0;
        textElement.innerHTML = '';
        let interval = setInterval(function() {
            textElement.innerHTML += text[i];
            i++;
            adjustWidth();
            if (i === text.length) {
                clearInterval(interval);
                setTimeout(callback, 4000);
            }
        }, 75);
    }

    function adjustWidth() {
        textElement.style.width = 'auto';
        textElement.style.width = textElement.scrollWidth + 'px';
    }

    function changeImage() {
        images.forEach((image, index) => {
            image.style.display = index === currentIndex2 ? 'block' : 'none';
        });
    }

    function changeTextAndImage() {
        let currentText = content[currentIndex2];
        typeWriterEffect(currentText, function() {
            currentIndex2 = (currentIndex2 + 1) % content.length; 
            changeImage(); 
            changeTextAndImage(); 
        });
    }

    changeImage();
    changeTextAndImage();
});
