

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
                forcaSenha.className = "forca-senha-msh forca-senha-vermelho";
                break;
            case 2:
                forcaSenha.textContent = "Senha mediana";
                forcaSenha.className = "forca-senha-msh forca-senha-amarelo";
                break;
            case 3:
            case 4:
                forcaSenha.textContent = "Senha forte";
                forcaSenha.className = "forca-senha-msh forca-senha-verde";
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
        }else{
            senhaInput.type = "password";
            togglePassword.textContent = "Mostrar";
        }
}


    
