// DOM elements
const loginForm = document.getElementById("login-form");

// Variables
let loggedIn = false;

// Event Listener
loginForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username && password) {
    loggedIn = true;
    window.location.href = 'console.html';
  }
});