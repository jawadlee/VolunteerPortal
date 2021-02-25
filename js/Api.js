$(document).ready(function(){
	$("#VolunteerSignUp").click(function(){
		
		$("#VolunteerSignUp").html("<span class='fa fa-spinner fa-spin'></span> Processing...");
		$("#VolunteerSignUp").prop("disabled", "true");
		
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
				if(data == 1)
				{
					$("#VolunteerSignUp").html("<span class='fa fa-check'></span> User already Exist");
					$("#SignupMessage").html("<div class='alert alert-info alert-dismissable'><button type='button' class='close'>&times;</button><strong><p>"+FirstName+"! Account already Exist with "+Email+"</p></strong></div>");
				}
				if(data == 2)
				{
					$("#VolunteerSignUp").html("<span class='fa fa-user'></span> Creating Account...");
					$("#SignupMessage").html("<div class='alert alert-success alert-dismissable'><button type='button' class='close'>&times;</button><strong><p>"+FirstName+"! Account created Successfully</p></strong></div>");
				}
			}
		});
		
		
	});
});