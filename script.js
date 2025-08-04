document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;

  const storedUsername = localStorage.getItem("username");
  const storedPassword = localStorage.getItem("password");

  if (username === storedUsername && password === storedPassword) {
    alert("Login successful!" + (remember ? " (Remembered)" : ""));
    // You can redirect to a dashboard here
  } else {
    alert("Invalid credentials. Please sign up or try again.");
  }
});
