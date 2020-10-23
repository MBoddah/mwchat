$(document).ready (function () {
        $("#regbut").bind("click", function() {
            $.ajax({
                url: "inc/registration.php",
                type: "POST",
                data: ({nickname: $("#nicknamereg").val(),
                        password: $("#passwordreg").val()}),
                dataType: "html",
                success: function (data){
                    alert(data);
                }
            });
        })
    });