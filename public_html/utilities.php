<?php
function sendEmail($data)
{
    //send send contact request
    $mailSubject = 'Contact request';

    $mailBody = 'Hi,';
    $mailBody .= '<p>You have received a contact request. The details are as under</p>';
    
    $altBody = 'Hi,';
    $altBody .= "You have received a contact request. The details are as under\r\n";
    
    foreach($data as $key => $value){
        $mailBody .= "<b>$key:</b> $value<br/>";
        $altBody .= "$key: $value\r\n";
    }
    
    $mailBody .= '<p>Regards,<br/>clenergize.com</p>';
    $altBody .= "Regards,\r\nclenergize.com";

    $mail = new PHPMailer;

    $mail->isSMTP();
    $mail->Host = 'mail.clenergize.com';
    $mail->Port = 587;
    $mail->SMTPAuth = true;
    $mail->Username = 'info@clenergize.com';
    $mail->Password = 'Godspeed1';
    $mail->SMTPSecure = 'tls';

    $mail->From = 'info@clenergize.com';
    $mail->FromName = 'Clenergize';
    $mail->addAddress('shyam1989@gmail.com');
    
    $mail->WordWrap = 50;
    $mail->isHTML(true);

    $mail->Subject = $mailSubject;
    $mail->Body    = $mailBody;
    $mail->AltBody = $altBody;

    return $mail->send();
}
?>