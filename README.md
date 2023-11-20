# Teste para vaga de desenvolvedor Fron-End - Consumo de API de Produtos

Este projeto consiste na resolução de um desafio que visa avaliar a capacidade de escrever código limpo, bem testado e reutilizável.  
O objetivo é criar uma aplicação que consuma uma API REST de produtos para exibir a lista de itens da loja e permitir interações básicas com um carrinho de compras.



### Funcionalidades Requeridas

- **Loja:**
  - Consumir a API de produtos para exibir a lista de itens da loja.
  - Utilizar um efeito shimmer/skeleton enquanto os dados estiverem em processo de carregamento.

- **Carrinho:**
  - Exibir todos os produtos selecionados.
  - Permitir aumentar e diminuir a quantidade de cada item no carrinho.
  - Permitir remover item no carrinho.

- **Responsividade:**
  - O projeto foi desenvolvido levando em consideração a responsividade para se adaptar às telas de diversos formatos, como dispositivos móveis, tablets e desktops.



### Testes Unitários

- Utilização do Jest e testing-library para realizar os testes unitários.

## Recursos

### UI/UX

- Utilização do design do [Figma loja - Design System](https://www.figma.com/file/Z4z8osDbK1ET7cjNzFRMrK/MKS-Front-end-challenge?mode=dev).


### API

- Utilização da API REST de produtos para exibir a lista de itens da loja.

## Tecnologias utilizadas

- TypeScript
- Next
- React-query
- Styled-components
- Jest

## Aspectos Técnicos

- Todas as ferramentas listadas são obrigatórias. Além disso, sinta-se à vontade para clonar este repositório.

## Deploy

- Para deploy utilizei o Vercel.  
- [Link para Acesar o Deploy](https://mks-frontend-challenge-sable.vercel.app/)

## Instruções de Execução

1. **Clonagem do Repositório:**  
git clone https://github.com/seu-usuario/nome-do-repositorio.git

2. **Instalar as dependências:**  
cd nome-do-repositorio  
npm install

3. **Desenvolvimento:**  
npm run dev   

4. **Testes Unitários:**  
npx jest


## Considerações Finais

Ao desenvolver a solução, priorizei a utilização das ferramentas solicitadas, como TypeScript, React, Jest, React-query e Styled-components, garantindo a conformidade com as diretrizes estabelecidas.

Durante a implementação da aplicação, foquei na eficiência do consumo da API REST de produtos, priorizando a apresentação da lista de produtos na loja com um efeito shimmer/skeleton durante o carregamento. Além disso, o carrinho foi desenvolvido para conter todos os produtos selecionados, oferecendo a funcionalidade de aumentar a quantidade de cada item escolhido.

Os testes unitários foram escritos utilizando Jest e a testing-library, assegurando a qualidade do código e a correta execução das funcionalidades implementadas.

Utilizei o Figma para consultar o design system e garantir a consistência na apresentação visual da aplicação, seguindo as orientações fornecidas.

Estou aberto(a) a qualquer feedback ou sugestão para aprimorar ainda mais a solução desenvolvida.
