document.addEventListener('DOMContentLoaded', function() {
  const signupForm = document.getElementById('signup-form');
  const loginForm = document.getElementById('login-form');
  const signupContainer = document.getElementById('signup-container');
  const loginContainer = document.getElementById('login-container');
  const showSignupLink = document.getElementById('show-signup-link');

  signupContainer.style.display = 'none';

  showSignupLink.addEventListener('click', function (event) {
    event.preventDefault();
    showSignupForm();
  });

  signupForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const signupUsername = document.getElementById('signup-username').value;
    const signupPassword = document.getElementById('signup-password').value;
    const signupEmail = document.getElementById('signup-email').value;

    signupForm.reset();

    localStorage.setItem('username', signupUsername);
    localStorage.setItem('password', signupPassword);
    localStorage.setItem('email', signupEmail);

    alert('Sign up successful! Please log in.');

    showLoginForm();
    scrollToLoginForm();
  });

  loginForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (enteredUsername === storedUsername && enteredPassword === storedPassword) {
      loginForm.reset();
      window.location.href = 'console.html';
    } else {
      alert('Invalid username or password. Please try again.');
    }
  });

  function showLoginForm() {
    signupContainer.style.display = 'none';
    loginContainer.style.display = 'block';
  }

  function showSignupForm() {
    loginContainer.style.display = 'none';
    signupContainer.style.display = 'block';
  }

  function scrollToLoginForm() {
    const loginContainerTop = loginContainer.getBoundingClientRect().top;
    window.scrollTo({
      top: loginContainerTop,
      behavior: 'smooth'
    });
  }
});