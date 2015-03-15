<?php

require_once 'lib/swift_required.php';

$postdata = file_get_contents("php://input");
$request = json_decode($postdata);

$email = strip_tags($request->email);
$name = $request->name;
$text = $request->text;

function sendMail($to, $message, $subject,$images) {

    $message = str_replace('{text}', $message, file_get_contents('email.tmpl.html'));

    $transport = Swift_MailTransport::newInstance();

    $mail = Swift_Message::newInstance($transport)

        // Give the message a subject
        ->setSubject($subject)

        // Set the From address with an associative array
        ->setFrom(array('noreply@rpgboss.com' => 'NoReply'))

        ->setTo(array($to));

    foreach($images as $image ) {
        $cid = $mail->embed(Swift_Image::fromPath($image));
        $message = str_replace($image, $cid, $message);
    }

    $mail->addPart($message, 'text/html');

    $mail->setPriority(2);

    $transport->send($mail);

    return mail($to, $subject, $message);
}

if(filter_var($email, FILTER_VALIDATE_EMAIL)) {

    $subject = "RPGBOSS Contact Info";
    $images = array('images/logo.png');
    $result1 = sendMail("rpgboss@keepword.com", "<strong>Name</strong><br>" . $name . "<strong>Email</strong><br>" . $email . "<strong>Text</strong><br>" . nl2br($text), $subject, $images);
    $result2 = sendMail("hendrik.weiler@outlook.de", "<strong>Name</strong><br>" . $name . "<strong>Email</strong><br>" . $email . "<strong>Text</strong><br>" . nl2br($text), $subject, $images);

    $result3 = sendMail($email, "Thank you for your interest.", $subject, $images);

    print '1';
}