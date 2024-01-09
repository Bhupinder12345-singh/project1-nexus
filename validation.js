var hasSignedUp = false; // Initially, the user has not signed up

function validateLoginForm() {
    var username = document.getElementById("loginUsername").value;
    var password = document.getElementById("loginPassword").value;

    if (!hasSignedUp) {
        alert("You need to sign up first before logging in.");
        return false;
    }

    if (username === "" || password === "") {
        alert("Please fill in all fields for login.");
        return false;
    }
}

function validateSignupForm() {
    var username = document.getElementById("signupUsername").value;
    var email = document.getElementById("signupEmail").value;
    var password = document.getElementById("signupPassword").value;

    if (username === "" || email === "" || password === "") {
        alert("Please fill in all fields for signup.");
        return false;
    }
    // Set the flag to indicate that the user has signed up
    hasSignedUp = true;
}
