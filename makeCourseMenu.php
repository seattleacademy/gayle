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

session_start();

#Creates list of all courses with departments.
$sql = sprintf("SELECT DISTINCT course, dept FROM courses order by dept, course");
$result = $conn->query($sql);
$myStr ='';
while($row = $result->fetch_assoc()) {
    $myStr .= 'courses.push(makeCourse("'.$row["course"] . '", "' . $row["dept"].'"));<br>';
}
 
echo $myStr;

$conn->close();