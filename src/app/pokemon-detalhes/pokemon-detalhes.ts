import {
  Component,
  signal
} from '@angular/core';

import {
  ActivatedRoute,
  Router
} from '@angular/router';

import {
  PokemonService
} from '../services/pokemon';

import {
  PokemonApi
} from '../../models/pokemon-api';

import {
  PokedexDeviceComponent
} from '../components/pokedex-device/pokedex-device';


@Component({
  selector: 'app-pokemon-detalhes',

  standalone: true,

  imports: [
    PokedexDeviceComponent
  ],

  templateUrl: './pokemon-detalhes.html',

  styleUrl: './pokemon-detalhes.css'
})
export class PokemonDetalhes {

  /*
   * Signal com o Pokémon atual.
   *
   * Quando o valor muda, o Angular atualiza
   * automaticamente o template.
   */
  pokemonApi = signal<PokemonApi | null>(null);


  /*
   * Signal para controlar erros.
   */
  erroCarregamento = signal(false);


  constructor(

    private readonly route:
      ActivatedRoute,

    private readonly router:
      Router,

    private readonly pokemonService:
      PokemonService

  ) {

    console.log(
      '🟢 PokemonDetalhes inicializado'
    );


    /*
     * Observa o ID da URL.
     *
     * Funciona tanto para:
     *
     * /pokemon/3
     *
     * quanto:
     *
     * /pokemon/3 → /pokemon/4
     *
     * /pokemon/4 → /pokemon/5
     */

    this.route.paramMap.subscribe(
      params => {

        const id = Number(
          params.get('id')
        );


        console.log(
          '🔵 ID recebido pela rota:',
          id
        );


        this.carregarPokemon(id);

      }
    );

  }


  carregarPokemon(
    id?: number
  ): void {

    /*
     * Quando o botão "Tentar novamente"
     * chama este método sem ID, usamos
     * o ID atual da URL.
     */

    if (id === undefined) {

      id = Number(
        this.route.snapshot
          .paramMap
          .get('id')
      );

    }


    console.log(
      '🔵 Carregando Pokémon:',
      id
    );


    /*
     * Limpa o Pokémon anterior.
     *
     * Como é signal, o Angular sabe
     * imediatamente que o template mudou.
     */

    this.pokemonApi.set(null);

    this.erroCarregamento.set(false);


    /*
     * Validação do ID.
     */

    if (
      !Number.isInteger(id) ||
      id < 1 ||
      id > 151
    ) {

      console.error(
        '🔴 ID inválido:',
        id
      );


      this.router.navigate([
        '/pokedex'
      ]);

      return;

    }


    console.log(
      '🔵 Buscando Pokémon na API:',
      id
    );


    this.pokemonService
      .buscarPokemon(id)
      .subscribe({

        next: (
          dados: PokemonApi
        ) => {

          console.log(
            '🟢 Pokémon carregado:',
            dados
          );


          /*
           * Validação dos dados recebidos.
           */

          if (
            !dados ||
            !dados.id ||
            !dados.name
          ) {

            console.error(
              '🔴 API retornou dados inválidos:',
              dados
            );


            this.pokemonApi.set(null);

            this.erroCarregamento.set(
              true
            );

            return;

          }


          /*
           * Atualiza o signal.
           *
           * NÃO precisamos de:
           *
           * detectChanges()
           * NgZone
           * zone.run()
           */

          this.pokemonApi.set(
            dados
          );


          this.erroCarregamento.set(
            false
          );


          console.log(
            '🟣 TELA ATUALIZADA COM:',
            dados.name
          );

          console.log(
            '🟣 ID ATUAL:',
            dados.id
          );

        },


        error: (
          erro: unknown
        ) => {

          console.error(
            '🔴 ERRO AO CARREGAR POKÉMON:',
            erro
          );


          this.pokemonApi.set(null);

          this.erroCarregamento.set(
            true
          );

        }

      });

  }


  /*
   * =========================
   * POKÉMON ANTERIOR
   * =========================
   */

  pokemonAnterior(): void {

    const pokemon =
      this.pokemonApi();


    if (!pokemon) {

      console.warn(
        '⚠️ Não existe Pokémon carregado.'
      );

      return;

    }


    const idAtual =
      pokemon.id;


    const idAnterior =
      idAtual <= 1
        ? 151
        : idAtual - 1;


    console.log(
      '⬅️ Pokémon anterior:',
      idAnterior
    );


    this.router.navigate([
      '/pokemon',
      idAnterior
    ]);

  }


  /*
   * =========================
   * PRÓXIMO POKÉMON
   * =========================
   */

  proximoPokemon(): void {

    const pokemon =
      this.pokemonApi();


    if (!pokemon) {

      console.warn(
        '⚠️ Não existe Pokémon carregado.'
      );

      return;

    }


    const idAtual =
      pokemon.id;


    const proximoId =
      idAtual >= 151
        ? 1
        : idAtual + 1;


    console.log(
      '➡️ Próximo Pokémon:',
      proximoId
    );


    this.router.navigate([
      '/pokemon',
      proximoId
    ]);

  }


  /*
   * =========================
   * VOLTAR
   * =========================
   */

  voltarParaPokedex(): void {

    console.log(
      '⬅️ Voltando para Pokédex'
    );


    this.router.navigate([
      '/pokedex'
    ]);

  }

}