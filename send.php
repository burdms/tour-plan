<?php
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

$formName = $_POST['formName'];
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

if($formName == "newsletter") {
    $title = "New subscription Best Tour Plan";
    $body = "
    <h2>New subscription</h2>
    <b>E-mail:</b> $email
    ";
}elseif ($formName == "modalBooking") {
    $title = "New booking request Best Tour Plan";
    $body = "
    <h2>New booking request</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br>
    <b>E-mail:</b> $email<br><br>
    <b>Message:</b><br>$message
    ";
}
else{
    $title = "New request Best Tour Plan";
    $body = "
    <h2>New request</h2>
    <b>Name:</b> $name<br>
    <b>Phone:</b> $phone<br><br>
    <b>Message:</b><br>$message
    ";
}

$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
// $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'example@gmail.com'; // Логин на почте
    $mail->Password   = 'password'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('example@gmail', 'Author name'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('example@yandex.ru');  
    // $mail->addAddress('youremail@gmail.com'); // Ещё один, если нужен

    // Прикрипление файлов к письму

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header ('Location: thankyoupage.html');