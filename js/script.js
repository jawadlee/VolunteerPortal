// First Name
$(document).ready(function() {
    $("#FirstName").on("change input", function() {
        var FirstName = $("#FirstName").val();
        if (FirstName == "") {
            $("#Firstname_Message").html("Field Cannot be empty!!");
        } else {
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
        var Password1 = $("#C_Password").val();
        if (Password1 == "") {
            $("#Password_Message1").html("Field Cannot be empty!!");
        } else {
            $("#Password_Message1").html("");
        }
    });
});