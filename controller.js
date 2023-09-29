'use strict'; //modo restrito
//Consumindo API de CEP, do ViaCep
//https://viacep.com.br/

//Função para limpar o formulário
const limparFormulario = () => {
    document.getElementById('rua').value = '';
    document.getElementById('bairro').value = '';
    document.getElementById('cidade').value = '';
    document.getElementById('estado').value = '';
}

// Verificar se CEP é válido
const eNumero = (numero) => /^[0-9]+$/.test(numero); //Testa número informado com expressão regular
const cepValido = (cep) => cep.legth == 8 && eNumero(cep); //Verifica tamnho do cep digitado e xeculta função de validação do cep eNumero

// Função para preencher formulário
const preencherFormulario = (endereco) => { 
    document.getElementById('rua').value = endereco.logradouro;
    document.getElementById('bairro').value = endereco.bairro;
    document.getElementById('cidade').value = endereco.localidade;
    document.getElementById('estado').value = endereco.uf;
}