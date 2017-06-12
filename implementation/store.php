<?php

	if (isset($_POST['email'])) $email = $_POST['email'];
	if (isset($_POST['query'])) $query = $_POST['query'];
	if (isset($_POST['answer'])) $answer = $_POST['answer'];
	
	//connect to database
	
	$connection = new mysqli("localhost", "dbuser", "cs4640", "aleph");
	
	//insert query and answer into database (associate with email)
	
	$connection->query("INSERT INTO queries (email, question, answer) VALUES ('$email', '$query', '$answer')");
	
?>