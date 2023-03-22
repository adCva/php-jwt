<?php

declare(strict_types=1);

Class Database {
    private string $server = "localhost";
    private string $dbname = "react-login";
    private string $user = "root";
    private string $password = "";

    public function connect() : PDO {
        try {
            $connection = new PDO('mysql:host=' .$this->server .';dbname=' . $this->dbname, $this->user, $this->password);
            $connection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $connection;
        } catch (\Esception $e) {
            echo "Database connection error: " . $e->getMessage();
        }
    }
}