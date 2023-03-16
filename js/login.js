function logar() {
    const user = document.getElementById('user').value;
    const password = document.getElementById('password').value;

    if (user == 'ValidUser' && password == 'ValidPassword') {
        location.href = 'index.html';
    } else {
        //alert('Usuario ou senha incorretos.');
    }
}

function toggleSenha() {
    let senhaInput = document.getElementById("password");
    if (senhaInput.type === "password") {
      senhaInput.type = "text";
      document.getElementById("toggleimgsenha").setAttribute("name", "eye-outline");
    } else {
      senhaInput.type = "password";
      document.getElementById("toggleimgsenha").setAttribute("name", "eye-off-outline");}}