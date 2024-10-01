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
        console.log('Click event on slider container');
        if (e.target.classList.contains('details-btn')) {
            console.log('Details button clicked');
            const slide = e.target.closest('.slider-img');
            if (slide && slide.classList.contains('active')) {
                const title = slide.querySelector('h1').textContent;
                console.log('Fetching details for:', title);
                fetchBookDetails(title);
            } else {
                console.log('Slide is not active or not found');
            }
        }
    });

    function fetchBookDetails(bookTitle) {
        console.log('Fetching book details for:', bookTitle);
        fetch('books.json')
            .then(response => response.json())
            .then(data => {
                console.log('Received data:', data);
                const book = data[bookTitle];
                if (book) {
                    displayBookDetails(book, bookTitle);
                } else {
                    console.error('Book not found in data');
                }
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
            });
    }

    function displayBookDetails(book, bookTitle) {
        console.log('Attempting to display book details for:', bookTitle);
        const detailsSection = document.getElementById('book-details');
        if (!detailsSection) {
            console.error('Book details section not found in HTML');
            alert('Error: Book details section not found in HTML');
            return;
        }
        
        detailsSection.innerHTML = `
            <h2>${bookTitle}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Why I Love This Book:</strong> ${book.personalThoughts}</p>
        `;
        
        console.log('Book details HTML set');
        
        detailsSection.style.display = 'block';
        console.log('Book details section display set to block');
        
        // Scroll to the details section
        detailsSection.scrollIntoView({ behavior: 'smooth' });
        console.log('Scrolled to book details section');
    }
});
