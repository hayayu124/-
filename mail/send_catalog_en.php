<?php
header("Access-Control-Allow-Origin: https://catalog.rosetique.tokyo/");
header("Access-Control-Allow-Methods: POST");
//PHPの設定
date_default_timezone_set('Asia/Tokyo');
mb_language("ja");
mb_internal_encoding("UTF-8");

//PHPMailerの使用宣言
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//自身の環境に合わせてPHPMailer読み込みパスを修正
require_once("./Exception.php");
require_once("./PHPMailer.php");
require_once("./SMTP.php");

//PHPMailerの使用
$mailer = new PHPMailer(true);    //Passing `true` enables exceptions

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
  try {
    //Server settings
    $mailer->CharSet = 'UTF-8';
    $mailer->SMTPDebug = 0; // Enable verbose debug output
    $mailer->isSMTP(); // Set mailer to use SMTP
    $mailer->Host = 'sv13464.xserver.jp';    // Specify main and backup SMTP servers
    $mailer->SMTPAuth = true; // Enable SMTP authentication
    $mailer->Username = 'noreply@rosetique.tokyo';  // SMTP username
    $mailer->Password = 'rosearoma$'; // SMTP password
    $mailer->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS; // Enable TLS encryption, `ssl` also accepted
    $mailer->Port = 587; // TCP port to connect to (ssl:465)
    $mailer->setFrom('noreply@rosetique.tokyo', mb_encode_mimeheader('ROSETIQUE JAPAN Inc.'));
    $mailer->isHTML(false); // Set email format to HTML

    //ユーザーへメール送信
    $sendUser = $mailer;
    $sendUser->addAddress($_POST["email"]);
    $sendUser->addBCC("rosetiquejapan@gmail.com");
    $sendUser->Subject = mb_encode_mimeheader('Thank you for your inquiry.');
    $sendUser->Body = "Dear Customer,\r\n\r\n"
      . "Thank you for your inquiry.\r\nWe have received your inquiry with the following information.\r\nPlease wait a moment and our representative will contact you.
      \r\n\r\n"
      . "Name: " . $_POST["name"] . "\r\n"
      . "E-mail Address: " . $_POST["email"] . "\r\n"
      . "Phone Number: " . $_POST["telnumber"] . "\r\n"
      . "Message Content: \r\n"
      . preg_replace("/\r\n|\r|\n/", "\r\n", $_POST["message"]);
    $sendUser->send();

    //クライアントへメール送信

    echo 'Message has been sent';
  } catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mailer->ErrorInfo;
  }
} else {
  echo "不正なアクセスです";
}
