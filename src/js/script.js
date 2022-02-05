import produtos from './dataProdutos.js'

const ul = document.querySelector('.containerListaProdutos ul');
console.log("oi")




const montarListaProdutos = (listaProdutos) =>{

    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) =>{
        

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');        
        const p = document.createElement('p');
        const infoNutri = document.createElement('ol')
        const indexZero = document.createElement('li')
        const indexUm = document.createElement('li')
        const indexDois = document.createElement('li')
        const indexTres = document.createElement('li')
        const span = document.createElement('span');
        const buttonAddCarrinho = document.createElement('button');
        
        
        ///////////////////////////////////

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;        
        p.innerText = 'RS' + produto.preco 
        span.innerText = produto.secao 
        buttonAddCarrinho.innerText = "adicionar ao Carrinho"
        

        indexZero.innerText = produto.componentes[0]
        indexUm.innerText = produto.componentes[1]
        indexDois.innerText = produto.componentes[2]
        indexTres.innerText = produto.componentes[3] 
        ///////////////////////////////////

        
        ///////////////////////////////////
        p.style.fontSize = '13px'
        p.style.marginTop = '7px'
        ///////////////////////////////////
        
        infoNutri.style.marginTop = "5px"
        indexZero.style.fontSize = '11px'        
        indexUm.style.fontSize = '11px'
        indexDois.style.fontSize = '11px'
        indexTres.style.fontSize = '11px'

        

        
        
        
        ///////////////////////////////////

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(infoNutri);
        li.appendChild(buttonAddCarrinho);
        infoNutri.appendChild(indexZero);
        infoNutri.appendChild(indexUm);
        infoNutri.appendChild(indexDois);
        infoNutri.appendChild(indexTres);

        ul.appendChild(li);

    });  
    
    

}



const filtrarPorHortiFruti = () =>{  
    
    const listaHortifruti = produtos.filter((produto) => {
        
        return produto.secao === 'Hortifruti';

    });
    montarListaProdutos(listaHortifruti)

}



const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

botaoMostrarHortifruti.addEventListener('click', filtrarPorHortiFruti);


/////////////////////////////////////////



const mostrartodos = () =>{

    const listaTodosprodutos = produtos.filter((produto) => {

        return produto.categoria !== ''


    });
    montarListaProdutos(listaTodosprodutos);

}

const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');
botaoMostrarTodos.addEventListener('click', mostrartodos);



////////////////////////////////////////////////

const inputPesquisa= () => {

    const input = document.querySelector('.campoBuscaPorNome').value;

    const listaBusca = produtos.filter((produto) => {


        return produto.nome.toLowerCase()  === input.toLowerCase() || produto.secao.toLowerCase()  === input.toLowerCase()  || produto.categoria.toLowerCase()  === input.toLowerCase() 

    })
    montarListaProdutos(listaBusca)
}

const botaoBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBusca.addEventListener('click', inputPesquisa);















