let isLogin = true;

function toggleForm() {
  isLogin = !isLogin;
  document.getElementById("form-title").innerText = isLogin ? "Login" : "Sign Up";
  document.getElementById("switch-text").innerHTML = isLogin
    ? `Don't have an account? <span onclick="toggleForm()">Sign up</span>`
    : `Already have an account? <span onclick="toggleForm()">Login</span>`;
}

function handleAuth() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email.trim() && pass.trim()) {
    localStorage.setItem("neon-user", email);
    window.location.href = "index.html";
  } else {
    alert("Please enter valid email and password.");
  }
}