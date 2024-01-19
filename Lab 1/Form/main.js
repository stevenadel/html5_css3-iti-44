document.getElementById('name').addEventListener('input', (event) => {
    var usernameError = document.getElementById('name-error');
    event.target.checkValidity() ? usernameError.style.display = 'none' : usernameError.style.display = 'block';
});

document.getElementById('email').addEventListener('input', (event) => {
    var emailError = document.getElementById('email-error');
    event.target.checkValidity() ? emailError.style.display = 'none' : emailError.style.display = 'block';
});
