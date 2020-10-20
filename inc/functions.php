<?php
function check_user_existence($link, $nickname){
    $query = mysqli_query($link, "SELECT Nickname FROM users WHERE Nickname='$nickname'");
    if(mysqli_num_rows($query) > 0)
    {
        return false;
    }
    return true;
}

function add_new_user($link, $nickname, $password){
    $insert_query = "INSERT INTO users (Nickname, Password) VALUES(N'$nickname', N'$password')";
    $result = mysqli_query($link, $insert_query);
    return $result;
}
?>