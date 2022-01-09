<?php
$name = $_POST['name'];
$mobile = $_POST['mobile'];
$email = $_POST['email'];
$feedback = $_POST['feedback'];
$to = "rajanofficial098@gmail.com";
$subject = "eMail for your website enjoyWithMovies.com";
$txt ="\nName : ". $name ."\r\nMobile : ".$mobile ."\r\ne-Mail :  ".$email."\r\nFeedback : " . $feedback;
$headers = "From : header@gmail.com ". "\r\n"."CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thankyou.html");
?>