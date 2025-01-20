<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection
$host = 'localhost';
$dbname = 'bookshelf';
$username = 'root';
$password = '';

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        // Handle file upload for cover image
        $targetDir = "uploads/covers/";
        if (!file_exists($targetDir)) {
            mkdir($targetDir, 0777, true);
        }
        
        $coverUrl = '';
        if (isset($_FILES["cover_image"]) && $_FILES["cover_image"]["error"] == 0) {
            $fileName = basename($_FILES["cover_image"]["name"]);
            $targetFilePath = $targetDir . $fileName;
            if (move_uploaded_file($_FILES["cover_image"]["tmp_name"], $targetFilePath)) {
                $coverUrl = $targetFilePath;
            }
        }

        // Insert book details
        $stmt = $pdo->prepare("INSERT INTO books (title, author, description, genre, publication_date, page_count, cover_url, quote, review) 
                              VALUES (:title, :author, :description, :genre, :publication_date, :page_count, :cover_url, :quote, :review)");
        
        $stmt->execute([
            'title' => $_POST['title'],
            'author' => $_POST['author'],
            'description' => $_POST['description'],
            'genre' => $_POST['genre'],
            'publication_date' => $_POST['publication_date'],
            'page_count' => $_POST['page_count'],
            'cover_url' => $coverUrl,
            'quote' => $_POST['quote'],
            'review' => $_POST['review']
        ]);

        $bookId = $pdo->lastInsertId();

        // Insert ratings
        $ratingStmt = $pdo->prepare("INSERT INTO ratings (book_id, category, rating) VALUES (:book_id, :category, :rating)");
        
        $ratings = [
            'World' => $_POST['world_rating'],
            'Characters' => $_POST['character_rating'],
            'Story' => $_POST['story_rating']
        ];

        foreach ($ratings as $category => $rating) {
            $ratingStmt->execute([
                'book_id' => $bookId,
                'category' => $category,
                'rating' => $rating
            ]);
        }

        $success = "Book added successfully!";
    } catch(PDOException $e) {
        $error = "Error: " . $e->getMessage();
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add New Book</title>
    <!-- Bootstrap CSS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="css/styles.css">
</head>
<body>
<nav class="navbar navbar-expand-lg navbar-light fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand" href="index.php">my favourite books</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span class="navbar-toggler-icon"></span>
        </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="/add-book.php">Add Book</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <div class="container py-5 mt-4">
        <h1 class="mb-4">Add New Book</h1>

        <?php if (isset($success)): ?>
            <div class="alert alert-success"><?php echo $success; ?></div>
        <?php endif; ?>

        <?php if (isset($error)): ?>
            <div class="alert alert-danger"><?php echo $error; ?></div>
        <?php endif; ?>

        <form method="POST" enctype="multipart/form-data" class="needs-validation" novalidate>
            <div class="row">
                <div class="col-md-6 mb-3">
                    <label for="title" class="form-label">Title</label>
                    <input type="text" class="form-control" id="title" name="title" required>
                </div>

                <div class="col-md-6 mb-3">
                    <label for="author" class="form-label">Author</label>
                    <input type="text" class="form-control" id="author" name="author" required>
                </div>
            </div>

            <div class="mb-3">
                <label for="description" class="form-label">Description</label>
                <textarea class="form-control" id="description" name="description" rows="4" required></textarea>
            </div>

            <div class="row">
                <div class="col-md-4 mb-3">
                    <label for="genre" class="form-label">Genre</label>
                    <input type="text" class="form-control" id="genre" name="genre" required>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="publication_date" class="form-label">Publication Date</label>
                    <input type="date" class="form-control" id="publication_date" name="publication_date" required>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="page_count" class="form-label">Page Count</label>
                    <input type="number" class="form-control" id="page_count" name="page_count" required>
                </div>
            </div>

            <div class="mb-3">
                <label for="cover_image" class="form-label">Cover Image</label>
                <input type="file" class="form-control" id="cover_image" name="cover_image" accept="image/*" required>
            </div>

            <div class="mb-3">
                <label for="quote" class="form-label">Notable Quote</label>
                <textarea class="form-control" id="quote" name="quote" rows="2"></textarea>
            </div>

            <div class="mb-3">
                <label for="review" class="form-label">Your Review</label>
                <textarea class="form-control" id="review" name="review" rows="3"></textarea>
            </div>

            <div class="row">
                <div class="col-md-4 mb-3">
                    <label for="world_rating" class="form-label">World Rating (0-100)</label>
                    <input type="number" class="form-control" id="world_rating" name="world_rating" min="0" max="100" required>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="character_rating" class="form-label">Character Rating (0-100)</label>
                    <input type="number" class="form-control" id="character_rating" name="character_rating" min="0" max="100" required>
                </div>

                <div class="col-md-4 mb-3">
                    <label for="story_rating" class="form-label">Story Rating (0-100)</label>
                    <input type="number" class="form-control" id="story_rating" name="story_rating" min="0" max="100" required>
                </div>
            </div>

            <button type="submit" class="btn btn-primary">Add Book</button>
        </form>
    </div>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        // Form validation
        (function () {
            'use strict'
            var forms = document.querySelectorAll('.needs-validation')
            Array.prototype.slice.call(forms)
                .forEach(function (form) {
                    form.addEventListener('submit', function (event) {
                        if (!form.checkValidity()) {
                            event.preventDefault()
                            event.stopPropagation()
                        }
                        form.classList.add('was-validated')
                    }, false)
                })
        })()
    </script>
</body>
</html>
