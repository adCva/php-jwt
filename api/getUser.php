<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods:  POST');
header('Content-type: application/json');
require __DIR__ . "/vendor/autoload.php";
require "Database.php";

use ReallySimpleJWT\Token;

$db = new Database;
$conn = $db->connect();


$token = $_GET["token"];

$secret_key = "sec!ReT423*&";
$validateToken = Token::validate($token, $secret_key);
if (!$validateToken) {
    echo json_encode([
        "status" => 400,
        "message" => "No user with such details"
    ]);
} else {
    $data = Token::getPayload($token);
    $sql = "SELECT * FROM users WHERE id = :id";
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(":id", $data["uid"]);
    $stmt->execute();

    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    echo json_encode([
        "status" => 200,
        "message" => "Welcome",
        "data" => $user
    ]);
}