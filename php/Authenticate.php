     <?php
      if(isset($_GET['code'])){
            $gClient->authenticate($_GET['code']);
            $_SESSION['token'] = $gClient->getAccessToken();
            header('Location: '.$_SERVER['PHP_SELF']);
            die;
        }

        if(isset($_SESSION['token'])){
            $gClient->setAccessToken($_SESSION['token']);
        }

        if($gClient->getAccessToken()){
    // Get user profile data from google
    $gpUserProfile = $google_oauthV2->userinfo->get();
    // Initialize User class
    $user = new User();
    
    // Getting user profile info
    $gpUserData = array();
    $gpUserData['oauth_uid']  = !empty($gpUserProfile['id'])?$gpUserProfile['id']:'';
    $gpUserData['first_name'] = !empty($gpUserProfile['given_name'])?$gpUserProfile['given_name']:'';
    $gpUserData['last_name']  = !empty($gpUserProfile['family_name'])?$gpUserProfile['family_name']:'';
    $gpUserData['email']      = !empty($gpUserProfile['email'])?$gpUserProfile['email']:'';
    $gpUserData['gender']     = !empty($gpUserProfile['gender'])?$gpUserProfile['gender']:'';
    $gpUserData['locale']     = !empty($gpUserProfile['locale'])?$gpUserProfile['locale']:'';
    $gpUserData['picture']    = !empty($gpUserProfile['picture'])?$gpUserProfile['picture']:'';
    $gpUserData['link']       = !empty($gpUserProfile['link'])?$gpUserProfile['link']:'';
    
    // Insert or update user data to the database
    $gpUserData['oauth_provider'] = 'google';
    $userData = $user->checkUser($gpUserData);

    // Storing user data in the session
    $stu_id = $userData['user_id'];
    if(!empty($_REQUEST["stu_id"])) $stu_id = $_REQUEST["stu_id"];
    $userData['stu_id'] = $stu_id;
    $_SESSION['userData'] = $userData; 
//    error_log( print_r($userData, TRUE) );
    setLocalStorage("user_id",$userData['user_id']);
    setLocalStorage("first_name",$userData['first_name']); 
    setLocalStorage("last_name",$userData['last_name']);
    setLocalStorage("email",$userData['email']);
    setLocalStorage("picture",$userData['picture']);
    setLocalStorage("stu_id",$userData['stu_id']);

    $output = '<button><a href="logout.php">Logout</a></button>';
}

else{
    // Get login url
    $authUrl = $gClient->createAuthUrl();
    
    // Render google login button
    $output = '<button><a href="'.filter_var($authUrl, FILTER_SANITIZE_URL).'">Login</a></button>';
}
// echo $output;
// error_log($output);
setLocalStorage("login_button",base64_encode($output));

