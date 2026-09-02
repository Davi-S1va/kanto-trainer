import {
  Component,
  ElementRef,
  ViewChild,
  ChangeDetectorRef
} from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../services/pokemon';

import { PokemonApi } from '../../models/pokemon-api';


@Component({
  selector: 'app-pokemon-detalhes',
  imports: [],
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

    if (!id || id < 1) {
      this.router.navigate(['/pokedex']);
      return;
    }

    this.pokemonService.buscarPokemon(id)
      .subscribe({

        next: (dados) => {

          this.pokemonApi = dados;

          /*
           * GIF individual do Pokémon.
           *
           * Os GIFs estão dentro de:
           * public/pokemon/
           *
           * Exemplo:
           * public/pokemon/001.gif
           * public/pokemon/025.gif
           * public/pokemon/151.gif
           */

          this.gifPokemon =
            `/pokemon/${id
              .toString()
              .padStart(3, '0')}.gif`;


          /*
           * Garante que o HTML seja atualizado
           * antes de tentarmos colocar o GIF.
           */

          this.cdr.detectChanges();


          /*
           * Espera o Angular criar a imagem
           * no HTML.
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

        }

      });

  }


  atualizarImagem(): void {

    if (
      this.imagemPokemon &&
      this.gifPokemon
    ) {

      this.imagemPokemon.nativeElement.src =
        this.gifPokemon;

    }

  }


  traduzirTipo(tipo: string): string {

    const tipos: { [key: string]: string } = {

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


  traduzirStatus(status: string): string {

    const statusTraduzidos: {
      [key: string]: string
    } = {

      hp: 'HP',
      attack: 'Ataque',
      defense: 'Defesa',
      'special-attack': 'Ataque Especial',
      'special-defense': 'Defesa Especial',
      speed: 'Velocidade'

    };

    return statusTraduzidos[status] ?? status;

  }


  porcentagemStatus(valor: number): number {

    /*
     * O maior valor base normal dos status
     * dos Pokémon fica próximo de 255.
     *
     * Usamos 255 como referência para
     * preencher a barra proporcionalmente.
     */

    const porcentagem =
      (valor / 255) * 100;

    return Math.min(
      Math.max(porcentagem, 0),
      100
    );

  }


  voltarParaPokedex(): void {

    this.router.navigate([
      '/pokedex'
    ]);

  }

}