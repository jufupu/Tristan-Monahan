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
            const slide = e.target.closest('.slider-img');
            if (slide && slide.classList.contains('active')) {
                const bookId = e.target.getAttribute('data-book-id');
                if (bookId) {
                    fetchBookDetails(bookId);
                } else {
                    console.error('No book ID found on the details button');
                }
            }
        }
    });

    function fetchBookDetails(bookId) {
        fetch(`get_book_details.php?id=${bookId}`)
            .then(response => response.json())
            .then(data => {
                if (data.error) {
                    console.error(data.error);
                    return;
                }
                
                displayBookDetails(data);
            })
            .catch(error => console.error('Error:', error));
    }

    function displayBookDetails(book) {
        const detailsSection = document.getElementById('book-details');
        detailsSection.innerHTML = `
            <h2>${book.title}</h2>
            <h3>${book.author}</h3>
            <p>${book.description}</p>
        `;
        
        // Show the details section with a GSAP animation
        gsap.to(detailsSection, {
            duration: 0.5,
            opacity: 1,
            y: 0,
            ease: "power2.out",
            onStart: () => detailsSection.style.display = 'block'
        });
    }
});
