<?php
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Connect to the database
    $conn = new mysqli('host', 'username', 'password', 'database');

    // Check if the username and password match a user in the database
    $stmt = $conn->prepare("SELECT * FROM users WHERE username = ? AND password = ?");
    $stmt->bind_param("ss", $username, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        // Return a success message if the login is successful
        $response = array('success' => true, 'message' => 'Login successful.');
    } else {
        // Return an error message if the login fails
        $response = array('success' => false, 'message' => 'Invalid username or password.');
    }

    echo json_encode($response);
    ?>
