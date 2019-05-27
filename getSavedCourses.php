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
// error_log( print_r($_REQUEST, TRUE) );

$sql = sprintf('SELECT * FROM registration WHERE id="'.$_REQUEST['courses_id'].'"');
$result = $conn->query($sql);
$myStr ='';
while($row = $result->fetch_assoc()) {
    $myStr .= $row["courses"];
}
echo $myStr;

$conn->close();