document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  // Data login (bisa diganti)
  const validUsername = "admin";
  const validPassword = "spmi123";

  if (username === validUsername && password === validPassword) {
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "dashboard.html";
  } else {
    alert("Login gagal! Username atau password salah.");
  }
});