$(document).ready(function(){
    GetSession = localStorage.getItem("Current_User");
    if(GetSession == null)
    {
        location.href = "Login.html";
    }
    else
    {
        // All Session Code will goes here.
        
    }// End of Session Validation Main ELSE.
});