<?php
    require_once 'database.php';
    require_once 'functions.php';

    if (isset($_POST['nicknameenter']) && isset($_POST['passwordenter']))
    {
        $check_result = check_user_existence($link, $_POST['nicknameenter']);

        if($check_result == false){
            $result = check_user_password($link, $_POST['nicknameenter'], $_POST['passwordenter']);
            if ($result == true){
                echo $_POST['nicknameenter'];
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