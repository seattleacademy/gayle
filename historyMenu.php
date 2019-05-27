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

$sql = sprintf('SELECT * FROM registration WHERE stu_id="'.$userData['stu_id'].'"');
// error_log($sql);
$result = $conn->query($sql);
$myStr ='<select class="custom-select" id="historyList" name="saved_courses">';
$myStr .= '<option selected="" disabled="" hidden="">View previous saves</option>';
while($row = $result->fetch_assoc()) {
    $myStr .= '<option value ="'.$row["id"];
    $myStr .= '">'.$row["created"].' '.$row["user_id"].'</option>';
}
$myStr .= '</select>';
echo $myStr;
$myStr = mysqli_error($conn);

$conn->close();