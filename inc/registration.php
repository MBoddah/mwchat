<?php
    require_once 'database.php';
    require_once 'functions.php';

    if (isset($_POST['nickname_reg']) && isset($_POST['password_reg']))
    {
        $check_result = check_user_existence($link, $_POST['nickname_reg']);

        if($check_result == true){
            $result = add_new_user($link, $_POST['nickname_reg'], $_POST['password_reg']);
            if ($result == true){
                echo $_POST['nickname_reg'];
            }
            else {
                echo 0;
            }
        }
        else {
            echo 1;
        }
    }
    else {
        echo "nodata";
    }
?>