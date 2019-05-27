<?php
require_once 'config.php';
$servername = DB_HOST;
$username = DB_USERNAME;
$password = DB_PASSWORD;
$dbname = DB_NAME;

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

if(!session_id()){
    session_start();
}
$userData = $_SESSION['userData'] ; 
$sql = sprintf("INSERT INTO registration (user_id, stu_id, courses, created) VALUES ('%s','%s', '%s', NOW())", $userData['user_id'],$userData['stu_id'] , $_POST["courses"]);

$result = $conn->query($sql);

$conn->close();
require 'historyMenu.php';