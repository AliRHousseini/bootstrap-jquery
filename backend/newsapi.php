<?php

$host = "localhost";
$username = "root";
$password = null;
$dbName = "databasenews";

$conn = mysqli_connect($host, $username, $password, $dbName);

if(!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

//get all data from the news database
$query = $conn->prepare("SELECT * FROM `news`");
$query->execute();
$result = $query->get_result();

$response = [];

while($item = $result->fetch_assoc()) {
    $response[] = $item;
}

echo json_encode($response);

?>