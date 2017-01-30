<?php
$to = "sinnapsteam@yandex.ru ";
$phone = $_POST['phone'];
$email = $_POST['email'];
$uname = $_POST['uname'];
$text = $_POST['text'];
$formname = $_POST['formname'];

if($formname == 'callmesuccess'){
	$subject  = "Заказал обратный звонок";
}
elseif($formname == 'ordersuccess'){

	$subject  = "Оформил заказ";
}
elseif($formname == 'questionsuccess'){
	
	$subject  = "Задал вопрос менеджеру";
}

else{
	$subject  = "Заказ с сайта";
}

// Формирование заголовка письма

$headers  = "From: info@starlight.space" . "\r\n";
$headers .= "Reply-To: info@starlight.space".  "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html;charset=utf-8 \r\n";
// Формирование тела письма
$msg  = "<html><body>";
$msg .= "<h2>Новое сообщение</h2>\r\n";
$msg .= "<p><strong>Телефон:</strong> ".$phone."</p>\r\n";
$msg .= "<p><strong>Имя:</strong> ".$uname."</p>\r\n";
$msg .= "<p><strong>Email:</strong> ".$email."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$text."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>
