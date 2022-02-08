import produtos from './dataProdutos.js'

const ul = document.querySelector('.containerListaProdutos ul');


const ListaCarrinho = (listaProdutos) =>{

    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) =>{
        

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');        
        const p = document.createElement('p');
        const infoNutri = document.createElement('ol')
       
        const span = document.createElement('span');
        
        
        
        ///////////////////////////////////

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;        
        p.innerText = 'RS' + produto.preco;
        span.innerText = produto.secao ;
        

        ///////////////////////////////////
        p.style.fontSize = '13px'
        p.style.marginTop = '7px'
                
        infoNutri.style.marginTop = "5px"

        
        

        
        ///////////////////////////////////

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(infoNutri);
        
        

        ul.appendChild(li);

        

    });   

 

}




const montarListaProdutos = (listaProdutos) =>{

    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) =>{
        

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');        
        const p = document.createElement('p');
        const infoNutri = document.createElement('ol')
       
        const span = document.createElement('span');
        const buttonAddCarrinho = document.createElement('button');
        
        
        ///////////////////////////////////

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;        
        p.innerText = 'RS' + produto.preco ;
        span.innerText = produto.secao ;
        buttonAddCarrinho.innerText = "adicionar ao Carrinho";
        

        ///////////////////////////////////
        p.style.fontSize = '13px'
        p.style.marginTop = '7px'       
        
        infoNutri.style.marginTop = "5px"
        
        ///////////////////////////////////

        

        ///////////////////////////////////

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(infoNutri);
        li.appendChild(buttonAddCarrinho);
        

        ul.appendChild(li);


        //////////////////////////////////

        for(let contador=0; contador < produto.componentes.length; contador++){

            const listaLi = document.createElement('li');

            listaLi.innerText = produto.componentes[contador];

            infoNutri.appendChild(listaLi);            

        }

        function addCarrinho () {  
            
            const produtosCarrinho = document.querySelector('.containerPrecoTotal');
            
            const li = document.createElement('li');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');        
            const p = document.createElement('p');
            const infoNutri = document.createElement('ol')
        
            const span = document.createElement('span');
            
            
            
            ///////////////////////////////////

            img.src = produto.img;
            img.alt = produto.nome;
            h3.innerText = produto.nome;        
            p.innerText = 'RS' + produto.preco;
            span.innerText = produto.secao ;
            

            ///////////////////////////////////
            p.style.fontSize = '13px'
            p.style.marginTop = '7px'
            img.style.width = "60px"
                    
            infoNutri.style.marginTop = "5px"

            li.style.height = '70px'

            span.style.fontSize = '12px'

            
            

            
            ///////////////////////////////////

            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(span);
            li.appendChild(infoNutri);
        
        

            produtosCarrinho.appendChild(li);

            
        }  
           

          
        
        buttonAddCarrinho.addEventListener('click', addCarrinho);

    });    

    

}

// const MostraPreco=(arrayProdutos) =>{

//     const precoTotal = document.querySelector('#precoTotal');
//     const NumeroInt = Number(produtos.preco)

    

//     const SomandoTudo = arrayProdutos.reduce((Acumulador, produto) => {


//         return  NumeroInt(Acumulador + produto)
//     }, 0);

//     //montarListaProdutos(SomandoTudo);

//     precoTotal.innerText= SomandoTudo

// }




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

/////////////////////////////////////////

//PROMOÇÕES//



////////////// HTML DOS CARDS EM PROMOÇÃO//////////////////


const baratoDoDia = (listaProdutos) =>{

    ul.innerHTML = '';
    
    listaProdutos.forEach((produto) =>{
        

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');        
        const p = document.createElement('p');
        const infoNutri = document.createElement('ol')
       
        const span = document.createElement('span');
        const buttonAddCarrinho = document.createElement('button');
        
        
        ///////////////////////////////////

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;        
        p.innerText = 'RS' + produto.precoPromocao ;
        span.innerText = produto.secao ;
        buttonAddCarrinho.innerText = "adicionar ao Carrinho";
        

        ///////////////////////////////////
        p.style.fontSize = '13px'
        p.style.marginTop = '7px'
                
        infoNutri.style.marginTop = "5px"

        buttonAddCarrinho.classList.add('button');
        

        
        ///////////////////////////////////

        li.appendChild(img);
        li.appendChild(h3);
        li.appendChild(p);
        li.appendChild(span);
        li.appendChild(infoNutri);
        li.appendChild(buttonAddCarrinho);
        

        ul.appendChild(li);


        //////////////////////////////////

        for(let contador=0; contador < produto.componentes.length; contador++){

            const listaLi = document.createElement('li');

            listaLi.innerText = produto.componentes[contador];

            infoNutri.appendChild(listaLi);            

        }
        function addCarrinho () {  
            
            const produtosCarrinho = document.querySelector('.containerPrecoTotal');
            
            const li = document.createElement('li');
            const img = document.createElement('img');
            const h3 = document.createElement('h3');        
            const p = document.createElement('p');
            const infoNutri = document.createElement('ol')
        
            const span = document.createElement('span');
            
            
            
            ///////////////////////////////////

            img.src = produto.img;
            img.alt = produto.nome;
            h3.innerText = produto.nome;        
            p.innerText = 'RS' + produto.precoPromocao ;
            span.innerText = produto.secao ;
            

            ///////////////////////////////////
            p.style.fontSize = '13px'
            p.style.marginTop = '7px'
            img.style.width = "60px"
                    
            infoNutri.style.marginTop = "5px"

            li.style.height = '70px'

            span.style.fontSize = '12px'

            
            

            
            ///////////////////////////////////

            li.appendChild(img);
            li.appendChild(h3);
            li.appendChild(p);
            li.appendChild(span);
            li.appendChild(infoNutri);
        
        

            produtosCarrinho.appendChild(li);

            
        }
        buttonAddCarrinho.addEventListener('click', addCarrinho);

    });    

    

}


////////////FILTRO DE ITENS PROMOCIONAIS///////////

const promocao = () =>{

    

    const listaPromo = produtos.filter((produto) => {

        return produto.promocao === true  

    })   

    
    baratoDoDia(listaPromo);

}
const botaoBaratoDia = document.querySelector('.estiloGeralBotoes--filtrarBarato');

botaoBaratoDia.addEventListener('click', promocao);



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

////////////////////////////////////////////////















