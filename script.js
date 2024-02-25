const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  
  if (username === "MrZee" && password === "Zain") {
  
    window.location.href = "account.html";
  } else {
    errorMessage.textContent = "Invalid credentials";
  }
});
