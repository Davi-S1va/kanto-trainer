import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';

import { TitleCasePipe } from '@angular/common';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import { PokemonService } from '../services/pokemon';

import { PokemonApi } from '../../models/pokemon-api';


@Component({
  selector: 'app-pokemon-detalhes',

  imports: [
    TitleCasePipe
  ],

  templateUrl: './pokemon-detalhes.html',

  styleUrl: './pokemon-detalhes.css',
})


export class PokemonDetalhes {

  pokemonApi: PokemonApi | null = null;

  gifPokemon: string = '';


  @ViewChild('imagemPokemon')
  imagemPokemon?: ElementRef<HTMLImageElement>;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService,
    private cdr: ChangeDetectorRef
  ) {

    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );


    if (
      !id ||
      id < 1 ||
      id > 151
    ) {

      this.router.navigate([
        '/pokedex'
      ]);

      return;

    }


    this.carregarPokemon(id);

  }


  carregarPokemon(
    id: number
  ): void {

    this.pokemonService
      .buscarPokemon(id)

      .subscribe({

        next: (dados) => {

          this.pokemonApi = dados;


          /*
           * GIF local do Pokémon
           *
           * Exemplo:
           * /pokemon/001.gif
           * /pokemon/025.gif
           * /pokemon/151.gif
           */

          this.gifPokemon =
            `/pokemon/${id
              .toString()
              .padStart(3, '0')}.gif`;


          /*
           * Força o Angular
           * a atualizar a tela
           */

          this.cdr.detectChanges();


          /*
           * Aguarda a imagem
           * existir no HTML
           */

          setTimeout(() => {

            this.atualizarImagem();

          }, 0);

        },


        error: (erro) => {

          console.error(
            'Erro ao carregar Pokémon:',
            erro
          );


          this.router.navigate([
            '/pokedex'
          ]);

        }

      });

  }


  atualizarImagem(): void {

    if (
      this.imagemPokemon &&
      this.gifPokemon
    ) {

      this.imagemPokemon
        .nativeElement
        .src = this.gifPokemon;

    }

  }


  traduzirTipo(
    tipo: string
  ): string {

    const tipos: {
      [key: string]: string
    } = {

      normal: 'Normal',

      fire: 'Fogo',

      water: 'Água',

      electric: 'Elétrico',

      grass: 'Planta',

      ice: 'Gelo',

      fighting: 'Lutador',

      poison: 'Veneno',

      ground: 'Terrestre',

      flying: 'Voador',

      psychic: 'Psíquico',

      bug: 'Inseto',

      rock: 'Pedra',

      ghost: 'Fantasma',

      dragon: 'Dragão',

      dark: 'Sombrio',

      steel: 'Aço',

      fairy: 'Fada'

    };


    return tipos[tipo] ?? tipo;

  }


  traduzirStatus(
    status: string
  ): string {

    const statusTraduzidos: {
      [key: string]: string
    } = {

      hp: 'HP',

      attack: 'Ataque',

      defense: 'Defesa',

      'special-attack':
        'Ataque Especial',

      'special-defense':
        'Defesa Especial',

      speed: 'Velocidade'

    };


    return (
      statusTraduzidos[status]
      ?? status
    );

  }


  porcentagemStatus(
    valor: number
  ): number {

    /*
     * 255 é utilizado como
     * referência máxima.
     *
     * Garantimos que nunca
     * passe de 100%.
     */

    const porcentagem =
      (valor / 255) * 100;


    return Math.min(
      Math.max(
        porcentagem,
        0
      ),
      100
    );

  }


  corStatus(
    valor: number
  ): string {

    /*
     * Cores diferentes
     * dependendo do valor.
     */

    if (valor >= 120) {

      return '#3bc95f';

    }


    if (valor >= 80) {

      return '#f2c94c';

    }


    if (valor >= 50) {

      return '#f2994a';

    }


    return '#e74c3c';

  }


  voltarParaPokedex(): void {

    this.router.navigate([
      '/pokedex'
    ]);

  }

}