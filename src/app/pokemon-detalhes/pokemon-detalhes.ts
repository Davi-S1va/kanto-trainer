import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../services/pokemon';

@Component({
  selector: 'app-pokemon-detalhes',
  imports: [],
  templateUrl: './pokemon-detalhes.html',
  styleUrl: './pokemon-detalhes.css',
})
export class PokemonDetalhes {
  pokemonSelecionado: any;

  constructor(
    private route: ActivatedRoute,
    public pokemonService: Pokemon
  )
   {
    const id = Number(
      this.route.snapshot.paramMap.get('id')
    );

    const todosPokemons = this.pokemonService.familias.flatMap(
      familia => familia.pokemons
    );

    this.pokemonSelecionado = todosPokemons.find(
      pokemon => pokemon.id === id
    );

  }
}
