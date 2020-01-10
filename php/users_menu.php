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
$myStr = "";
if(!empty($_SESSION['userData'])){
    $user = $_SESSION['userData'];

    $user_id = $user['user_id'];
     
    //When loaded from script, get selected user from referer       
    parse_str(parse_url($_SERVER['HTTP_REFERER'], PHP_URL_QUERY), $queries);
    if(!empty($queries['stu_id'])) $user_id = $queries['stu_id'];

    //Can be called directly for debugging
    if(!empty($_REQUEST["stu_id"])) $user_id = $_REQUEST["stu_id"];
    if($user['isAdmin']) {
        $sqlstr = "SELECT DISTINCT stu_id,first_name,last_name,grad_year FROM courses ORDER BY first_name,last_name";
    }
    else{
        $sqlstr = "SELECT DISTINCT stu_id,first_name,last_name,grad_year FROM courses WHERE advisor_id='".$user['user_id']."'";
    }
    $sql = sprintf($sqlstr);

    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    	$myStr ='<form method="get"><select class="custom-select" onchange="this.form.submit()" name="stu_id">';
    	 $myStr .= '<option selected disabled hidden>View student</option>';

    	while($row = $result->fetch_assoc()) {
        $selected = "";
        if($row["stu_id"] == $user_id) $selected = " selected";
        $myStr .= '<option'.$selected.' value="'.$row["stu_id"].'">'.$row["first_name"]." ".
    	$row["last_name"].' '.$row["grad_year"].'</option>';
        }
        $myStr .= '</select></form>';
    }
}

echo $myStr;

$conn->close();