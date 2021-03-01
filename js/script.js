// First Name
$(document).ready(function() {
    var FirstName = $("#FirstName").val();
    var LastName = $("#LastName").val();
    var Country = $("#Country").val();
    var Email = $("#Email").val();
    var PostalCode = $("#PostalCode").val();
    var Password = $("#Password").val();
    var Password1 = $("#C_Password").val();

    $("#FirstName").on("change input", function() {
        var FirstName = $("#FirstName").val();
        if (FirstName.length == 0) {
            $("#Firstname_Message").html("Field Cannot be empty!!");
        }
        if (FirstName.length != 0) {
            $("#Firstname_Message").html("");
        }
    });


    $("#LastName").on("change input", function() {
        var LastName = $("#LastName").val();
        if (LastName == "") {
            $("#Lastname_Message").html("Field Cannot be empty!!");
        } else {
            $("#Lastname_Message").html("");
        }
    });



    $("#Country").on("change", function() {
        var Country = $("#Country").val();
        if (Country == "") {
            $("#Country_Message").html("Field Cannot be empty!!");
        } else {
            $("#Country_Message").html("");
        }
    });
    $("#PostalCode").on("change input", function() {
        var PostalCode = $("#PostalCode").val();
        if (PostalCode == "") {
            $("#Postal_Message").html("Field Cannot be empty!!");
        } else {
            $("#Postal_Message").html("");
        }
    });
    $("#Email").on("change input", function() {
        var Email = $("#Email").val();
        if (Email == "") {
            $("#Email_Message").html("Field Cannot be empty!!");
        } else {
            $("#Email_Message").html("");
        }
    });
    $("#Password").on("change input", function() {
        var Password = $("#Password").val();
        if (Password == "") {
            $("#Password_Message").html("Field Cannot be empty!!");
        } else {
            $("#Password_Message").html("");
        }
    });
    $("#C_Password").on("change input", function() {
        var Password = $("#Password").val();
        var Password1 = $("#C_Password").val();
        if (password == "Password1") {
            $("#Password_Match").html("Password Matched")
        } else {
            $("#Password_Match").html("Password Not Matched")
        }
        if (Password1 == "") {
            $("#Password_Message1").html("Field Cannot be empty!!");
        } else {
            $("#Password_Message1").html("");
        }
    });
    // if (FirstName == "" || LastName == "" || Country == "" || Email == "" || PostalCode == "" || Password == "" || Password1 == "") {
    //     $("#VolunteerSignUp").prop("disable", "true");
    // } else {
    //     $("#VolunteerSignUp").prop("disable", "false");
    // }


});