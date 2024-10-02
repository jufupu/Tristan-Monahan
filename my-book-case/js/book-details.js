document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookTitle = urlParams.get('title');

    if (bookTitle) {
        fetchBookDetails(bookTitle);
    } else {
        console.error('No book title provided in URL');
        document.getElementById('book-details').innerHTML = '<p>Error: No book title provided.</p>';
    }

    function fetchBookDetails(bookTitle) {
        fetch('books.json')
            .then(response => response.json())
            .then(data => {
                const book = data[bookTitle];
                if (book) {
                    displayBookDetails(book, bookTitle);
                } else {
                    console.error('Book not found in data');
                    document.getElementById('book-details').innerHTML = '<p>Error: Book details not found.</p>';
                }
            })
            .catch(error => {
                console.error('Error fetching book data:', error);
                document.getElementById('book-details').innerHTML = '<p>Error fetching book details.</p>';
            });
    }

    function displayBookDetails(book, bookTitle) {
        const detailsSection = document.getElementById('book-details');
        detailsSection.innerHTML = `
            <h2>${bookTitle}</h2>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Description:</strong> ${book.description}</p>
            <p><strong>Why I Love This Book:</strong> ${book.personalThoughts}</p>
        `;
    }
});
