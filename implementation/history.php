<?php

	if (isset($_POST['email'])) $email = $_POST['email'];
	
	//connect to database
	
	$connection = new mysqli("localhost", "dbuser", "cs4640", "aleph");
	
	//	return history for user with the given email
	
	if ($result = $connection->query("SELECT question, answer FROM queries WHERE email='$email'")) {
		
		while($results = $result->fetch_assoc()) {
			
			echo "" . $results['question'] . "<br>" . $results['answer'] . "<br><br>";
			
		}
	}
	else {
		echo "failure";
	}
?>