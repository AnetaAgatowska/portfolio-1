<?php


ini_set("SMTP", "smtp_server_here");
ini_set("sendmail_from", "mail_here");
ini_set("smtp_port", "465");


if(isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"])) {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = nl2br($_POST["message"]);
    $to = "mail_here";
    $from = "mail_here";
    $subject = "MESSAGE from " . $name;
    $content = "<b>Name:</b>" . $name . "<br><b>Email:</b>" . $email . "<br><b>Message:</b>" . "<p>" . $message . "</p>";
    $headers = "From: $from\n";
    $headers .= "MIME-Version: 1.0\n";
    $headers .= "Content-type: text/html; charset=iso-8859-1\n";

        if(mail($to, $subject, $content, $headers))  {
            echo "success";
        } else {
            echo "Oopsie! The server failed to send the message. I'm sorry, could You try again later?";
        }


}


?>
