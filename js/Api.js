$(document).ready(function(){

	// Volunteer Signup API Code.
	$("#VolunteerSignUp").click(function(){
		
		$("#VolunteerSignUp").html("<span class='fa fa-spinner fa-spin'></span> Processing...");
		$("#VolunteerSignUp").prop("disabled", true);
		
		var FirstName = $("#FirstName").val();
		var LastName = $("#LastName").val();
		var Country = $("#Country").val();
		var PostalCode = $("#PostalCode").val();
		var Email = $("#Email").val();
		var Password = $("#Password").val();
		var C_Password = $("#C_Password").val();
		
		API_URL = "https://s3q91n5uwa.execute-api.us-east-2.amazonaws.com/Volunteers/volunteers";
		$.ajax({
			url : API_URL,
			type : 'POST',
			contentType : 'application/json',
			data : JSON.stringify({Email : Email, Password : Password, FirstName : FirstName, LastName : LastName, Country : Country, PostalCode : PostalCode}),
			success : function(data)
			{
				console.log(data);
				$("#VolunteerSignUp").prop("disabled", "false");
				if(data == "Exist")
				{
					if(FirstName == "")
					{
						FirstName = "Hey";
					}
					$("#VolunteerSignUp").html("<span class='fa fa-check'></span> User already Exist");
					$("#SignupMessage").html("<div class='alert alert-info alert-dismissable'><button type='button' class='close'>&times;</button><span>"+FirstName+"! Account already Exist with "+Email+"</span></div>");
					$("#VolunteerSignUp").prop("disabled", false);
					location.href="Login.html";
				}
				if(data == "Saved")
				{
					if(FirstName == "")
					{
						FirstName = "Hey";
					}
					$("#VolunteerSignUp").html("<span class='fa fa-user'></span> Creating Account...");
					$("#SignupMessage").html("<div class='alert alert-success alert-dismissable'><button type='button' class='close'>&times;</button><span>"+FirstName+"! Account created Successfully</span></div>");
					location.href="Login.html";
				}
				if(data == "Empty")
				{
					if(FirstName == "")
					{
						FirstName = "Hey";
					}
					$("#VolunteerSignUp").html("<span class='fa fa-user'></span> Fields Cannot be Empty!!");
					$("#SignupMessage").html("<div class='alert alert-danger alert-dismissable'><button type='button' class='close'>&times;</button><span>" + FirstName + "! Fields Cannot be Empty!!</span></div>");
					$("#VolunteerSignUp").prop("disabled", false);
				}
			}
		});
		
		
	});


	// Login Page API POST.
	$("#LoginSubmit").on("click", function(){
		var Username = $("#Login_Username").val();
		var Password = $("#Login_Password").val();

		// Disabling the button.
		$(this).prop("disabled", true);

		if(Username == "" || Password == "")
		{
			$(".LoginMessage").html("<div class='alert alert-danger'><span class='fa fa-info'></span> Fields Cannot be Empty!!</div>");
			$(this).prop("disabled", false);
		}
		else
		{
			$(".LoginMessage").html("<span class='fa fa-spinner fa-spin'></span> Processing...");
			// Passing to AWS API.
			API_URL = "https://s3q91n5uwa.execute-api.us-east-2.amazonaws.com/Volunteers/volunteerslogin";
			$.ajax({
				url : API_URL,
				type : 'POST',
				contentType : 'application/json',
				data : JSON.stringify({Username : Username, Password : Password}),
				success : function(data)
				{
					$(".LoginMessage").html("<span class='fa fa-check'></span> Completed");
					$("#LoginSubmit").prop("disabled", false);
					if(data == "0")
					{
						$(".LoginMessage").html("<span class='text-danger'><span class='fa fa-info-circle'></span> Invalid Username or Password!!</span>");
						$("#Login_Username").val("");
						$("#Login_Password").val("");
					}
					if(data != "0")
					{
						var Validated_Email = data.Email['S'];
						var Validated_FirstName = data.FirstName['S'];
						var Validated_LastName = data.LastName['S'];
						var Validated_PostalCode = data.PostalCode['S'];
						var Validated_Country = data.Country['S'];

						// Creating Session.
						CreateSession = sessionStorage.setItem("Current_User", Validated_Email);
						location.href = "Dashboard.html";
					}
				}
			});
		}
	});
});


