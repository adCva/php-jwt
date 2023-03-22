<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header('Access-Control-Allow-Methods:  POST');
header('Content-type: application/json');
require "Database.php";

$db = new Database;
$conn = $db->connect();


$newUser = json_decode(file_get_contents("php://input"));
$sql = "INSERT INTO users (id, name, username, email, gender, password) VALUES (null, :name, :username, :email, :gender, :password)";
$stmt = $conn->prepare($sql);

$stmt->bindParam(":name", $newUser->name);
$stmt->bindParam(":username", $newUser->username);
$stmt->bindParam(":email", $newUser->email);
$stmt->bindParam(":gender", $newUser->gender);

$passwordHash = password_hash($newUser->password, PASSWORD_DEFAULT);
$stmt->bindParam(":password", $passwordHash);


if (!$stmt->execute()) {
    echo "Failed to register. Please try again.";
}