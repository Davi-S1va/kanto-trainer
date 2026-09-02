import {
  Component,
  OnInit,
  ChangeDetectorRef,
  NgZone
} from '@angular/core';

import { PokemonService } from '../../services/pokemon';

import { Router } from '@angular/router';


@Component({
  selector: 'app-pokedex',

  imports: [],

  templateUrl: './pokedex.html',

  styleUrl: './pokedex.css',
})


export class Pokedex implements OnInit {


  pokemons: any[] = [];


  carregando: boolean = true;


  erro: string = '';


  constructor(

    private pokemonService:
      PokemonService,

    private router:
      Router,

    private cdr:
      ChangeDetectorRef,

    private zone:
      NgZone

  ) {}


  ngOnInit() {

    console.log(
      '🟢 POKEDEX INICIALIZADA'
    );

    this.carregarPokemons();

  }


  carregarPokemons() {

    console.log(
      '🔵 INICIANDO CARREGAMENTO'
    );


    this.carregando = true;

    this.erro = '';


    this.pokemonService
      .buscarPokemonsKanto()
      .subscribe({

        next: (dados) => {

          console.log(
            '🟢 DADOS RECEBIDOS:',
            dados
          );


          this.zone.run(() => {

            const lista =
              dados.results.map(
                (
                  pokemon: any,
                  index: number
                ) => {

                  return {

                    id:
                      index + 1,

                    nome:
                      this.formatarNome(
                        pokemon.name
                      )

                  };

                }
              );


            // Cria uma NOVA referência
            this.pokemons = [
              ...lista
            ];


            this.carregando = false;


            console.log(
              '🔥 POKÉMONS NO ARRAY:',
              this.pokemons.length
            );


            // FORÇA atualização
            this.cdr.detectChanges();


            // Segunda confirmação
            setTimeout(() => {

              this.cdr.detectChanges();

              console.log(
                '🟣 TOTAL APÓS ATUALIZAÇÃO:',
                this.pokemons.length
              );

            }, 0);

          });

        },


        error: (erro) => {

          console.error(
            '🔴 ERRO AO CARREGAR:',
            erro
          );


          this.zone.run(() => {

            this.erro =
              'Não foi possível carregar a Pokédex.';


            this.carregando =
              false;


            this.cdr.detectChanges();

          });

        }

      });

  }


  formatarNome(
    nome: string
  ): string {

    return (
      nome.charAt(0)
        .toUpperCase()
      +
      nome.slice(1)
    );

  }


  abrirPokemon(
    pokemon: any
  ) {

    if (
      !pokemon ||
      !pokemon.id
    ) {

      console.error(
        '🔴 Pokémon inválido:',
        pokemon
      );

      return;

    }


    console.log(
      '➡️ ABRINDO:',
      pokemon.id
    );


    this.router.navigate([
      '/pokemon',
      pokemon.id
    ]);

  }
  getClasseTipo(tipo: string): string {

  return 'tipo-' + tipo.toLowerCase();

}

}