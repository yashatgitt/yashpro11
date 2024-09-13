document.addEventListener('DOMContentLoaded', function() {
    const toggleRegister = document.getElementById('toggleRegister');
    const toggleLogin = document.getElementById('toggleLogin');
    const loginSection = document.querySelector('.login-section');
    const registerSection = document.querySelector('.register-section');
    const registerForm = document.getElementById('registerForm');
    const registerErrorMessage = document.getElementById('registerErrorMessage');

    // Show registration section and hide login section
    toggleRegister.addEventListener('click', function(event) {
        event.preventDefault();
        loginSection.style.display = 'none';
        registerSection.style.display = 'block';
    });

    // Show login section and hide registration section
    toggleLogin.addEventListener('click', function(event) {
        event.preventDefault();
        registerSection.style.display = 'none';
        loginSection.style.display = 'block';
    });

    // Handle registration form submission
    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('registerEmail').value.trim();
        const password = document.getElementById('registerPassword').value.trim();

        // Basic validation
        if (name === '' || email === '' || password === '') {
            registerErrorMessage.textContent = 'Please fill in all fields.';
            return;
        }

        // Simulate successful registration
        if (email.includes('@') && password.length >= 6) {
            registerErrorMessage.textContent = '';
            alert('Registration successful!');
            registerSection.style.display = 'none';
            loginSection.style.display = 'block'; // Show login section after registration
        } else {
            registerErrorMessage.textContent = 'Invalid email or password.';
        }
    });
});
