

function verificarForcaDaSenha() {
    var senha = document.getElementById("senha").value;
    var forcaSenha = document.getElementById("forcaSenha");

    var forca = 0;

    if (senha.length >= 8) forca++;
    if (/[a-z]/.test(senha) && /[A-Z]/.test(senha)) forca++;
    if (/[0-9]/.test(senha)) forca++;
    if (/[\W_]/.test(senha)) forca++;

    switch (forca) {
        case 0:
        case 1:
            forcaSenha.textContent = "Senha fraca";
            forcaSenha.textContent = "Senha forte";
            forcaSenha.className = "forca-senha-msh forca-senha-vermelho mb-3";
            setTimeout(() => { forcaSenha.textContent = '' }, 3000)
            break;
        case 2:
            forcaSenha.textContent = "Senha mediana";
            forcaSenha.textContent = "Senha forte";
            forcaSenha.className = "forca-senha-msh forca-senha-amarelo mb-3";
            setTimeout(() => { forcaSenha.textContent = '' }, 3000)
            break;
        case 3:
        case 4:
            forcaSenha.textContent = "Senha forte";
            forcaSenha.style.textAlign='center'
            forcaSenha.className = "forca-senha-msh forca-senha-verde mb-3";
            setTimeout(() => { forcaSenha.textContent = '' }, 3000)
            break;
    }
}

document.getElementById("senha").addEventListener("input", verificarForcaDaSenha);

function toggleSenhaVisibility() {
    var senhaInput = document.getElementById("senha");
    var togglePassword = document.getElementById("togglePassword");
    console.log(senhaInput.type)
    if (senhaInput.type === "password") {
        senhaInput.type = "text";
        togglePassword.textContent = "Ocultar";
    } else {
        senhaInput.type = "password";
        togglePassword.textContent = "Mostrar";
    }
}

const pass = document.getElementById('divSenha').nextElementSibling.nextElementSibling
const info = document.createElement('p')

document.getElementById('botao').addEventListener('click', (evt) => {
    evt.preventDefault();
    const formElem = document.getElementById('cadastro');
    const formData = new FormData(formElem);
    const data = Object.fromEntries(formData)
    console.log(JSON.stringify(data))
    fetch('http://localhost:3000/users/cadastro', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
    })
        .then(res => res.json())
        .then(res => {

            const mensagem = res.message

            if (mensagem.includes('sucesso')) {
                info.innerHTML = mensagem
                info.style.textAlign='center'
                info.style.color = 'whitesmoke'
                formElem.insertBefore(info, pass)
                setTimeout(()=>{info.innerHTML=''},3000)
                setTimeout(()=>{window.location='../login/login.html'},3000)
            } else {
                info.innerHTML = mensagem
                info.style.textAlign='center'
                info.style.color = 'red'
                formElem.insertBefore(info, pass)
                setTimeout(()=>{info.innerHTML=''},4000)
            }

        });
});

