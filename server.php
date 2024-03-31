<?php
    $firstName = $_POST['first_name'];
    $lastName = $_POST['last_name'];
    $phoneNumber = $_POST['number'];
    $email = $_POST['e-mail'];

    $data = "$lastName\t$firstName\t$phoneNumber\t$email\n";

    $filename = 'data.txt';

    $file = fopen($filename, 'a');

    if ($file) {
        fwrite($file, $data);
        fclose($file);
        echo "Дані успішно збережено.";
    } else {
        echo "Помилка при збереженні даних.";
    }
?>
