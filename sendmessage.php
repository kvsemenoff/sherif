<?php
$to = "shalaevdu@yandex.ru";
$to = "gurzova.elena@yandex.ru";
$to = "balkunov@fastery.ru";
$to = "order@fastery.ru";
$phone = $_POST['phone'];
$email = $_POST['email'];
$uname = $_POST['uname'];
$text = $_POST['text'];
$vk = $_POST['vk'];
$formname = $_POST['formname'];
$totalprice = $_POST['totalprice'];
$totalpricecol = $_POST['totalpricecol'];

if($formname == 'callmesuccess'){
	$subject  = "Заказал обратный звонок";
}
elseif($formname == 'ordersuccess'){

	$subject  = "Оформил заказ";
}
elseif($formname == 'questionsuccess'){
	
	$subject  = "Задал вопрос менеджеру";
}
elseif($formname == 'otziv'){
	
	$subject  = "Оставил отзыв";
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
$msg .= "<p><strong>Адрес страницы VK:</strong> ".$vk."</p>\r\n";
$msg .= "<p><strong>Сообщение:</strong> ".$text."</p>\r\n";
$msg .= "<p><strong>Общее количество товара:</strong> ".$totalpricecol."</p>\r\n";
$msg .= "<p><strong>Общая цена товара:</strong> ".$totalprice."</p>\r\n";
$msg .= "</body></html>";

// отправка сообщения
@mail($to, $subject, $msg, $headers);

?>
