<?php 
	session_start();
?>

<!DOCTYPE html>
<html lang="en">
	<head>
		<title>ALEPH-0</title>
		
		<!-- CSS StyleSheet -->
		<link rel="stylesheet" href="style.css">
		
		<!-- Setting Tab Icon -->
		<link rel="icon" href="images/aleph-icon.png">
		
		<!-- Architects Daughter Font -->
		<link rel="stylesheet" type="text/css" href="//fonts.googleapis.com/css?family=Architects+Daughter" />
	</head>
	<center>
		<body>
			<div id="container">
			
				<!-- Customized Header -->
				<header>
					<span id="custom-header"><?php $name = $_SESSION['name']; echo "Hello, $name!"; ?></span>
					<span id="login-info">
						<input class="button" type="button" value="View History" id="history">
						<input class="button" type="button" value="Log Out" id="log-out">
					</span>
				</header>
				
				<!-- Spacing -->
				<br><br><br><br>
				
				<h2>Welcome to the ALEPH-0 Web-Based Search Assistant! </h2><br>
				
				<!-- Information About This Web App -->
				<p> 
					ALEPH-0 uses the Wolfram|Alpha and Wikipedia knowledge <br>
					engines to help its user collect both computational knowledge and general <br>
					knowledge from a single location.
				</p>
				
				<!-- Spacing -->
				<br/>
				
				<!-- Search Box -->
				<span>
					<input type="text" placeholder="Type your search here..." id="search" size="50">
					<select id="search-type">
						<option value="general">General</option>
						<option value="computation">Computation</option>
					</select>
					<input type="button" value="Search" id="send">
					<input type="button" value="Clear" id="clear">
				</span>
			
				<!-- Spacing -->
				<br><br>
				
				<span id="results"></span>
					
				<!-- Spacing -->
				<br><br><br><br><br><br>
				
				<!-- Footer -->
				<footer>
					<span id="name">-- Matt Kearns -- <br>mdk2mc</span>
				</footer>
			</div>
			
			<!-- jQuery -->
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
			
			<!-- jQuery tablesorter-->
			<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery.tablesorter/2.28.13/js/jquery.tablesorter.min.js"></script>
			
			<!-- JavaScript -->
			<script src="update.js"></script>
		</body>
	</center>
 </html>