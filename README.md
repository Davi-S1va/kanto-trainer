# Kanto Trainer

Uma Pokédex interativa inspirada na região de Kanto, desenvolvida com Angular e integrada à PokeAPI.

O projeto foi criado como uma forma de praticar desenvolvimento web, consumo de APIs, componentes Angular, roteamento, organização de serviços, manipulação de imagens, interfaces responsivas e construção de experiências inspiradas nos jogos clássicos de Pokémon.

---

## 🚀 Acesse o projeto

**[Clique aqui para acessar o Kanto Trainer](https://davi-s1va.github.io/kanto-trainer/)**

<p align>
  <img
    src="https://media.tenor.com/yso9Ncqwm5UAAAAi/click-subscribe.gif"
    width="120"
  />
</p>

---

# 📖 Sobre o projeto

O **Kanto Trainer** é uma aplicação web que apresenta os **151 Pokémon originais da região de Kanto**.

A aplicação possui uma Pokédex principal, páginas individuais para cada Pokémon e um sistema de criação de equipe.

O projeto combina recursos modernos do Angular com uma identidade visual inspirada nos jogos clássicos de Pokémon, utilizando sprites, GIFs animados, elementos pixel art, cores fortes, bordas marcadas e componentes interativos.

---

# ✨ Funcionalidades

## 🔴 Pokédex

A página principal apresenta os 151 Pokémon da primeira geração.

Cada Pokémon possui:

- Número na Pokédex
- Nome
- Sprite
- Acesso à página de detalhes
- Navegação individual

Os dados são obtidos através da **PokeAPI**.

---

# 📟 Pokédex individual

Cada Pokémon possui uma página própria utilizando a rota:

```text
/pokemon/:id

Por exemplo:

/pokemon/25

corresponde ao Pikachu.

A página individual apresenta uma interface inspirada em uma Pokédex física, contendo:

Número da Pokédex
Nome
Tipos
GIF animado
Altura
Peso
Habilidade
Experiência base
Estatísticas base
Navegação entre Pokémon
🎮 D-Pad

A Pokédex individual possui um D-pad funcional.

Os botões esquerdo e direito permitem navegar entre os Pokémon.

Exemplo:

Pokémon #025
     ↓
← Pokémon anterior | Próximo Pokémon →

A navegação é feita através do Angular Router, permitindo alterar o Pokémon sem precisar recarregar a aplicação.

📊 Estatísticas

A página de detalhes apresenta as estatísticas base do Pokémon através de barras visuais.

São apresentados:

HP
Ataque
Defesa
Ataque Especial
Defesa Especial
Velocidade

O tamanho das barras é calculado de acordo com o valor da estatística em relação ao valor máximo utilizado como referência.

Exemplo:

HP                 35
██████

Ataque             55
██████████

Defesa             40
███████

Velocidade         90
████████████████

As barras também possuem cores diferentes de acordo com o valor da estatística.

👥 Meu Time

O projeto possui uma área dedicada à criação de uma equipe Pokémon.

Rota:

/meu-time

A interface simula um campo de batalha inspirado nos jogos clássicos.

O usuário pode montar uma equipe com até 6 Pokémon.

🏆 Montagem da equipe

Os Pokémon selecionados são exibidos diretamente no campo.

Cada posição da equipe possui um slot próprio.

A equipe possui:

┌─────────┬─────────┬─────────┐
│ SLOT 1  │ SLOT 2  │ SLOT 3  │
├─────────┼─────────┼─────────┤
│ SLOT 4  │ SLOT 5  │ SLOT 6  │
└─────────┴─────────┴─────────┘

Os Pokémon são exibidos utilizando seus GIFs normais, enquanto a lista lateral utiliza versões menores dos GIFs.

🚫 Pokémon duplicados

Um Pokémon não pode ser selecionado duas vezes na mesma equipe.

Quando um Pokémon já está no time:

O item fica marcado na lista.
O Pokémon não pode ser selecionado novamente.
O sistema impede automaticamente a duplicação.

Isso mantém a regra básica de uma equipe Pokémon.

🎮 D-Pad do Meu Time

O campo possui um D-pad para navegar entre os seis slots da equipe.

O usuário pode utilizar:

⬆️ Cima
⬇️ Baixo
⬅️ Esquerda
➡️ Direita

O slot atualmente selecionado é destacado visualmente.

A navegação permite escolher em qual posição o próximo Pokémon será colocado.

🔄 Reset Time

A interface possui um botão:

RESET TIME

Ao clicar nele, todos os Pokémon selecionados são removidos e os seis slots retornam ao estado inicial.

Equipe atual
   ↓
RESET TIME
   ↓
6 slots vazios
🧑‍🏫 Treinador

A área Meu Time também possui um treinador.

É possível alternar entre:

Red
Leaf

O treinador é exibido utilizando sprites/GIFs em estilo pixel art.

🐾 Companheiro Pokémon

O treinador possui uma Pokébola interativa.

Ao clicar nela, é aberta uma interface para escolher o Pokémon que acompanhará o treinador.

O sistema possui:

Lista dos Pokémon
GIFs mini dos Pokémon
Barra de pesquisa
Seleção de um único companheiro
Troca do companheiro selecionado

Após selecionar um Pokémon, seu GIF mini é exibido ao lado do treinador.

🔎 Pesquisa de companheiro

A escolha do companheiro possui uma barra de pesquisa.

Exemplo:

Pesquisar Pokémon...

Pikachu

Ao selecionar um Pokémon, ele passa a acompanhar o treinador.

A Pokébola pode ser utilizada novamente para trocar o companheiro.

📋 Lista de Pokémon

A área lateral do Meu Time apresenta os 151 Pokémon.

A lista possui uma área de visualização com rolagem própria.

Isso evita que os 151 Pokémon aumentem o tamanho da página.

Cada item apresenta:

GIF mini
Número
Nome
Indicação de Pokémon já selecionado

A navegação da lista utiliza uma barra de rolagem vertical semelhante à barra de rolagem tradicional do navegador.

⏳ Sistema de carregamento

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

Dessa forma, o carregamento não permanece ativo caso uma navegação seja cancelada ou apresente erro.

🎞️ GIFs dos Pokémon

Os GIFs utilizados nas páginas individuais e no Meu Time ficam armazenados localmente.

A estrutura principal utilizada é:

public/
└── pokemon/
    ├── 001.gif
    ├── 002.gif
    ├── 003.gif
    ├── ...
    └── 151.gif

O sistema identifica o ID do Pokémon e monta automaticamente o caminho correspondente.

Por exemplo:

ID 1
↓
001.gif
ID 25
↓
025.gif
ID 151
↓
151.gif

Isso permite utilizar o mesmo sistema para os 151 Pokémon.

🧩 GIFs mini

O projeto também utiliza versões menores dos Pokémon para determinados elementos da interface.

A estrutura utilizada é:

public/
└── gif_mini/
    ├── Bulbasaur_mini.gif
    ├── Ivysaur_mini.gif
    ├── Venusaur_mini.gif
    ├── ...
    └── Mew_mini.gif

Os GIFs mini são utilizados principalmente na:

Lista de seleção do Meu Time
Seleção do companheiro
Interface do companheiro do treinador

Enquanto os GIFs normais são utilizados na exibição dos Pokémon dentro da equipe.

🧑‍🎨 Sprites

Na Pokédex principal são utilizados sprites dos Pokémon disponibilizados pela PokeAPI.

A aplicação utiliza diferentes tipos de recursos visuais de acordo com a funcionalidade:

Pokédex
   ↓
Sprites da PokeAPI

Página individual
   ↓
GIFs locais

Meu Time
   ↓
GIFs normais + GIFs mini

Companheiro
   ↓
GIF mini

Essa divisão permite utilizar imagens diferentes de acordo com a finalidade de cada parte da interface.

🔎 Barra de pesquisa

A navbar possui uma barra de pesquisa para localizar Pokémon.

Conforme o usuário digita, o sistema filtra os Pokémon disponíveis e apresenta os resultados.

Ao selecionar um resultado, o usuário é direcionado automaticamente para a página de detalhes.

Exemplo:

Buscar Pokémon
      ↓
Pikachu
      ↓
/pokemon/25
🧭 Navegação

A aplicação possui uma navbar global.

Atualmente existem as seguintes páginas:

Pokédex
/pokedex

Página principal contendo os 151 Pokémon de Kanto.

Detalhes do Pokémon
/pokemon/:id

Página individual com informações detalhadas sobre cada Pokémon.

Meu Time
/meu-time

Página para montagem e gerenciamento de uma equipe de até seis Pokémon.

Créditos
/creditos

Página destinada aos créditos e informações sobre o projeto.

🛠️ Tecnologias utilizadas
Front-end
Angular
TypeScript
HTML
CSS
Bootstrap
API
PokeAPI
Recursos visuais
Sprites da PokeAPI
GIFs locais dos Pokémon
GIFs mini dos Pokémon
GIF personalizado de carregamento
Elementos de pixel art
Ferramentas
Visual Studio Code
Git
GitHub
GitHub Pages
📁 Estrutura do projeto

A estrutura principal da aplicação segue aproximadamente:

kanto-trainer/
│
├── public/
│   ├── KantoTrainer_Transparente.png
│   ├── carregamento.gif
│   │
│   ├── pokemon/
│   │   ├── 001.gif
│   │   ├── 002.gif
│   │   ├── 003.gif
│   │   ├── ...
│   │   └── 151.gif
│   │
│   ├── gif_mini/
│   │   ├── Bulbasaur_mini.gif
│   │   ├── Ivysaur_mini.gif
│   │   ├── ...
│   │   └── Mew_mini.gif
│   │
│   └── pokeutil/
│       ├── red_mini.gif
│       ├── leaf_mini.gif
│       ├── mini_pokebola.png
│       └── chat_pixel.png
│
└── src/
    ├── app/
    │
    │   ├── components/
    │   │   └── pokedex-device/
    │   │       ├── pokedex-device.ts
    │   │       ├── pokedex-device.html
    │   │       └── pokedex-device.css
    │   │
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
    │   │   ├── pokedex/
    │   │   │   ├── pokedex.ts
    │   │   │   ├── pokedex.html
    │   │   │   └── pokedex.css
    │   │   │
    │   │   ├── meu-time/
    │   │   │   ├── meu-time.ts
    │   │   │   ├── meu-time.html
    │   │   │   └── meu-time.css
    │   │   │
    │   │   └── cretidtos/
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
⚙️ Como a aplicação funciona

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

Quando o usuário seleciona um Pokémon, seu ID é enviado para o Router.

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

Com os dados recebidos, a aplicação monta a interface da Pokédex individual.

5. Navegação entre Pokémon

Na página individual, o D-pad permite navegar entre os Pokémon.

Pokémon atual
     ↓
D-pad
     ↓
Router
     ↓
Novo ID
     ↓
PokemonService
     ↓
Novo Pokémon

A aplicação observa as alterações da rota para atualizar o Pokémon exibido sem precisar recriar manualmente toda a página.

6. Montagem do time

No Meu Time, o usuário seleciona um dos seis slots.

D-pad
   ↓
Slot selecionado
   ↓
Usuário escolhe Pokémon
   ↓
Pokémon é colocado no slot

Antes de adicionar um Pokémon, o sistema verifica se ele já está presente na equipe.

Pokémon selecionado
        ↓
Já está no time?
     ↙       ↘
   SIM       NÃO
    ↓          ↓
 Bloqueia    Adiciona
🎨 Design

A interface foi desenvolvida buscando uma identidade visual inspirada na estética clássica dos jogos Pokémon.

Entre os elementos utilizados estão:

Bordas marcadas
Sombras sólidas
Cores fortes
Tipografia monoespaçada
Elementos pixelados
Sprites
GIFs animados
Botões inspirados em interfaces de jogos
D-pad
Pokébola interativa
Interface de treinador
Campo de grama
Componentes responsivos

A intenção é combinar uma estrutura moderna de aplicação web com referências visuais aos jogos clássicos.

📱 Responsividade

O projeto possui estilos responsivos para diferentes tamanhos de tela.

A interface adapta elementos como:

Pokédex
Campo do Meu Time
Painel lateral
Lista de Pokémon
D-pad
Cards
Menus
Seleção de companheiro

O objetivo é permitir que a aplicação seja utilizada tanto em computadores quanto em telas menores.

🎯 Objetivo do projeto

O Kanto Trainer foi desenvolvido principalmente como um projeto de aprendizado e evolução prática em desenvolvimento web.

Durante o desenvolvimento foram praticados conceitos como:

Componentização no Angular
Standalone Components
TypeScript
Angular Router
Services
Injeção de dependências
Consumo de APIs REST
Interfaces TypeScript
Data Binding
Event Binding
@if
@for
Formulários
ngModel
Signals
Manipulação de imagens
CSS responsivo
Organização de projetos
Git
GitHub
GitHub Pages
🚧 Próximas funcionalidades

Algumas ideias para futuras versões:

Persistência do time utilizando LocalStorage
Remoção individual de Pokémon
Sistema de troca de posições
Mais filtros na Pokédex
Filtros por tipo
Sistema de ordenação
Melhorias na pesquisa
Mais informações na página de detalhes
Melhorias de responsividade
Animações adicionais
Efeitos sonoros
Melhorias gerais de UI/UX
👨‍💻 Créditos

Projeto desenvolvido por Davi-S1va.

GitHub:

https://github.com/Davi-S1va

🔗 Recursos utilizados
PokeAPI

https://pokeapi.co/docs/v2

A PokeAPI é utilizada para obtenção dos dados dos Pokémon.
 ```
<p align="center"> <img src="https://media.tenor.com/3Ee3bt5jNxQAAAAi/pokemon-pok%C3%A9mon.gif" width="100" /> </p> <p align="center"> <strong>Gotta catch 'em all! 🔴⚪</strong> </p>
