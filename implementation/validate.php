<?php

	// start a session for the user
	
	session_start();

	if (isset($_POST['email'])) $email = $_POST['email'];
	if (isset($_POST['pass'])) $password = $_POST['pass'];
	
	//connect to database
	
	$connection = new mysqli("localhost", "dbuser", "cs4640", "aleph");
	
	//validate user in database
	
	if ($result = $connection->query("SELECT email, first, password FROM users WHERE email='$email' AND password='$password'")) {
		
		$results = $result->fetch_assoc();

		if (($results['email'] == $email) && ($results['password'] == $password)) {
			echo "index.php";
		}
		else {
			echo "failure";
		}
	}
	else {
		echo "failure";
	}
	
	$_SESSION['name'] = $results['first'];
?>