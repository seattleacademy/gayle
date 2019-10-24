<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=yes">
    <link rel="stylesheet" href="css/bootstrap.min.css">
    <link rel="stylesheet" href="css/styles.css">
    <link rel="icon" type="image/ico" href="img/favicon.ico" />
    <title>SAAS Graduation Planner</title>
</head>

<body>
    <script type='text/javascript'>
        localStorage.clear();
    </script>
    <?php
        require_once 'config.php';
        require_once 'php/setLocalStorage.php';
        require_once 'php/User.class.php';
        require_once 'php/Authenticate.php';
        ?>

    <nav class="navbar navbar-expand navbar-light bg-light">
        <!-- Loading from html/nav.html.  Check debugger if you see this message. -->
    </nav>
    <div class="container">
        <div class="alert alert-warning" id="studentAlert" role="alert">
            Student: <span id="users_menu"></span>
        </div>
        <div class="alert alert-warning" id="historyAlert" role="alert">
            <span id=result>Save your changes to see history menu.</span>
        </div>
          <div class="alert alert-warning" id="adviceAlert" role="alert">
            adviceAlert
        </div>
    </div>
    <div class="container" id="maincontainer">
        <!-- Loading content from scripts. Check the debugger if you see this message. -->
    </div>
    <div id="theCourseCommands">
    </div>
    <script src="js/jquery-3.3.1.min.js"></script>
    <script src="js/popper.min.js"></script>
    <script src="js/bootstrap.min.js"></script>
    <script src="js/jquery-sortable.min.js"></script>
    <script src="js/reqs.js"></script>
    <script src="js/courses.js"></script>
    <script src="js/scripts.js"></script>
    <script src="js/autofill.js"></script>

</body>

</html>