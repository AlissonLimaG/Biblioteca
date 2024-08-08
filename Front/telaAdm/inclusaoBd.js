const dados = [
    {
        img: './Imgs/ling1.jpg',
        titulo: 'Linguagem de Programação',
        desc: 'De forma didática e objetiva, este livro apresenta os fundamentos da linguagem de computador e da lógica de programação (algoritmo, programa, diagrama de bloco).',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo1',
        editora: 'EditoraExemplo1'
    },
    {
        img: './Imgs/img2.jpg',
        titulo: 'Era uma vez um algoritimo: como as histórias explicam a computação',
        desc: 'Quando pensamos em como um computador funciona imaginamos raciocínios complexos, cálculos e outras coisas surpreendentes que a máquina pode fazer.',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo2',
        editora: 'EditoraExemplo2'
    },
    {
        img: './Imgs/img3.jpeg',
        titulo: 'Entendendo algoritmos',
        desc: 'Um guia ilustrado para programadores e outros curiosos. Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema. ',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo3',
        editora: 'EditoraExemplo3'
    },
    {
        img: './Imgs/img4.jpg',
        titulo: 'JavaScript: O Guia Definitivo',
        desc: 'Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web.',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo4',
        editora: 'EditoraExemplo4'
    },
    {
        img: './Imgs/img5.jpg',
        titulo: 'Introdução à Programação com Python – 4ª Edição',
        desc: 'Este livro se destina ao iniciante em programação e foi escrito para ajudar o leitor autodidata a aprender a programar. ',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo5',
        editora: 'EditoraExemplo5'
    },
    {
        img: './Imgs/img6.jpg',
        titulo: 'Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes',
        desc: 'Atualmente as empresas estão coletando dados a taxas exponenciais e mesmo assim poucas pessoas sabem como acessá-los de maneira relevante. ',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo6',
        editora: 'EditoraExemplo6'
    },
    {
        img: './Imgs/img7.jpg',
        titulo: 'Python Para Excel: um Ambiente Moderno Para Automação e Análise de Dados',
        desc: 'Embora o Excel permaneça onipresente no mundo dos negócios, a Microsoft ― depois de muitas solicitações da comunidade ― anunciou que o Python será oficialmente integrado ao Excel, trazendo finalmente um dos recursos mais aguardados.',
        arquivo: './books/exemplo.pdf',
        autor: 'AutorExemplo7',
        editora: 'EditoraExemplo7'
    }
]


const createCardCrud = (imgSrc, titulo, desc, archive) => {
    const cardContainer = document.getElementById('lineCards');

    const colDiv = document.createElement('div');
    colDiv.className = 'col-sm-3 col-lg-3 container-card';

    const cardDiv = document.createElement('div');
    cardDiv.dataset.autor = autor;
    cardDiv.dataset.editora = editora
    cardDiv.className = 'card';
    cardDiv.addEventListener('click', (evt) => {
        cardDiv.classList.toggle('expandBox')
    })

    const img = document.createElement('img');
    img.src = imgSrc;
    img.className = 'card-img-top';
    img.alt = '...';

    const cardBodyDiv = document.createElement('div');
    cardBodyDiv.className = 'card-body';

    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title mt-sm-3';
    cardTitle.id = 'cardTitle'
    cardTitle.textContent = titulo;

    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = desc;

    const divbuttons = document.createElement('div');
    divbuttons.id = 'divButtons'

    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = 'Atualizar';
    button.addEventListener('click', (evt) => {
        evt.stopPropagation()
        const title = document.getElementById('titulo')
        const autor = document.getElementById('autor')
        const editora = document.getElementById('editora')
        const desc = document.getElementById('descricao')
        title.value = button.parentElement.previousElementSibling.previousElementSibling.innerText
        autor.value = button.parentElement.parentElement.parentElement.dataset.autor
        editora.value = button.parentElement.parentElement.parentElement.dataset.editora
        desc.value = button.parentElement.previousElementSibling.innerText
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })

    })

    const button2 = document.createElement('button');
    button2.className = 'btn btn-primary ms-3';
    button2.textContent = 'Excluir';
    button2.id = 'buttDelete';
    button2.style.backgroundColor = '#c92828'
    button2.addEventListener('click', (evt) => {
        evt.stopPropagation()
        button2.parentElement.parentElement.parentElement.parentElement.remove()
    })

    const download = document.createElement('a')
    download.href = archive
    download.download = archive


    cardBodyDiv.appendChild(cardTitle);
    cardBodyDiv.appendChild(cardText);
    download.appendChild(button)
    divbuttons.appendChild(button)
    divbuttons.appendChild(button2)
    cardBodyDiv.appendChild(divbuttons)

    cardDiv.appendChild(img);
    cardDiv.appendChild(cardBodyDiv);

    colDiv.appendChild(cardDiv);
    cardContainer.appendChild(colDiv);
}

const hyperlink = (caminho) => {
    window.location.href = caminho
}

const butt = document.getElementById('botao')
const formElem = document.getElementById('cadastroLivros');
formElem.addEventListener('submit', (evt) => {
    evt.preventDefault()    
    const formData = new FormData(formElem);
    console.log(formData)

    fetch('http://localhost:3000/books/cadastro', {
        method: 'POST',
        body: formData
    })
    
});

