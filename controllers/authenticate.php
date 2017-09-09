<?php


/******************** Authenticate ********************/

session_start();

if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
    //echo "Welcome to the member's area, " . $_SESSION['uid'] . "!";
} else {
    //echo "Please log in first to see this page.";
	header('Location: index.php');
}


/******************** //Authenticate ********************/


?>