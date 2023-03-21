<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods:  GET');
header('Content-type: application/json');
require __DIR__ . "/vendor/autoload.php";
require "Database.php";

use ReallySimpleJWT\Token;

$db = new Database;
$conn = $db->connect();


$loginRequestData = json_decode(file_get_contents("php://input"));
$sql = "SELECT * FROM users WHERE email = :email";
$stmt = $conn->prepare($sql);

$stmt->bindParam(":email", $loginRequestData->email);

if (!$stmt->execute()) {
    echo "Failed to login.";
}

$data = $stmt->fetch(PDO::FETCH_ASSOC);

if (!password_verify($loginRequestData->password, $data['password'])) {
    echo json_encode([
        "token" => "",
        "status" => 400,
        "message" => "failed"
    ]);
} else {
    $secret_key = "sec!ReT423*&";
    $payload = array(
        "ist" => date("Y-m-d"),
        "iss" => "localhost",
        "uid" => $data['id'],
        "name" => $data['name'],
        "expires" => time() + 3600
    );


    $token = Token::customPayload($payload, $secret_key);
    echo json_encode([
        "token" => $token,
        "status" => 200,
        "message" => "success"
    ]);
}