## Índice 
🔸[Descrição](#descri%C3%A7%C3%A3o-)  
🔸[Funcionalidades](#%EF%B8%8Ffontes-consultadas)  
🔸[Fontes Consultadas](#%EF%B8%8Ffontes-consultadas)  
🔸[Tecnologias Utilizadas](#tecnologias-utilizadas)  

## 📝Descrição 
Nesse projeto pegamos um código do Bootstrap 5 de layout e colocamos no VScode, a forma que iremos utilizar é para um usúario cadastrar o seu endereço.  
Passo a passo de como pegar o código do bootstrap:  
Primerio vai na barra de pesquisa Bootstrap 5, vai entrar no link, na tela principal do Bootstrap vai olha no canto esquerdo da tela e irá em forms, dentro de forms vai ter Layout, quando estiver layout vai no canto superior da tela direita e ir em Gutters, aí estará o modelo de como ficará o projeto e os código que usou.  
Irei deixar um video do mesmo passo a passo para facilitar caso mesmo assim não entenda o processo.   
<br><br>
![image info](_img/video-demonstrativo.gif)   

## ⚙️Funções
Iniciamos os códigos do JavaScript  
Função para limpar o formulário

    const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
    }

Função para verificar se o CEP é valido:  
Na primeira função utilizamos Arrown Function, que testa número informado com expressão regular<br>(espressão regular são padrões utilizados para selecionar combinações de caracteres em uma string.)  

    const eNumero = (numero) => /^[0-9]+$/.test(numero);

Na segunda função verifica tamnho do cep digitado e xeculta função de validação do cep eNumero
  
    const cepValido = (cep) => cep.length == 8 && eNumero(cep); 

Tem a função de preencher formulário

    const preencherFormulario = (endereco) => {
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf; 
    }

Consumo da API da ViaCep  
abre uma porta para acessar a URL  

    const pesquisarCep = async () => {
    limparFormulario();
    const url = `http://viacep.com.br/ws/${cep.value}/json/`;
    if (cepValido(cep.value)) {
    const dados = await fetch(url); 

JSON tipo de linguagem  

    const addres = await dados.json();

``hasOwnProperty`` retorna um booleano indicando se o objeto possui a propriedade especificada como uma propriedade definida no próprio objeto em questão  

    if (addres.hasOwnProperty('erro')) {
            alert('CEP não econtrado');
        } else {
            preencherFormulario(addres);
        }
    } else {
        alert('CEP Incorreto');
    }
    } 

Adiciona efeito DOM ao input do CEP para executar função pesquisarCEP  
(o DOM é um tipo de caminho que irá te auxilar nos códigos. 
Para mais informações acesse o link da [mozilla](https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction))

    document.getElementById('cep').addEventListener('focusout', pesquisarCep);       

## ♾️Fontes Consultadas
[Bootstrap](https://getbootstrap.com/docs/5.0/getting-started/introduction/) - 🖇️Link do Bootstrap  
[ViaCep](https://viacep.com.br/exemplo/javascript/) - 🖇️Link do ViaCep  

## 💻 Tecnologias Utilizadas
🟣JavaScript  
🟣HTML 5  
🟣Bootstrap 5  
🟣CSS 3  
🟣GitHub  

## 🔻Autores
| [<img loading="lazy" src="https://user-images.githubusercontent.com/127853659/273245697-656cec7e-3ce9-44ec-9fbc-f1f1c859b5da.jpg" width=115><br><sub>Maria Fernanda 🤍</sub>](https://github.com/MaferCastilho) |  [<img loading="lazy" src="https://user-images.githubusercontent.com/127853659/273244356-96c2ee2f-8a85-49d9-be21-11877ea502a0.jpg" width=115><br><sub>Janaina Paulino 🖤</sub>](https://github.com/janapaulinoo) |  [<img loading="lazy" src="https://user-images.githubusercontent.com/127853659/273246128-5ed08031-3a43-4fac-9fce-73a0bd0f1f0e.jpg" width=115><br><sub>Iris Carolina 💗</sub>](https://github.com/iriscarolina) |
| :---: | :---: | :---: |
