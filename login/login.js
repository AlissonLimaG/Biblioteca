const submeter = document.getElementById('login');
const usuarios = [
    { email: 'usuario1@docente.com', senha: 'Docente123' },
    { email: 'usuario2@adm.com', senha: 'Adm123' },
    { email: 'usuario3@discente.com', senha: 'Discente123' }
];

submeter.addEventListener('submit', (event) => {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const usuarioValido = usuarios.find(usuario => usuario.email === email && usuario.senha === senha); //retorna o primeiro elemento que satifaz a condição

    if (usuarioValido) {

        if(email === 'usuario2@adm.com'){
            window.location.href = '../index/indexAdm.html'
        
        }else{
            window.location.href = '../index/index.html';
        }
        
    }else{
        alert('Email ou senha incorretos. Tente novamente.');
    }
});

