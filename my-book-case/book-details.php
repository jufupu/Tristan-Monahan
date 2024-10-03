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

        // Fetch ratings from the database
        $stmt = $pdo->query("SELECT
            MAX(CASE WHEN category = 'World' THEN rating END) AS world_rating,
            MAX(CASE WHEN category = 'Characters' THEN rating END) AS character_rating,
            MAX(CASE WHEN category = 'Story' THEN rating END) AS story_rating
            FROM ratings");

        $ratings = $stmt->fetch(PDO::FETCH_ASSOC);

        $stmt = $pdo->prepare("SELECT * FROM books WHERE id = :id");
        $stmt->execute(['id' => $id]);
        $book = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($book) {
            return $book;
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
              <a class="navbar-brand" href="#">my favourite books</a>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">home</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="#">link</a>
                  </li>
                </ul>
              </div>
        </div>
    </nav>
    <div class="container py-5 mt-4">
        <div class="row book-details-container">
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

                <div class="book-rating mb-4">
                    <?php
                    $rating = isset($bookDetails['rating']) ? $bookDetails['rating'] : 0;
                    for ($i = 1; $i <= 5; $i++) {
                        echo $i <= $rating ? '<i class="fas fa-star"></i>' : '<i class="far fa-star"></i>';
                    }
                    ?>
                    <span class="rating-value"><?php echo number_format($rating, 1); ?></span>
                </div>

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
                    <h3>Reader Reviews</h3>
                    <!-- You can add a loop here to display multiple reviews if available -->
                    <div class="review">
                        <p class="review-text">"<?php echo htmlspecialchars($bookDetails['review'] ?? 'No reviews available yet.'); ?>"</p>
                    </div>
                </div>

                <div class="text-center">
                    <a href="index.php" class="btn btn-primary btn-lg">Back to Book List</a>
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
</body>
</html>
