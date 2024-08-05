const frases = [
    "Programar é pensar, não digitar.",
    "A programação é uma arte, e você deve sempre se esforçar para criar arte.",
    "O código é como o humor. Quando você tem que explicar, não é tão bom.",
    "Primeiro, resolva o problema. Então, escreva o código.",
    "A melhor maneira de prever o futuro é implementá-lo."
    ]
    const autores = ['Harlan Mills','Ron Jeffries','Cory House','John Johnson','David Heinemeier Hansson']
    
    
    const dados = [
        {
            img: './Imgs/ling1.jpg',
            titulo: 'Linguagem de Programação',
            desc: 'De forma didática e objetiva, este livro apresenta os fundamentos da linguagem de computador e da lógica de programação (algoritmo, programa, diagrama de bloco).',
            arquivo: './books/exemplo.pdf'
        },
        {
            img: './Imgs/img2.jpg',
            titulo: 'Era uma vez um algoritimo: como as histórias explicam a computação',
            desc: 'Quando pensamos em como um computador funciona imaginamos raciocínios complexos, cálculos e outras coisas surpreendentes que a máquina pode fazer.',
            arquivo: './books/exemplo.pdf'
        },
        {
            img: './Imgs/img3.jpeg',
            titulo:'Entendendo algoritmos',
            desc:'Um guia ilustrado para programadores e outros curiosos. Um algoritmo nada mais é do que um procedimento passo a passo para a resolução de um problema. ',
            arquivo: './books/exemplo.pdf'
        },
        {
            img: './Imgs/img4.jpg',
            titulo: 'JavaScript: O Guia Definitivo',
            desc: 'Referência completa para programadores, JavaScript: O guia definitivo fornece uma ampla descrição da linguagem JavaScript básica e das APIs JavaScript do lado do cliente definidas pelos navegadores Web.',
            arquivo: './books/exemplo.pdf'
        },
        {
            img:'./Imgs/img5.jpg',
            titulo: 'Introdução à Programação com Python – 4ª Edição',
            desc:'Este livro se destina ao iniciante em programação e foi escrito para ajudar o leitor autodidata a aprender a programar. ',
            arquivo: './books/exemplo.pdf'
        },
        {
            img: './Imgs/img6.jpg',
            titulo:'Introdução à Linguagem SQL: Abordagem Prática Para Iniciantes',
            desc:'Atualmente as empresas estão coletando dados a taxas exponenciais e mesmo assim poucas pessoas sabem como acessá-los de maneira relevante. ',
            arquivo: './books/exemplo.pdf'
        },
        {
            img:'./Imgs/img7.jpg',
            titulo:'Python Para Excel: um Ambiente Moderno Para Automação e Análise de Dados',
            desc:'Embora o Excel permaneça onipresente no mundo dos negócios, a Microsoft ― depois de muitas solicitações da comunidade ― anunciou que o Python será oficialmente integrado ao Excel, trazendo finalmente um dos recursos mais aguardados. ',
            arquivo: './books/exemplo.pdf'
        }
    ]
    
    const createCard = (imgSrc,titulo,desc,archive)=>{
        const cardContainer = document.getElementById('lineCards');
    
        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-3 col-lg-3 container-card';
    
        const cardDiv = document.createElement('div');
        cardDiv.className = 'card';
        cardDiv.addEventListener('click',(evt)=>{
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
    
        const button = document.createElement('button');
        button.className = 'btn btn-primary';
        button.textContent = 'Download';
    
        const download = document.createElement('a')
        download.href = archive
        download.download = archive
    
    
        cardBodyDiv.appendChild(cardTitle);
        cardBodyDiv.appendChild(cardText);
        download.appendChild(button)
        cardBodyDiv.appendChild(download);
    
        cardDiv.appendChild(img);
        cardDiv.appendChild(cardBodyDiv);
    
        colDiv.appendChild(cardDiv);
        cardContainer.appendChild(colDiv);
      }
    
    const hyperlink = (caminho) => {
        window.location.href = caminho
    }
