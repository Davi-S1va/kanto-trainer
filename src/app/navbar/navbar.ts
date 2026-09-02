import {
  Component,
  OnInit,
  ChangeDetectorRef
} from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PokemonService } from '../services/pokemon';

import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',

  imports: [
    RouterLink,
    FormsModule
  ],

  templateUrl: './navbar.html',

  styleUrl: './navbar.css',
})


export class Navbar implements OnInit {


  pesquisa: string = '';


  pokemons: any[] = [];


  constructor(

    private pokemonService:
      PokemonService,

    private router:
      Router,

    private cdr:
      ChangeDetectorRef

  ) {}


  ngOnInit() {

    console.log(
      '🟢 NAVBAR INICIALIZADA'
    );

    this.carregarPokemons();

  }


  carregarPokemons() {

    console.log(
      '🔵 NAVBAR CARREGANDO POKÉMONS'
    );


    this.pokemonService
      .buscarPokemonsKanto()
      .subscribe({

        next: (dados) => {

          console.log(
            '🟢 NAVBAR RECEBEU:',
            dados.results.length
          );


          this.pokemons =
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


          console.log(
            '🔥 POKÉMONS NO NAVBAR:',
            this.pokemons.length
          );


          this.cdr.detectChanges();

        },


        error: (erro) => {

          console.error(
            '🔴 ERRO NO NAVBAR:',
            erro
          );

        }

      });

  }


  filtrarPokemon() {

    if (
      this.pesquisa.trim().length === 0
    ) {

      return [];

    }


    return this.pokemons.filter(

      (pokemon: any) =>

        pokemon.nome
          .toLowerCase()
          .includes(

            this.pesquisa
              .toLowerCase()

          )

    );

  }


  selecionarPokemon(
    pokemon: any
  ) {

    console.log(
      '➡️ POKÉMON SELECIONADO:',
      pokemon
    );


    this.router.navigate([

      '/pokemon',

      pokemon.id

    ]);


    // Limpa a pesquisa
    this.pesquisa = '';

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

}