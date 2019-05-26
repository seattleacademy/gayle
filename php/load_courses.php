<?php
require_once '../config.php';

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
$user = $_SESSION['userData'];

$stu_id = $user['stu_id'];

$sql_courses = sprintf("SELECT * FROM courses WHERE stu_id='%s' ", $stu_id);
$result = $conn->query($sql_courses);
        echo '<script>myCourses = [];</script>';
        $grad_year="";
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $grad_year = $row["grad_year"];
        $term = $row["tri_num"] - 3*($row["grad_year"]-2019);
        echo '<script>myCourses.push({ name: "'.$row["course"].'", req: "'.$row["dept"].'", term: '. $term.' });</script>';
    }
};

echo "<script>updateDom($grad_year);</script>";

$conn->close();

