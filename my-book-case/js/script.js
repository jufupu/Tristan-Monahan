document.addEventListener('DOMContentLoaded', function () {
  const sliderImages = document.querySelectorAll('.slider-img');

  sliderImages.forEach(img => {
    img.addEventListener('click', function () {
      // Remove active class from all images
      sliderImages.forEach(image => image.classList.remove('active'));

      // Add active class to clicked image
      this.classList.add('active');

      // GSAP animation
      gsap.to('.slider-img', {
        duration: 0.7,
        width: '110px',
        height: function(index, target) {
          if (index === 0 || index === 6) return '480px';
          if (index === 1 || index === 5) return '560px';
          return '665px';
        },
        ease: 'power2.inOut'
      });

      gsap.to(this, {
        duration: 0.7,
        width: '766px',
        height: '750px',
        ease: 'power2.inOut'
      });

      // Animate details
      gsap.to(this.querySelectorAll('.details h2, .details p'), {
        duration: 0.5,
        opacity: 1,
        y: 0,
        stagger: 0.1,
        ease: 'power2.out',
        delay: 0.3
      });

      // Hide other images' details
      gsap.to(document.querySelectorAll('.slider-img:not(.active) .details h2, .slider-img:not(.active) .details p'), {
        duration: 0.3,
        opacity: 0,
        y: 20,
        ease: 'power2.in'
      });
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');

    if (sliderContainer) {
        sliderContainer.addEventListener('click', function(e) {
            if (e.target.classList.contains('details-btn')) {
                const bookId = e.target.getAttribute('data-book-id');
                if (bookId) {
                    // Redirect to the book-details page with the book ID as a parameter
                    window.location.href = `book-details.php?id=${bookId}`;
                } else {
                    console.error('No book ID found on the details button');
                }
            }
        });
    } else {
        console.error('Slider container not found');
    }

    // Simple GSAP animation for details buttons
    const detailsButtons = document.querySelectorAll('.details-btn');

    detailsButtons.forEach(button => {
        // Hover animation
        button.addEventListener('mouseenter', () => {
            gsap.to(button, {
                scale: 1.2,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        button.addEventListener('mouseleave', () => {
            gsap.to(button, {
                scale: 1,
                duration: 0.3,
                ease: 'power1.out'
            });
        });

        // Click animation
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default action temporarily

            gsap.to(button, {
                scale: 1.2,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                onComplete: () => {
                    // Navigate to book details page after animation
                    const bookId = button.getAttribute('data-book-id');
                    if (bookId) {
                        window.location.href = `book-details.php?id=${bookId}`;
                    }
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const circularProgressElements = document.querySelectorAll(".circular-progress");
    const progressValues = document.querySelectorAll(".progress-value");

    // Get ratings dynamically from PHP
    const ratingsDataElement = document.getElementById('ratings-data');

    if (ratingsDataElement) {
        const progressEndValues = JSON.parse(ratingsDataElement.textContent || '[]'); // Fallback to an empty array if textContent is null

        const speed = 10;

        circularProgressElements.forEach((circularProgress, index) => {
            let progressStartValue = 0;
            const progressEndValue = progressEndValues[index]; // Get the corresponding end value

            let progress = setInterval(() => {
                progressStartValue++;

                progressValues[index].textContent = `${progressStartValue}%`;
                circularProgress.style.background = `conic-gradient(#7d2ae8 ${progressStartValue * 3.6}deg, #ededed 0deg)`;

                if (progressStartValue === progressEndValue) {
                    clearInterval(progress);
                }
            }, speed);
        });
    } else {
        console.error('Ratings data element not found');
    }
});
