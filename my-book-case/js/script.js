jQuery(document).ready(function ($) {
  $(".slider-img").on("click", function () {
    const clickedImg = $(this);
    
    // Remove active class from all images
    $(".slider-img").removeClass("active");
    
    // Add active class to clicked image
    clickedImg.addClass("active");
    
    // GSAP animation
    gsap.to(".slider-img", {
      duration: 0.7,
      width: "110px",
      height: function(index, target) {
        if (index === 0 || index === 6) return "480px";
        if (index === 1 || index === 5) return "560px";
        return "665px";
      },
      ease: "power2.inOut"
    });
    
    gsap.to(clickedImg, {
      duration: 0.7,
      width: "766px",
      height: "750px",
      ease: "power2.inOut"
    });
    
    // Animate details
    gsap.to(clickedImg.find(".details h2, .details p"), {
      duration: 0.5,
      opacity: 1,
      y: 0,
      stagger: 0.1,
      ease: "power2.out",
      delay: 0.3
    });
    
    // Hide other images' details
    gsap.to(".slider-img:not(.active) .details h2, .slider-img:not(.active) .details p", {
      duration: 0.3,
      opacity: 0,
      y: 20,
      ease: "power2.in"
    });
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container');
    
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

    // Remove the fetchBookDetails and displayBookDetails functions as they're no longer needed here

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

    const progressBars = document.querySelectorAll('.progress-bar');
    
    const animateProgressBar = (bar) => {
        const value = bar.getAttribute('aria-valuenow');
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = value + '%';
        }, 100);
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBar(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    progressBars.forEach(bar => observer.observe(bar));
});