document.getElementById('contactForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var emailConfirm = document.getElementById('emailConfirm').value;
    var emailError = document.getElementById('emailError');
    var successMessage = document.getElementById('successMessage');

    if (email !== emailConfirm) {
        emailError.style.display = "block";
        successMessage.style.display = "none"; 
        event.preventDefault(); 
    } else {
        emailError.style.display = "none";
        successMessage.style.display = "block"; 
        event.preventDefault(); 
        document.getElementById('contactForm').reset();
    }
});
