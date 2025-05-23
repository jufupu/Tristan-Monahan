<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if an ID was provided
if (!isset($_GET['id'])) {
    die('No book ID provided');
}

$bookId = $_GET['id'];

// Fetch book details
$bookDetails = fetchBookDetailsFromDatabase($bookId);

// If no book was found, show an error
if (!$bookDetails) {
    die('Book not found. Please check the database connection and query.');
}

// Function to fetch book details
function fetchBookDetailsFromDatabase($id) {
    // Database connection details
    $host = 'localhost';
    $dbname = 'bookshelf';
    $username = 'root';
    $password = '';

    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Fetch ratings for this specific book
        $stmt = $pdo->prepare("SELECT 
            MAX(CASE WHEN category = 'World' THEN rating END) AS world_rating,
            MAX(CASE WHEN category = 'Characters' THEN rating END) AS character_rating,
            MAX(CASE WHEN category = 'Story' THEN rating END) AS story_rating
            FROM ratings 
            WHERE book_id = :book_id");
        $stmt->execute(['book_id' => $id]);
        $ratings = $stmt->fetch(PDO::FETCH_ASSOC);

        // Fetch other book details
        $stmt = $pdo->prepare("SELECT * FROM books WHERE id = :id");
        $stmt->execute(['id' => $id]);
        $book = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($book) {
            // Combine book details with ratings
            return array_merge($book, ['ratings' => $ratings]);
        } else {
            echo "No book found with ID: $id<br>";
            return false;
        }
    } catch (PDOException $e) {
        echo "Database error: " . $e->getMessage() . "<br>";
        return false;
    }
}

// Assuming $bookDetails contains all the necessary information, including 'background_image'
$backgroundImage = htmlspecialchars($bookDetails['cover_url'] ?? '../images/default-background.jpg');
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo htmlspecialchars($bookDetails['title']); ?> - Book Details</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="stylesheet" href="css/book-details.css">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top ">
        <div class="container-fluid">
              <a class="navbar-brand" href="index.php">my favourite books</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
        </div>
    </nav>
    <div class="container py-5 mt-4">
        <div class="row book-details-container" id="book-details">
            <div class="col-md-4">
                <div class="book-cover-container mb-4">
                    <img src="<?php echo htmlspecialchars($bookDetails['cover_url']); ?>" alt="<?php echo htmlspecialchars($bookDetails['title']); ?> Cover" class="img-fluid book-cover">
                </div>
                <div class="book-meta">
                    <p><i class="fas fa-calendar-alt"></i> Published: <?php echo htmlspecialchars($bookDetails['publication_date']); ?></p>
                    <p><i class="fas fa-bookmark"></i> Genre: <?php echo htmlspecialchars($bookDetails['genre']); ?></p>
                    <p><i class="fas fa-file-alt"></i> Pages: <?php echo htmlspecialchars($bookDetails['page_count']); ?></p>
                </div>
            </div>
            <div class="col-md-8">
                <h1 class="book-title"><?php echo htmlspecialchars($bookDetails['title']); ?></h1>
                <h2 class="book-author">By <?php echo htmlspecialchars($bookDetails['author']); ?></h2>

                <div class="book-ratings row mb-4">
                    <h3>Ratings</h3>
                    <div class="rating-item col-4">
                        <div class="circular-progress">
                            <span class="progress-value">0%</span>
                        </div>
                        <span class="book-rating-title">World</span>
                    </div>
                    <div class="rating-item col-4">
                        <div class="circular-progress">
                            <span class="progress-value">0%</span>
                        </div>
                        <span class="book-rating-title">Characters</span>
                    </div>
                    <div class="rating-item col-4">
                        <div class="circular-progress">
                            <span class="progress-value">0%</span>
                        </div>
                        <span class="book-rating-title">Story</span>
                    </div>
                </div>

                <div class="book-description mb-4">
                    <h3>Description</h3>
                    <p><?php echo nl2br(htmlspecialchars($bookDetails['description'])); ?></p>
                </div>

                <div class="book-quotes mb-4">
                    <h3>Notable Quotes</h3>
                    <blockquote class="blockquote">
                        <p>"<?php echo htmlspecialchars($bookDetails['quote'] ?? 'No notable quotes available.'); ?>"</p>
                    </blockquote>
                </div>

                <div class="book-reviews mb-4">
                    <h3>My Review</h3>
                    <div class="review">
                        <p class="review-text">"<?php echo htmlspecialchars($bookDetails['review'] ?? 'No reviews available yet.'); ?>"</p>
                    </div>
                </div>

                <div class="text-center">
                    <a href="index.php" class="btn btn-primary btn-lg">Back to Book List</a>
                    <a href="update-book.php?id=<?php echo htmlspecialchars($bookId); ?>" class="btn btn-secondary btn-lg">Update Book</a>
                    <button type="button" class="btn btn-danger btn-lg" data-bs-toggle="modal" data-bs-target="#deleteModal">
                        Delete Book
                    </button>
                </div>

                <!-- Delete Confirmation Modal -->
                <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="deleteModalLabel">Confirm Delete</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                Are you sure you want to delete this book? This action cannot be undone.
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
                                <a href="delete-book.php?id=<?php echo htmlspecialchars($bookId); ?>" class="btn btn-danger">Delete Book</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <!-- GSAP library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>

    <!-- Custom JavaScript -->
    <script src="js/script.js"></script>

    <script id="ratings-data" type="application/json">
        [
            <?php 
            echo ($bookDetails['ratings']['world_rating'] ?? 0) . ', ' .
                 ($bookDetails['ratings']['character_rating'] ?? 0) . ', ' .
                 ($bookDetails['ratings']['story_rating'] ?? 0);
            ?>
        ]
    </script>
</body>
</html>