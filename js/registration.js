$(document).ready (function () {
    $("#regbut").bind("click", function() {
        $.ajax({
            url: "inc/registration.php",
            type: "POST",
            data: ({nicknamereg: $("#nicknamereg").val(),
                    passwordreg: $("#passwordreg").val()}),
            dataType: "html",
            success: afterRegistration
        });
    });
    $("#enterbut").bind("click", function() {
        $.ajax({
            url: "inc/authorization.php",
            type: "POST",
            data: ({nicknameenter: $("#nicknameenter").val(),
                    passwordenter: $("#passwordenter").val()}),
            dataType: "html",
            success: afterAuthorization
        });
    });
});