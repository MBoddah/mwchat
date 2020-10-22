<?php
    require_once 'database.php';
    require_once 'functions.php';

    if (isset($_POST['nicknamereg']) && isset($_POST['passwordreg']))
    {
        $check_result = check_user_existence($link, $_POST['nicknamereg']);

        if($check_result == true){
            $result = add_new_user($link, $_POST['nicknamereg'], $_POST['passwordreg']);
            if ($result == true){
                echo $_POST['nicknamereg'];
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