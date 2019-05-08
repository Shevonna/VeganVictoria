function checkPass() {
    var confirmPassword = "pandulce";
    var password = document.getElementById("pass").value;
    if (password == confirmPassword) {
         window.location="updates.html";
    }
    else{
        alert("Passwords do not match.");
    }
}