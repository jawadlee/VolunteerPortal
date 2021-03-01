$(document).ready(function(){
    GetSession = localStorage.getItem("Current_User");
    if(GetSession == "")
    {
        location.href = "Login.html";
    }
    else
    {
        // All Session Code will goes here.

        // Getting all Volunteers List.
        $("#VolunteersList").html("<div class='col-md-12'><span class='fa fa-spinner fa-spin'></span> Loading ...</div>");
        VolunteersList_API_URL = "https://s3q91n5uwa.execute-api.us-east-2.amazonaws.com/Volunteers/volunteerslist";
        $.ajax(
            {
                url : VolunteersList_API_URL,
                type : 'GET',
                contentType : 'application/json',
                success : function(data)
                {
                    //console.log(data[0]);
                    //console.log(data[1]);
                    $("#VolunteersList").html("<table class='table table-bordered' id='VolunteersListData'><tr><th>No.</th><th>Full Name</th><th>Email</th><th>Country</th><th>Postal Code</th><th>Status</th></tr></table>");
                    for(i=0; i<data.length; i++)
                    {
                        Email = data[i]['Email']['S'];
                        FirstName = data[i]['FirstName']['S'];
                        LastName = data[i]['LastName']['S'];
                        Country = data[i]['Country']['S'];
                        PostalCode = data[i]['PostalCode']['S'];
                        Created_At = data[i]['Created_At']['S'];
                        Creation = data[i]['Creation']['S'];
                        ActiveStatus = data[i]['ActiveStatus']['S'];

                        if(ActiveStatus == "Active")
                        {
                            var ActiveStatus_Class = "badge badge-success";
                        }
                        else
                        {
                            var ActiveStatus_Class = "badge badge-danger";
                        }
                        $("#VolunteersListData").append("<tr><td>"+ (i+1) +"</td><td><span class='fa fa-user-o'></span> "+FirstName +" " + LastName +"</td><td><span class='	fa fa-envelope-o'></span> "+Email+"</td><td>"+Country+"</td><td>"+PostalCode+"</td><td><span class='"+ActiveStatus_Class+"'>"+ActiveStatus+"</span></td></tr>");
                    }
                }
            }
        );


        // Getting all Details of this User.
        API_URL = "https://s3q91n5uwa.execute-api.us-east-2.amazonaws.com/Volunteers/currentvolunteerinfo";
        $.ajax(
            {
                url : API_URL,
                type : 'POST',
                contentType : 'application/json',
                data : JSON.stringify({Email : GetSession}),
                success : function(data)
                {
                    //console.log(data);
                    var Current_FullName = data['FirstName']['S'] + " " + data['LastName']['S'];
                    var Current_FirstName = data['FirstName']['S'];
                    var Current_LastName = data['LastName']['S'];
                    var Current_Email = data['Email']['S'];
                    var Current_Country = data['Country']['S'];
                    var Current_PostalCode = data['PostalCode']['S'];

                    $("#Current_User").text(Current_FullName);
                    $("#Volunteer_Email").val(Current_Email);
                    $("#Volunteer_FirstName").val(Current_FirstName);
                    $("#Volunteer_LastName").val(Current_LastName);
                    $("#Volunteer_PostalCode").val(Current_PostalCode);
                    $("#Volunteer_Country").val(Current_Country);
                }
            }
        );

        // Updating the Current Volunteer Profile.
        Update_API_URL = "https://s3q91n5uwa.execute-api.us-east-2.amazonaws.com/Volunteers/currentvolunteerprofileupdate";
        $("#UpdateVolunteerSubmit").on("click", function(){
            var Volunteer_Email = $("#Volunteer_Email").val();
            var Volunteer_FirstName = $("#Volunteer_FirstName").val();
            var Volunteer_LastName = $("#Volunteer_LastName").val();
            var Volunteer_PostalCode = $("#Volunteer_PostalCode").val();
            var Volunteer_Country = $("#Volunteer_Country").val();

            $("#UpdateVolunteerSubmit").prop("disabled", true);
            $("#UpdateVolunteerSubmit").html("<span class='fa fa-spinner fa-spin'></span> Updating...");

            $.ajax(
                {
                    url : Update_API_URL,
                    type : 'POST',
                    contentType : 'application/json',
                    data : JSON.stringify({Volunteer_Email : Volunteer_Email, Volunteer_FirstName : Volunteer_FirstName, Volunteer_LastName : Volunteer_LastName, Volunteer_PostalCode : Volunteer_PostalCode, Volunteer_Country : Volunteer_Country}),
                    success : function(data)
                    {
                        if(data == "1")
                        {
                            $("#UpdateVolunteerSubmit").prop("disabled", false);
                            $("#UpdateVolunteerSubmit").removeClass("btn-primary");
                            $("#UpdateVolunteerSubmit").addClass("btn-success");
                            $("#UpdateVolunteerSubmit").html("<span class='fa fa-check-circle'></span> Profile Updated");
                            setTimeout(function(){
                                $(".update_volunteer_section").slideUp(500);
                            },1000);
                        }
                        if(data == "0")
                        {
                            $("#UpdateVolunteerSubmit").prop("disabled", false);
                            $("#UpdateVolunteerSubmit").removeClass("btn-primary");
                            $("#UpdateVolunteerSubmit").addClass("btn-danger");
                            $("#UpdateVolunteerSubmit").html("<span class='fa fa-times'></span> Not Updated");
                        }
                    }
                }
            );
        });
    }// End of Session Validation Main ELSE.


    // Volunteer Logout Code.
    $("#LogoutVolunteer").on("click", function(){
        Logout = localStorage.setItem("Current_User", "");
        location.href = "Login.html";
    });

    // Show Hidden Update Volunteer Section
    $("#UpdateVolunteer").click(function(){
        $(".update_volunteer_section").slideToggle();
    });
});