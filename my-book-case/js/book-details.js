document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const bookTitle = urlParams.get('title');

    fetch('books.json')
        .then(response => response.json())
        .then(data => {
            const book = data[bookTitle];
            if (book) {
                document.title = `${bookTitle} - Details`;
                document.getElementById('book-cover').src = book.coverImage;
                document.getElementById('book-cover').alt = `${bookTitle} Cover`;
                document.getElementById('book-title').textContent = bookTitle;
                document.getElementById('book-author').textContent = book.author;
                document.getElementById('book-tagline').textContent = book.tagline;
                document.getElementById('book-description').textContent = book.description;
                document.getElementById('book-thoughts').textContent = book.personalThoughts;
            } else {
                console.error('Book not found');
                // Handle error (e.g., redirect to 404 page or show error message)
            }
        })
        .catch(error => {
            console.error('Error fetching book data:', error);
            // Handle error
        });
});
