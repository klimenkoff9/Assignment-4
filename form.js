const password = 12345678;
const check = function() {
    let pw = document.getElementById('pass').value;
    console.log(pw);
    console.log(password);
    if (pw == password) {
        document.getElementById("topText").innerText = "Bye world";
    } else {
        alert("Incorrect password");
    }
  }

