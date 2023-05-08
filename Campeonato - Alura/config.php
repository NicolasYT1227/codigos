<?php

    $host = 'localhost';
    $username = 'root';
    $password = '';
    $dbName = 'comentarioteste';

    try {
        $pdo = new PDO('mysql:host=' . $host . ';$dbName=' . $dbName, $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        echo "Sucesso na conexão";
    } catch (PDOException $err) {
        echo "Houve um erro no banco de dados" . $err->getMessage();
        exit;
    }

?>