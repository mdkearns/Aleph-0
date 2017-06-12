<?php

	// start a session for the user
	
	session_start();

	if (isset($_POST['email'])) $email = $_POST['email'];
	if (isset($_POST['first'])) $first = $_POST['first'];
	if (isset($_POST['last'])) $last = $_POST['last'];
	if (isset($_POST['pass'])) $password = $_POST['pass'];
	
	//connect to database
	
	$connection = new mysqli("localhost", "dbuser", "cs4640", "aleph");
	
	//insert new user into the users table
	
	$connection->query("INSERT INTO users (email, first, last, password) VALUES ('$email', '$first', '$last', '$password')");
	
	//return customized page to user (return their name)
	
	echo "index.php";
	
	$_SESSION['name'] = $first;

?>