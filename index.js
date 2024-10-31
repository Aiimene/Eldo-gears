$(document).ready(function() {
    let lastScrollTop = 0;
    const navbar = $(".nav");
    let currentScroll = 0;

    // Scroll event for hiding navbar
    $(window).on('scroll', function() {
        currentScroll = $(this).scrollTop();

        if (currentScroll > lastScrollTop) {
            navbar.addClass('hidden'); // Add 'hidden' class to navbar
        } else {
            navbar.removeClass('hidden'); // Remove 'hidden' class to show navbar
        }
        lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
    });

    $(document).ready(function() {
      let lastScrollTop = 0;
      const navbar = $(".nav");
      let currentScroll = 0;

      // Scroll event for hiding navbar
      $(window).on('scroll', function() {
          currentScroll = $(this).scrollTop();

          if (currentScroll > lastScrollTop) {
              navbar.addClass('hidden'); // Add 'hidden' class to navbar
          } else {
              navbar.removeClass('hidden'); // Remove 'hidden' class to show navbar
          }
          lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
      });

      let currentIndex = 0; // Initialize current index for the carousel

      function moveSlide(direction) {
          const slides = document.querySelectorAll('.select-image img');
          const totalSlides = slides.length;

          // Update current index
          currentIndex += direction;

          // Loop around the slides
          if (currentIndex < 0) {
              currentIndex = totalSlides - 1; // Go to the last slide
          } else if (currentIndex >= totalSlides) {
              currentIndex = 0; // Go to the first slide
          }

          // Move the slides
          const offset = -currentIndex * 100; // Calculate the offset
          document.querySelector('.select-image').style.transform = `translateX(${offset}%)`;
      }

      // Event listeners for slide buttons
      $('.nav-button.left').on('click', function() {
          moveSlide(-1); // Move to the previous slide
      });

      $('.nav-button.right').on('click', function() {
          moveSlide(1); // Move to the next slide
      });

      // Automatically move slides every 2 seconds
      setInterval(function() {
          moveSlide(1); // Automatically move to the next slide
      }, 5000); // 2000 milliseconds = 2 seconds
  });

  
});