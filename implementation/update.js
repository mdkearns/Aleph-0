/*
 *
 *    update.js drives the dynamic content of the customized home page
 *
 */
$(function() {
	
	/*
	 *    VIEW SEARCH HISTORY
	 */
	$("#history").click(function(evt) {
		
		evt.preventDefault();
		$(".delete").remove();
		
		var email = prompt("Please re-enter your email: ");
		
		$.ajax({
			url: 'history.php',
			type: 'POST',
			data: {email: email},
			success: function(data) {
				$("#search").val('');
				$("#results").append('<p class="delete">----------------------------------------------------------------------------------SEARCH HISTORY------------------------------------------------------------------------------</p>');
				$("#results").append('<p class="delete">'+data+'</p>');
				$("#results").append('<p class="delete">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>');
			}
		});
	});
	
	/*
	 *    SIGN IN TO ACCOUNT
	 */
	$("#sign_in").click(function() {
		
		var user_name = $("#user-name").val();
		var user_pass = $("#user-pass").val();
		
		$.ajax({
			url: "validate.php",
			type: "POST",
			async: false,
			data: {
				email: user_name,
				pass: user_pass
			},
			success: function (data) {
				
				if (data == "failure") {
					alert("Username or password incorrect. Please try again or create an account with us.");
				}
				else {
					window.location.href = "" + data;
				}
			},
			error: function () {
				alert("failure");
			}
		});
	});
	
	
	/*
	 *    CREATE ACCOUNT
	 */
	$("#create_account").click(function() {
		
		var email = $("#user-email").val();
		var first = $("#user-first").val();
		var last = $("#user-last").val();
		var pass = $("#user-password").val();
		var pass2 = $("#repeat").val();
		
		if (pass != pass2) {
			alert("Passwords do not match. Please enter matching passwords and try again.")
		}
		
		if (pass == pass2) {
		
			$.ajax({
				url: "createAccount.php",
				type: "POST",
				async: false,
				data: {
					email: email,
					first: first,
					last: last,
					pass: pass
				},
				success: function (data) {
					
					window.location.href = "" + data;

				},
				error: function () {
					alert("failure");
				}
			});
		}
	});
	
	/*
	 *    LOG-OUT OF ACCOUNT
	 */
	$("#log-out").click(function() {
		$.ajax({
			url: 'logout.php',
			type: 'POST',
			success: function() {
				window.location.href = "index.html";
			}
		});
	});
	
	/*
	 *    SUBMIT SEARCH AND DISPLAY RESULTS
	 */
    $("#send").click(function(evt) {
		
		evt.preventDefault();
		$(".delete").remove();
		
		var searchType = $("#search-type").val();
		
		if (searchType == 'general') {
			
			var searchTerm = $("#search").val();
			var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search="+searchTerm+"&format=json&callback=?"; 
			
			$.ajax({
				url: url,
				type: 'GET',
				contentType: "application/json; charset=utf-8",
				async: false,
				dataType: "json",
				success: function(data, status, jqXHR) {
					$("#search").val('');
					$("#results").append('<p class="delete">----------------------------------------------------------------------------------SEARCH RESULTS------------------------------------------------------------------------------</p>');
					$("#results").append('<p class="delete"><span id="question">'+searchTerm+'</span></p>');
					$("#results").append('<p class="delete"><span id="answer">'+data[2][0]+'</span></p>');
					$("#results").append('<p class="delete">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>');
					$("#results").append('<input class="delete" type="button" value="Save Result" id="save">');
				}
			});
		}
		else {
			
			var searchTerm = $("#search").val().split(' ').join('+');; 
			var url = "https://api.wolframalpha.com/v2/query?input="+searchTerm+"&format=image&output=JSON&appid=6Y5HHW-QRQVRERGXP"; 
			
			$.ajax({
				url: url,
				type: "GET",
				dataType: "jsonp",
				success: function(data, status, jqXHR) {
					$("#search").val('');
					$("#results").append('<p class="delete">----------------------------------------------------------------------------------SEARCH RESULTS------------------------------------------------------------------------------</p>');
					$("#results").append('<p class="delete"><span id="question">'+data['queryresult']['pods'][0]['subpods'][0]['img']['title']+ '</span>  =  <span id="answer">'+data['queryresult']['pods'][1]['subpods'][0]['img']['title']+'</span></p>');
					$("#results").append('<p class="delete">---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------</p>');
					$("#results").append('<input class="delete" type="button" value="Save Result" id="save">');
				}
			});
		}
    });
	
	
	/*
	 *    CLEAR BUTTON
	 */
	$("#clear").click(function(evt) {
		evt.preventDefault();
		$(".delete").remove();
		$("#search").val('');
	});
	
	/*
	 *    SAVE SEARCH HISTORY
	 */
	setInterval(function(){
		
		$("#save").click(function() {
			
			var email = prompt("Please re-enter your email: ");
			var query = prompt("Please re-enter your query: ");
			var answer = prompt("Please re-enter the answer: ");
			
			$.ajax({
				url: 'store.php',
				type: 'POST',
				data: {
					email: email,
					query: query,
					answer: answer
				},
				success: function (data) {
					alert("This query has been saved! Click 'View History' to see all of your past queries.");
				}
			});
		});
		
	 }, 10000);
	
});