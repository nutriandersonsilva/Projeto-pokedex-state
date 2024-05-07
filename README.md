# Exercise Pokedex State

Este é um projeto da Trybe que envolve o desenvolvimento de uma aplicação Pokédex utilizando componentes React e estado.

## Descrição

Neste projeto, você irá incrementar uma aplicação Pokédex para exibir apenas um Pokémon por vez e permitir a filtragem por tipo de Pokémon.

## Funcionalidades Obrigatórias

- Exibir apenas um Pokémon por vez
- Criar um botão "Próximo Pokémon" para percorrer a lista de Pokémon
- Ao exibir o último Pokémon da lista e clicar em "Próximo Pokémon", o primeiro Pokémon da lista deve ser exibido novamente
- Criar botões de filtro para exibir apenas os Pokémon de um tipo específico

## Habilidades Requeridas

Para completar este projeto, você precisa demonstrar habilidades em:

- Ler o estado de um componente e usá-lo para alterar o que é exibido no navegador
- Inicializar um componente com um estado pré-definido
- Atualizar o estado de um componente
- Capturar eventos utilizando a sintaxe do React

## Como Executar o Projeto

1. Clone este repositório
2. Navegue até a pasta do projeto e execute `npm install` para instalar as dependências
3. Execute `npm start` para iniciar a aplicação no navegador
4. Acesse a aplicação em seu navegador utilizando o endereço fornecido pelo servidor local

## Estrutura do Projeto

- `src/`: Pasta contendo o código-fonte da aplicação
  - `components/`: Componentes React da aplicação
    - `Pokedex.js`: Componente principal da Pokédex, responsável por exibir os Pokémon e implementar as funcionalidades de filtragem e navegação
    - `Pokemon.js`: Componente para exibir as informações de um Pokémon individualmente
    - `Button.js`: Componente para criar botões reutilizáveis na aplicação
  - `data/`: Pasta contendo os dados dos Pokémon em formato JSON
  - `styles/`: Pasta contendo os estilos CSS da aplicação, separados por componente

