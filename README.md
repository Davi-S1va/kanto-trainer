# Kanto Trainer

Uma Pokédex inspirada na região de Kanto, desenvolvida com Angular e integrada à PokeAPI.

O projeto foi criado como uma forma de praticar desenvolvimento web, consumo de APIs, componentes Angular, roteamento, organização de serviços e construção de interfaces responsivas.

---
## Acesse o projeto

---
🚀 **[Clique aqui para acessar o Kanto Trainer](https://davi-s1va.github.io/kanto-trainer/)**
<td>
  &nbsp;&nbsp;
  <img 
    src="https://media.tenor.com/yso9Ncqwm5UAAAAi/click-subscribe.gif" 
    width="120"
  />
</td>

---

## Sobre o projeto

O Kanto Trainer é uma Pokédex que apresenta os 151 Pokémon originais da região de Kanto.

A aplicação permite visualizar os Pokémon em uma Pokédex, acessar uma página individual com informações detalhadas e consultar suas estatísticas através de um gráfico de barras.

Além disso, o projeto possui uma barra de pesquisa, sistema de navegação entre páginas e uma tela de carregamento personalizada com um GIF do Pikachu.

A interface segue uma estética inspirada nos jogos clássicos de Pokémon, utilizando elementos visuais que remetem ao estilo pixel art.

---

## Funcionalidades

### Pokédex

A página principal apresenta os 151 Pokémon da primeira geração.

Cada Pokémon possui:

- Número na Pokédex
- Nome
- Sprite
- Tipos
- Acesso à página de detalhes

Os dados básicos dos Pokémon são obtidos através da PokeAPI.

---

### Página de detalhes

Cada Pokémon possui uma página própria.

A rota utilizada segue o padrão:

`/pokemon/:id`

Por exemplo:

`/pokemon/25`

corresponde ao Pikachu.

A página apresenta:

- Número da Pokédex
- Nome
- Tipos
- GIF animado do Pokémon
- Altura
- Peso
- Habilidade
- Estatísticas base

---

## Gráfico de estatísticas

A página de detalhes possui um gráfico de barras para representar os atributos base de cada Pokémon.

São apresentados:

- HP
- Ataque
- Defesa
- Ataque Especial
- Defesa Especial
- Velocidade

O tamanho da barra é calculado utilizando o valor da estatística em relação ao valor máximo de referência.

Exemplo:

```text
HP                 35
██████

Ataque             55
██████████

Defesa             40
███████

Velocidade         90
████████████████

As barras também possuem cores diferentes de acordo com o valor da estatística.

Sistema de carregamento

A aplicação possui uma tela global de carregamento.

Durante a navegação entre páginas, a tela é escurecida e um GIF do Pikachu é exibido.

O carregamento é controlado através dos eventos do Angular Router.

O fluxo funciona da seguinte maneira:

Usuário inicia uma navegação
          ↓
NavigationStart
          ↓
Loading é ativado
          ↓
Pikachu aparece na tela
          ↓
Angular carrega a nova página
          ↓
NavigationEnd
          ↓
Loading é desativado
          ↓
Nova página é exibida

Também existem tratamentos para:

NavigationCancel
NavigationError

Assim, o carregamento não permanece ativo caso uma navegação seja cancelada ou apresente erro.

GIFs dos Pokémon

Os GIFs utilizados nas páginas individuais ficam armazenados localmente.

A estrutura utilizada é:

public/
└── pokemon/
    ├── 001.gif
    ├── 002.gif
    ├── 003.gif
    ├── ...
    └── 151.gif

O sistema identifica o ID do Pokémon e monta automaticamente o caminho do GIF.

Por exemplo:

ID 1
↓
/pokemon/001.gif

ID 25
↓
/pokemon/025.gif

ID 151
↓
/pokemon/151.gif

Isso permite que cada Pokémon utilize seu GIF correspondente sem precisar configurar cada página manualmente.

Sprites

Na Pokédex principal são utilizados sprites dos Pokémon.

Os sprites são carregados a partir dos recursos disponibilizados pela PokeAPI.

A escolha dos sprites na página principal e dos GIFs nas páginas individuais permite manter a Pokédex mais leve e, ao mesmo tempo, deixar a página de detalhes mais dinâmica.

Barra de pesquisa

A navbar possui uma barra de pesquisa para localizar Pokémon.

Conforme o usuário digita, o sistema filtra os Pokémon disponíveis e apresenta os resultados.

Ao selecionar um resultado, o usuário é direcionado automaticamente para a página de detalhes daquele Pokémon.

Exemplo:

Buscar Pokémon
      ↓
Pikachu
      ↓
/pokemon/25
Navegação

A aplicação possui uma navbar global.

Atualmente existem as seguintes páginas:

Pokédex
Meu Time
Créditos
Pokédex

Página principal com os 151 Pokémon de Kanto.

Rota:

/pokedex
Meu Time

Página reservada para uma futura funcionalidade de criação e gerenciamento de equipe.

Atualmente a página informa:

Estamos trabalhando nisso...
Créditos

Página destinada aos agradecimentos, apresentação do projeto e link para o GitHub do desenvolvedor.

Tecnologias utilizadas
Front-end
Angular
TypeScript
HTML
CSS
Bootstrap
API
PokeAPI
Recursos
Sprites da PokeAPI
GIFs locais dos Pokémon
GIF personalizado de carregamento
Estrutura do projeto

A estrutura principal da aplicação segue aproximadamente:

kanto-trainer/
│
├── public/
│   ├── KantoTrainer_Transparente.png
│   ├── carregamento.gif
│   │
│   └── pokemon/
│       ├── 001.gif
│       ├── 002.gif
│       ├── ...
│       └── 151.gif
│
└── src/
    ├── app/
    │
    │   ├── loading/
    │   │   ├── loading.ts
    │   │   ├── loading.html
    │   │   └── loading.css
    │   │
    │   ├── navbar/
    │   │   ├── navbar.ts
    │   │   ├── navbar.html
    │   │   └── navbar.css
    │   │
    │   ├── pages/
    │   │   └── pokedex/
    │   │       ├── pokedex.ts
    │   │       ├── pokedex.html
    │   │       └── pokedex.css
    │   │
    │   ├── pokemon-detalhes/
    │   │   ├── pokemon-detalhes.ts
    │   │   ├── pokemon-detalhes.html
    │   │   └── pokemon-detalhes.css
    │   │
    │   ├── services/
    │   │   └── pokemon.ts
    │   │
    │   ├── app.ts
    │   ├── app.html
    │   ├── app.css
    │   ├── app.routes.ts
    │   └── app.config.ts
    │
    └── main.ts
Como a aplicação funciona

O funcionamento principal pode ser dividido em algumas etapas.

1. Inicialização

O Angular inicia a aplicação através do main.ts.

main.ts
   ↓
App
   ↓
Navbar + RouterOutlet + Loading

O RouterOutlet é responsável por exibir as páginas de acordo com a rota atual.

2. Carregamento da Pokédex

A página da Pokédex utiliza o PokemonService.

O serviço realiza uma requisição para a PokeAPI solicitando os Pokémon de Kanto.

Pokedex
   ↓
PokemonService
   ↓
PokeAPI
   ↓
151 Pokémon
   ↓
Array da aplicação
   ↓
Cards da Pokédex
3. Seleção de um Pokémon

Quando o usuário clica em um Pokémon, seu ID é enviado para o Router.

Exemplo:

Pikachu
ID: 25
   ↓
router.navigate()
   ↓
/pokemon/25

O Angular então carrega o componente de detalhes.

4. Consulta dos detalhes

A página de detalhes recebe o ID através da URL.

/pokemon/25
      ↓
ActivatedRoute
      ↓
ID = 25
      ↓
PokemonService
      ↓
PokeAPI
      ↓
Dados do Pikachu

Com os dados recebidos, a página monta as informações e o gráfico.

5. GIF

O GIF é carregado localmente utilizando o ID do Pokémon.

O código transforma o ID em três dígitos:

25
↓
025
↓
/pokemon/025.gif

Dessa forma, os 151 GIFs seguem o mesmo padrão.

Rotas

Atualmente o projeto utiliza rotas para separar as diferentes páginas.

/pokedex

Página principal da Pokédex.

/pokemon/:id

Página individual de cada Pokémon.

/meu-time

Página reservada para a funcionalidade de equipe.

/creditos

Página de créditos do projeto.

Design

A interface foi desenvolvida buscando uma identidade visual inspirada na estética clássica dos jogos Pokémon.

Alguns elementos utilizados são:

Bordas marcadas
Sombras sólidas
Tipografia com aparência monoespaçada
Elementos pixelados
Sprites
GIFs
Cores relacionadas aos tipos Pokémon
Interface simples e direta

A intenção é combinar uma estrutura moderna de aplicação web com referências visuais aos jogos clássicos.

Objetivo do projeto

O Kanto Trainer foi desenvolvido principalmente como projeto de aprendizado.

Durante o desenvolvimento foram praticados conceitos como:

Componentização no Angular
Standalone Components
TypeScript
Angular Router
Services
Injeção de dependências
Consumo de APIs REST
Interfaces TypeScript
Data binding
Event binding
@if
@for
Formulários
ngModel
Manipulação de imagens
CSS responsivo
Organização de projetos
Git e GitHub
Próximas funcionalidades

Algumas funcionalidades planejadas para versões futuras:

 Sistema completo de criação do Meu Time
 Adicionar Pokémon ao time
 Remover Pokémon do time
 Limite de 6 Pokémon
 Persistência do time
 Melhorias na busca
 Filtros por tipo
 Melhorias de responsividade
 Animações adicionais
 Melhorias gerais de UI/UX
 ```
## Créditos


Projeto desenvolvido por **[Dav-S1va](https://github.com/Davi-S1va)**

GitHub: https://github.com/Davi-S1va


PokeAPI: https://pokeapi.co/docs/v2
<td width="60%" align="center" valign="middle">

<img 
  src="https://media.tenor.com/3Ee3bt5jNxQAAAAi/pokemon-pok%C3%A9mon.gif"
  width="100px"
/>

</td>
