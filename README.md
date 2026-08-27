# 🎮 Kanto Trainer

Projeto desenvolvido com Angular com o objetivo de praticar conceitos de desenvolvimento Front-End e aprender gradualmente os principais recursos do framework.

O projeto consiste em uma aplicação baseada nos Pokémon da região de Kanto, contendo uma Pokédex e funcionalidades de pesquisa e navegação entre Pokémon.

## 🚀 Funcionalidades atuais

- Pokédex com Pokémon da região de Kanto.
- Exibição das linhas evolutivas.
- Exibição de número, nome e tipos dos Pokémon.
- Dados centralizados em um Service.
- Renderização dinâmica utilizando Angular.
- Barra de pesquisa de Pokémon.
- Filtragem dos Pokémon conforme o usuário digita.
- Sugestões de resultados durante a pesquisa.
- Navegação para a página individual de cada Pokémon.
- Rotas dinâmicas utilizando o ID do Pokémon.

## 🧠 Conceitos praticados

Durante o desenvolvimento do projeto estão sendo utilizados conceitos como:

- Componentes.
- Data Binding.
- Interpolação.
- Property Binding.
- Event Binding.
- Two-Way Data Binding com `ngModel`.
- Diretivas de controle como `@for` e `@if`.
- Services.
- Injeção de dependência.
- Arrays e objetos.
- Métodos `filter()`, `find()` e `flatMap()`.
- Angular Router.
- Rotas dinâmicas.
- `RouterOutlet`.
- `ActivatedRoute`.
- Navegação programática.

## 🗂️ Estrutura principal

```text
src/app
│
├── navbar/
│   ├── navbar.ts
│   ├── navbar.html
│   └── navbar.css
│
├── pokedex/
│   ├── pokedex.ts
│   ├── pokedex.html
│   └── pokedex.css
│
├── pokemon-detalhes/
│   ├── pokemon-detalhes.ts
│   ├── pokemon-detalhes.html
│   └── pokemon-detalhes.css
│
├── services/
│   └── pokemon.ts
│
├── app.routes.ts
├── app.ts
├── app.html
└── app.css
