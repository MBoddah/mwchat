<?php
    require_once 'database.php';
    require_once 'functions.php';

    if (isset($_POST['nickname']) && isset($_POST['password']))
    {
        $check_result = check_user_existence($link, $_POST['nickname']);

        if($check_result == true){
            $result = add_new_user($link, $_POST['nickname'], $_POST['password']);
            if ($result == true){
                echo "Success";
            }
            else {
                echo "Error";
            }
        }
        else {
            echo "loginerror";
        }
    }
?>