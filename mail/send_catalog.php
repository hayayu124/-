<?php
header("Access-Control-Allow-Origin: https://rosetique.tokyo");
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
    $mailer->setFrom('noreply@rosetique.tokyo', mb_encode_mimeheader('株式会社 ROSETIQUE JAPAN'));
    $mailer->isHTML(false); // Set email format to HTML

    //ユーザーへメール送信
    $sendUser = $mailer;
    $sendUser->addAddress($_POST["email"]);
    $sendUser->addBCC("rosetique.catalog@gmail.com");
    $sendUser->Subject = mb_encode_mimeheader('お問い合わせありがとうございました');
    $sendUser->Body = "お客様　各位\r\n\r\n"
      . "お問い合わせありがとうございました。\r\n以下の内容でお問い合わせを受け付けました。\r\n担当者よりご連絡いたしますので今しばらくお待ち下さい。\r\n\r\n"
      . "お名前: " . $_POST["name"] . "\r\n"
      . "フリガナ: " . $_POST["hurigana"] . "\r\n"
      . "メールアドレス: " . $_POST["email"] . "\r\n"
      . "電話番号: " . $_POST["telnumber"] . "\r\n"
      . "お問い合わせ内容: \r\n"
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
