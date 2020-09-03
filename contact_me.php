<?php

if($_POST)
{

  	$mail->MsgHTML($content); 
  	if(!$mail->Send()) {
    	echo "Error while sending Email.";
    	var_dump($mail);
  	} else {
    	echo "Email sent successfully";
  	}

	$to_Email   	= "bighub.info@gmail.com"; //Replace with recipient email address
	$subject        = 'New People!'; //Subject line for emails
	$subject2        = 'Добро пожаловать в HUB!'; // Тема письма пользователю
	
	//check if its an ajax request, exit if not
    if(!isset($_SERVER['HTTP_X_REQUESTED_WITH']) AND strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) != 'xmlhttprequest') {
	
		//exit script outputting json data
		$output = json_encode(
		array(
			'type'=>'error', 
			'text' => 'Request must come from Ajax'
		));
		
		die($output);
    } 
	
	//check $_POST vars are set, exit if any missing
	if(!isset($_POST["userName"]) || !isset($_POST["userEmail"])
	|| !isset($_POST["userType"]))
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Неполное заполнение формы!'));
		die($output);
	}

	//Sanitize input data using PHP filter_var().
	$user_Name        = filter_var($_POST["userName"], FILTER_SANITIZE_STRING);
	$user_Email       = filter_var($_POST["userEmail"], FILTER_SANITIZE_EMAIL);
	$user_Type        = filter_var($_POST["userType"], FILTER_SANITIZE_STRING);

	
	$message ="Новый запрос на регистрацию в Хаб. \nОписание:\n";
	$message .="Имя/Фамилия: $user_Name\n";
	$message .="Email: $user_Email\n";
	$message .="Курс: $user_Type\n";

	$message2 ="Добро пожаловать в Хаб $user_Name!\n";
	$message2 .="Твоя ссылка для продолжения регистрации: типо ссылка.\n";

	


	//proceed with PHP email.
	$headers = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();

	//proceed with PHP email.
	$headers2 = 'From: '.$user_Email.'' . "\r\n" .
	'Reply-To: '.$user_Email.'' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	
	$sentMail = @mail($to_Email, $subject, $message, $headers);
	$sentMail2 = @mail($user_Email, $subject2, $message2, $headers2);
	
	if(!$sentMail AND !$sentMail2)
	{
		$output = json_encode(array('type'=>'error', 'text' => 'Ошибка! Кажется что то пошло не так, попробуйте повторить попытку позже!'));
		die($output);
	}else{
		$output = json_encode(array('type'=>'message', 'text' => 'Ваш запрос отправлен, проверьте свою электронную почту!'));
		die($output);
	}
}
?>