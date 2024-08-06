const submeter = document.getElementById('login')
const button = document.getElementById('divButton')

button.addEventListener('click', (event) => {
    event.preventDefault();
    const formElem = document.getElementById('login')
    const formData = new FormData(formElem)
    const data = Object.fromEntries(formData)
    console.log(data)
    fetch('http://localhost:3000/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(res => res.json())
        .then(res => {
            if (res.message == 'erro') {
                const aviso = document.createElement('p')
                aviso.innerText = 'Email ou senha incorretos'
                aviso.style.color = 'red'
                aviso.style.textAlign = 'center'
                submeter.insertBefore(aviso, button)
                setTimeout(() => { aviso.innerText = '' }, 3000)
            }
            else if (res.message == 'adm') {
                let cont = 5
                const aviso = document.createElement('p')
                aviso.style.color = 'white'
                aviso.style.textAlign = 'center'
                submeter.insertBefore(aviso, button)
                setInterval(() => { aviso.innerText = 'Login efetuado com sucesso! Você será redirecionado em: ' + cont-- }, 1000)
                setTimeout(() => { window.location = '../index/indexAdm.html' }, 6000)
            }
            else if (res.message == 'user') {
                let cont = 5
                const aviso = document.createElement('p')
                aviso.style.color = 'white'
                aviso.style.textAlign = 'center'
                submeter.insertBefore(aviso, button)
                setInterval(() => { aviso.innerText = 'Login efetuado com sucesso! Você será redirecionado em: ' + cont-- }, 1000)
                setTimeout(() => { window.location = '../index/index.html' }, 6000)
            }
            else{
                const aviso = document.createElement('p')
                aviso.innerText = res.message
                aviso.style.color = 'red'
                aviso.style.textAlign = 'center'
                submeter.insertBefore(aviso, button)
                setTimeout(() => { aviso.innerText = '' }, 3000)
            }

        })

});

