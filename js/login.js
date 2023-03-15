function logar() {
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    if (email == 'admin' && password == 'admin') {
        location.href = 'index.html';
    } else {
        alert('Usuario ou senha incorretos.');
    }
}

function toggleSenha() {
    var senhaInput = document.getElementById("password");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      document.getElementById("toggleimgsenha").setAttribute("name", "eye-outline");
    } else {
      senhaInput.type = "password";
      document.getElementById("toggleimgsenha").setAttribute("name", "eye-off-outline");}}