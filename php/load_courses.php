<?php

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

$user_id = $user['user_id'];
        
if(!empty($_REQUEST["stu_id"])) $user_id = $_REQUEST["stu_id"];

$sql_courses = sprintf("SELECT * FROM courses WHERE stu_id='%s' ", $user_id);
$result = $conn->query($sql_courses);
        echo '<script>myCourses = [];</script>';
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $term = $row["tri_num"] - 3*($row["grad_year"]-2019);
        echo '<script>myCourses.push({ name: "'.$row["course"].'", req: "'.$row["dept"].'", term: '. $term.' });</script>';
    }
};

echo "<script>setTimeout(updateDom,500);</script>";

$conn->close();

