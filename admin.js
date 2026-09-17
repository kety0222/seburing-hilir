document.getElementById("loginForm").addEventListener("submit", function(event) {

    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("errorMessage");

    // LOGIN ADMIN
    const adminUsername = "admin";
    const adminPassword = "admin12345";

    if (username === adminUsername && password === adminPassword) {

        localStorage.setItem("adminLogin", "true");

        window.location.href = "dashboard.html";

    } else {

        errorMessage.textContent = "Username atau password salah!";

    }

});
```
