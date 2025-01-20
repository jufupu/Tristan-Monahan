<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if an ID was provided
if (!isset($_GET['id'])) {
    die('No book ID provided');
}

$bookId = $_GET['id'];
$updateMessage = ''; // Variable to store any error messages

// Use the separated database functions file
require_once 'database-functions.php';
$bookDetails = fetchBookDetailsFromDatabase($bookId);

// Handle form submission
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    try {
        $pdo = new PDO("mysql:host=localhost;dbname=bookshelf", "root", "");
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        $sql = "UPDATE books SET 
                title = :title,
                author = :author,
                description = :description,
                genre = :genre,
                publication_date = :publication_date,
                page_count = :page_count,
                quote = :quote,
                review = :review,
                cover_url = :cover_url
                WHERE id = :id";

        $stmt = $pdo->prepare($sql);
        $stmt->execute([
            'title' => $_POST['title'],
            'author' => $_POST['author'],
            'description' => $_POST['description'],
            'genre' => $_POST['genre'],
            'publication_date' => $_POST['publication_date'],
            'page_count' => $_POST['page_count'],
            'quote' => $_POST['quote'],
            'review' => $_POST['review'],
            'cover_url' => $_POST['cover_url'],
            'id' => $bookId
        ]);

        header("Location: book-details.php?id=$bookId");
        exit;
    } catch (PDOException $e) {
        $updateMessage = "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Update Book - <?php echo htmlspecialchars($bookDetails['title']); ?></title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
        <div class="container-fluid">
            <a class="navbar-brand" href="index.php">my favourite books</a>
        </div>
    </nav>

    <div class="container py-5 mt-4">
        <h1 class="mb-4">Update Book Details</h1>
        <form method="POST" class="needs-validation" novalidate>
            <div class="mb-3">
                <label for="title" class="form-label">Title</label>
                <input type="text" class="form-control" id="title" name="title" value="<?php echo htmlspecialchars($bookDetails['title']); ?>" required>
            </div>

            <div class="mb-3">
                <label for="author" class="form-label">Author</label>
                <input type="text" class="form-control" id="author" name="author" value="<?php echo htmlspecialchars($bookDetails['author']); ?>" required>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" name="description" rows="5" required><?php echo htmlspecialchars($bookDetails['description']); ?></textarea>
            </div>

            <div class="mb-3">
                <label for="genre" class="form-label">Genre</label>
                <input type="text" class="form-control" id="genre" name="genre" value="<?php echo htmlspecialchars($bookDetails['genre']); ?>" required>
            </div>

            <div class="mb-3">
                <label for="publication_date" class="form-label">Publication Date</label>
                <input type="date" class="form-control" id="publication_date" name="publication_date" value="<?php echo htmlspecialchars($bookDetails['publication_date']); ?>" required>
            </div>

            <div class="mb-3">
                <label for="page_count" class="form-label">Page Count</label>
                <input type="number" class="form-control" id="page_count" name="page_count" value="<?php echo htmlspecialchars($bookDetails['page_count']); ?>" required>
            </div>

            <div class="mb-3">
                <label for="quote" class="form-label">Notable Quote</label>
                <textarea class="form-control" id="quote" name="quote" rows="2"><?php echo htmlspecialchars($bookDetails['quote'] ?? ''); ?></textarea>
            </div>

            <div class="mb-3">
                <label for="review" class="form-label">Review</label>
                <textarea class="form-control" id="review" name="review" rows="3"><?php echo htmlspecialchars($bookDetails['review'] ?? ''); ?></textarea>
            </div>

            <div class="mb-3">
                <label for="cover_url" class="form-label">Cover URL</label>
                <input type="url" class="form-control" id="cover_url" name="cover_url" value="<?php echo htmlspecialchars($bookDetails['cover_url']); ?>">
            </div>

            <div class="mb-3">
                <button type="submit" class="btn btn-primary">Update Book</button>
                <a href="book-details.php?id=<?php echo htmlspecialchars($bookId); ?>" class="btn btn-secondary">Cancel</a>
            </div>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Scroll down by a specific amount when the page loads
        window.onload = function() {
            window.scrollTo({
                top: 900, 
                behavior: 'smooth'
            });
        };
    </script>
</body>
</html>
