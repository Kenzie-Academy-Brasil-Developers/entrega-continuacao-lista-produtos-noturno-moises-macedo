import produtos from './dataProdutos.js'

const ul = document.querySelector('.containerListaProdutos ul');


//LISTA DE PRODUTOS

const montarListaProdutos = (listaProdutos) => {
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const button = document.createElement('button');

        
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.preco;
        span.innerText = produto.secao;

        produto.componentes.forEach((componente) => {
            const lista = document.createElement('li');
            lista.innerHTML = componente;
            ol.appendChild(lista);
        })

        button.innerText = 'Adicionar ao carrinho'

        p.style.fontSize = '13px'
        p.style.marginTop = '7px'

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        li.appendChild(button);

        
        ul.appendChild(li);

    });

    const botaoCarrinho = document.querySelectorAll('.containerListaProdutos button');
    const addCart = document.querySelector('.containerCarrinho ul')

    botaoCarrinho.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const nome = document.createElement('p');
            const valor = document.createElement('p');
            const secao = document.createElement('p');

            img.src = listaProdutos[index].img;
            img.alt = listaProdutos[index].nome;
            nome.innerText = listaProdutos[index].nome;
            valor.innerText = listaProdutos[index].preco;
            secao.innerText = listaProdutos[index].secao;

            li.appendChild(img);
            li.appendChild(nome);
            li.appendChild(valor);
            li.appendChild(secao);

            img.style.width = "60px"


            
            addCart.appendChild(li);
            filtrarCarrinho();

        })
    });
}

const filtrarCarrinho = (produto) => {
    const listCarr = document.querySelectorAll('.containerCarrinho ul li p:nth-child(3)');

    const arr = [];

    listCarr.forEach(p => arr.push(Number(p.textContent)));
    const soma = arr.reduce((acc, cv) => acc += cv, 0);

    document.querySelector('#precoTotal').innerHTML = soma.toFixed(2)
}


//MOSTRAR TODOS

const mostrartodos = () =>{

    const listaTodosprodutos = produtos.filter((produto) => {

        return produto.categoria !== ''

    });
    montarListaProdutos(listaTodosprodutos);

}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrartodos);



//HORTIFRUTI 

const filtrarPorHortifruti = () => {

    const listaHortifruti = produtos.filter((produto) => {
        return produto.secao === 'Hortifruti';
    });

    montarListaProdutos(listaHortifruti);

    

}
const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');
botaoMostrarHortifruti.addEventListener('click', filtrarPorHortifruti);


//BUSCA POR NOME 
const inputPesquisa= () => {

    const input = document.querySelector('.campoBuscaPorNome').value;

    const listaBusca = produtos.filter((produto) => {


        return produto.nome.toLowerCase()  === input.toLowerCase() || produto.secao.toLowerCase()  === input.toLowerCase()  || produto.categoria.toLowerCase()  === input.toLowerCase() 

    })
    montarListaProdutos(listaBusca)
}

const botaoBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBusca.addEventListener('click', inputPesquisa)


//CARDS PROMOCIONAIS

const baratoDoDia = (listaProdutos) =>{
    ul.innerHTML = '';

    listaProdutos.forEach((produto) => {
        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');
        const p = document.createElement('p');
        const span = document.createElement('span');
        const ol = document.createElement('ol');
        const button = document.createElement('button');

        
        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;
        p.innerText = produto.precoPromocao;
        span.innerText = produto.secao;

        produto.componentes.forEach((componente) => {
            const lista = document.createElement('li');
            lista.innerHTML = componente;
            ol.appendChild(lista);
        })

        button.innerText = 'Adicionar ao carrinho'


        p.style.fontSize = '13px'
        p.style.marginTop = '7px'


        
        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(ol);
        li.appendChild(button);

        
        ul.appendChild(li);

    });

    const botaoCarrinho = document.querySelectorAll('.containerListaProdutos button');
    const addCart = document.querySelector('.containerCarrinho ul')

    botaoCarrinho.forEach((elem, index) => {
        elem.addEventListener('click', () => {
            const li = document.createElement('li');
            const img = document.createElement('img');
            const nome = document.createElement('p');
            const valor = document.createElement('p');
            const secao = document.createElement('p');

            img.src = listaProdutos[index].img;
            img.alt = listaProdutos[index].nome;
            nome.innerText = listaProdutos[index].nome;
            valor.innerText = listaProdutos[index].precoPromocao;
            secao.innerText = listaProdutos[index].secao;

            li.appendChild(img);
            li.appendChild(nome);
            li.appendChild(valor);
            li.appendChild(secao);

            img.style.width = "60px"


            
            addCart.appendChild(li);
            filtrarCarrinho();

        })
    });

   
    

}
// FILTRO PROMO

const promocao = () =>{
   

    const listaPromo = produtos.filter((produto) => {

        return produto.promocao === true  

    })   
    
    baratoDoDia(listaPromo);

}
const botaoBaratoDia = document.querySelector('.estiloGeralBotoes--filtrarBarato');
botaoBaratoDia.addEventListener('click', promocao);