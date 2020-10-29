<?php
    require_once 'database.php';
    require_once 'functions.php';

    if (isset($_POST['nickname_enter']) && isset($_POST['password_enter']))
    {
        $check_result = check_user_existence($link, $_POST['nickname_enter']);

        if($check_result == false){
            $result = check_user_password($link, $_POST['nickname_enter'], $_POST['password_enter']);
            if ($result == true){
                echo $_POST['nickname_enter'];
            }
            else {
                echo 0;
            }
        }
        else {
            echo 1;
        }
    }
?>