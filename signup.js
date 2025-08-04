document.getElementById("signupForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("newUsername").value;
  const password = document.getElementById("newPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  alert("Signup successful! You can now log in.");
  window.location.href = "index.html";
});
