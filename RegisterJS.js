document.getElementById('registration').addEventListener('submit', function(event){
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    localStorage.setItem('User', JSON.stringify({
        name,
        email,
        password
    }))
    alert("Registered Successfully")

    window.location.href = 'login.html'

});