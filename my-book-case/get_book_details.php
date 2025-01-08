<?php
require_once 'includes/db_connect.php';

if (isset($_GET['id'])) {
    $book_id = intval($_GET['id']);
    
    $sql = "SELECT * FROM books WHERE id = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("i", $book_id);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($book = $result->fetch_assoc()) {
        echo json_encode($book);
    } else {
        echo json_encode(['error' => 'Book not found']);
    }
    
    $stmt->close();
} else {
    echo json_encode(['error' => 'No book ID provided']);
}

$conn->close();