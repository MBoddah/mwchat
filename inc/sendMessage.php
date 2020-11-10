<?php
    require_once 'database.php';
    require_once 'functions.php';

    if(isset($_POST['sender']) && isset($_POST['reciever']) && isset($_POST['text'])) {
        $sender = $_POST['sender'];
        $reciever = $_POST['reciever'];
        $text = $_POST['text'];
        $insert_query = "INSERT INTO messages (sender, reciever, message_text) VALUES(N'$sender', N'$reciever', N'$text')";
        $result = mysqli_query($link, $insert_query);
        if ($result == false) {
            echo 1;
        }
    }
    else {
        echo 2;
    }
?>