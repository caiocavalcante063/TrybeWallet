# TrybeWallet

## Tecnologias utilizadas

React, utilizando Redux para gerenciamento do estado da aplicação. O projeto consome a API ["API de Cotações de Moedas"](https://docs.awesomeapi.com.br/api-de-moedas).

## Descrição

Carteira de controle de gastos com conversor de moedas. Ao utilizar essa aplicação um usuário deverá ser capaz de:

- Adicionar e remover um gasto;
- Visualizar uma tabela com seus gastos;
- Visualizar o total de gastos convertidos para uma moeda de escolha.

O projeto foi realizado como parte do programa de formação da Trybe.  Foi separado nos seguintes requisitos:

1 . Criar uma página de Login com as verificações: 
- O email está no formato válido, como 'alguem@alguem.com'. 
- A senha possui 6 ou mais caracteres.
2. Criar uma página para a carteira
3. Criar um header exibindo o email da pessoa usuária.
4. Desenvolver um formulário para as despesas, que inclua:
- Um campo para adicionar valor da despesa
- Um campo para adicionar a descrição da despesa.
- Um campo para selecionar em qual moeda será registrada a despesa.
- Um campo para adicionar qual método de pagamento será utilizado.
- Um campo para selecionar uma categoria (tag) para a despesa.
- Um botão com o texto 'Adicionar despesa' que salva as informações da despesa no estado global e atualiza a soma de despesas no header.
5. Implementar a lógica para preencher as opções do campo "Moedas" buscando as siglas da API
6. Desenvolver uma tabela de gastos contendo: os campos Descrição, Tag, Método de pagamento, Valor, Moeda, Câmbio utilizado, Valor convertido e Moeda de conversão.
7. Implementar a lógica para que a tabela seja alimentada pelo estado da aplicação.
8. Criar um botão para deletar uma despesa da tabela.

## Para visualizar o projeto

Acesse o link https://caiocavalcante063.github.io/TrybeWallet/, ou:
Clone este repositório, instale as dependências utilizando o comando `npm install` no terminal e `npm start` em seguida para visualizar o projeto. 
