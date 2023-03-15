if (localStorage.getItem('token') == null) {
    alert('Você precisa estar logado para acessar a pagina');
    window.location.href = './login.html';
}