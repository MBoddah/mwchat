function registration() {
    $.ajax({
        url: "inc/registration.php",
        type: "POST",
        data: ({nickname_reg: $("#nickname-reg").val(),
                password_reg: $("#password-reg").val()}),
        dataType: "html",
        success: afterRegistration
    })
}

function authorization() {
        $.ajax({
            url: "inc/authorization.php",
            type: "POST",
            data: ({nickname_enter: $("#nickname-enter").val(),
                    password_enter: $("#password-enter").val()}),
            dataType: "html",
            success: afterAuthorization
        });
}