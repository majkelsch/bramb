document.querySelector('.loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var username = document.querySelector('#username').value;
    var password = document.querySelector('#password').value;

    if (username === "" || password === "") {
        // Show an error message if the username or password is empty
        document.querySelector('.error-message').innerHTML = "Please enter a username and password.";
    } else {
        // Send a request to the server to check the username and password
        var xhr = new XMLHttpRequest();
        xhr.open('POST', 'login.php', true);
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var response = JSON.parse(xhr.responseText);
                if (response.success) {
                    // Redirect the user to the home page if the login is successful
                    window.location.href = 'home.html';
                } else {
                    // Show an error message if the login fails
                    document.querySelector('.error-message').innerHTML = response.message;
                }
            }
        };
        xhr.send('username=' + username + '&password=' + password);
    }
});
