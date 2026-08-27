import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class Pokemon {
     familias = [

    {
      numero: 1,
      pokemons: [
        {
          id: 1,
          nome: 'Bulbasaur',
          tipos: ['Planta', 'Veneno']
        },
        {
          id: 2,
          nome: 'Ivysaur',
          tipos: ['Planta', 'Veneno']
        },
        {
          id: 3,
          nome: 'Venusaur',
          tipos: ['Planta', 'Veneno']
        }
      ]
    },

    {
      numero: 4,
      pokemons: [
        {
          id: 4,
          nome: 'Charmander',
          tipos: ['Fogo']
        },
        {
          id: 5,
          nome: 'Charmeleon',
          tipos: ['Fogo']
        },
        {
          id: 6,
          nome: 'Charizard',
          tipos: ['Fogo', 'Voador']
        }
      ]
    },

    {
      numero: 7,
      pokemons: [
        {
          id: 7,
          nome: 'Squirtle',
          tipos: ['Água']
        },
        {
          id: 8,
          nome: 'Wartortle',
          tipos: ['Água']
        },
        {
          id: 9,
          nome: 'Blastoise',
          tipos: ['Água']
        }
      ]
    },

    {
      numero: 25,
      pokemons: [
        {
          id: 25,
          nome: 'Pikachu',
          tipos: ['Elétrico']
        },
        {
          id: 26,
          nome: 'Raichu',
          tipos: ['Elétrico']
        }
      ]
    }

  ];


}