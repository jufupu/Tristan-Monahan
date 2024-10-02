<?php
require_once 'includes/db_connect.php';

// Fetch books from the database
$sql = "SELECT id, title, author, cover_url FROM books ORDER BY id ASC";
$result = $conn->query($sql);
$books = $result->fetch_all(MYSQLI_ASSOC);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Bookcase</title>
    <!-- Bootstrap CSS -->
    <script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;700&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
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
    <main>
        <section class="slider-container">
            <div class="slider-images">
                <?php foreach ($books as $index => $book): ?>
                    <div class="slider-img <?php echo $index === 3 ? 'active' : ''; ?>">
                        <img src="<?php echo htmlspecialchars($book['cover_url']); ?>" alt="<?php echo htmlspecialchars($book['title']); ?>" />
                        <h1><?php echo htmlspecialchars($book['title']); ?></h1>
                        <div class="details">
                            <h2><?php echo htmlspecialchars($book['title']); ?></h2>
                            <p><?php echo htmlspecialchars($book['author']); ?></p>
                        </div>
                        <button class="details-btn" data-book-id="<?php echo $book['id']; ?>">Details</button>
                    </div>
                <?php endforeach; ?>
            </div>
        </section>
    </main>
    <!-- Bootstrap JS Bundle with Popper -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    
    <!-- GSAP library -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js"></script>
    
    <!-- Custom JavaScript -->
    <script src="js/script.js"></script>
</body>
</html>
<?php
$conn->close();
?>