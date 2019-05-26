<?php

function setLocalStorage($key,$value) {
    $msg = "";
    $msg .= "<script type='text/javascript'>";
    $msg .= 'localStorage.setItem("';
    $msg .= $key;
    $msg .= '", "';
    $msg .= $value;
    $msg .= '");</script>';
    echo $msg;
}
?>
