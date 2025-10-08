document.addEventListener('DOMContentLoaded', function() {
    const loginToggle = document.getElementById('login-toggle');
    const registerToggle = document.getElementById('register-toggle');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const registerLink = document.getElementById('register-link');
    const loginLink = document.getElementById('login-link');
    const registerCall = document.getElementsByClassName('register-call')

    

    // Function to show login form
    function showLogin() {
        loginToggle.classList.add('active');
        registerToggle.classList.remove('active');
        loginForm.classList.add('active');
        registerForm.classList.remove('active');
    }

    // Function to show register form
    function showRegister() {
        registerToggle.classList.add('active');
        loginToggle.classList.remove('active');
        registerForm.classList.add('active');
        loginForm.classList.remove('active');
    }

    // Event listeners for toggle buttons
    loginToggle.addEventListener('click', showLogin);
    registerToggle.addEventListener('click', showRegister);
    registerLink.addEventListener('click', function(e) {
        e.preventDefault(); // This will prevent the default event which here is login active
        showRegister();
    });
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        showLogin();
    });

    // Form submission handlers
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert("Login functionality would be implemented here.")
    });
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Registration functionality would be implemented here.');
    });

    // Fix: loop through all elements with class 'register-call'
    Array.from(registerCall).forEach(function(el) {
        el.addEventListener('click', function(e) {
            // no preventDefault() here because we want navigation to login.html
            // we just add query parameter via href in index.html
        });
    });

    // Check URL parameter on page load
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('register') === 'true') {
        showRegister();
    }
});

