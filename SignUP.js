document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".signup-form");
    const usernameField = document.getElementById("username");
    const phoneField = document.getElementById("phone");
    const passwordField = document.getElementById("password");
    const confirmPasswordField = document.getElementById("confirm-password");

    const errorMessage = document.createElement("p");
    errorMessage.style.color = "red";
    errorMessage.style.fontSize = "14px";
    errorMessage.style.marginTop = "10px";
    form.appendChild(errorMessage);

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const username = usernameField.value.trim();
        const phone = phoneField.value.trim();
        const password = passwordField.value;
        const confirmPassword = confirmPasswordField.value;

        let valid = true;
        let errorText = "";

        if (/^\d/.test(username)) {
            errorText += "❌ Username cannot start with a number.<br>";
            valid = false;
        }

        if (!/^\d{10}$/.test(phone)) {
            errorText += "❌ Phone number must be exactly 10 digits.<br>";
            valid = false;
        }

        if (password !== confirmPassword) {
            errorText += "❌ Password and Confirm Password must match.<br>";
            valid = false;
        }

        if (!valid) {
            errorMessage.innerHTML = errorText; 
        } else {
            errorMessage.innerHTML = ""; 
            alert("✅ Sign-up successful! Redirecting...");
            window.location.replace("SignHome.html");
 
        }
    });

    
    [usernameField, phoneField, passwordField, confirmPasswordField].forEach(input => {
        input.addEventListener("input", function () {
            errorMessage.innerHTML = "";
        });
    });
});