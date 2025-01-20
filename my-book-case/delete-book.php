<?php
require_once 'database-functions.php';

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Check if an ID was provided
if (!isset($_GET['id'])) {
    die('No book ID provided');
}

$bookId = $_GET['id'];

try {
    $pdo = new PDO("mysql:host=localhost;dbname=bookshelf", "root", "");
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    // Start transaction
    $pdo->beginTransaction();
    
    // First delete related ratings
    $stmt = $pdo->prepare("DELETE FROM ratings WHERE book_id = ?");
    $stmt->execute([$bookId]);
    
    // Then delete the book
    $stmt = $pdo->prepare("DELETE FROM books WHERE id = ?");
    $stmt->execute([$bookId]);
    
    // Commit transaction
    $pdo->commit();
    
    // Redirect to the index page after deletion
    header("Location: index.php");
    exit;
} catch (PDOException $e) {
    // Rollback transaction on error
    if ($pdo->inTransaction()) {
        $pdo->rollBack();
    }
    die("Error: " . $e->getMessage());
}
?>
