import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Pokemon } from '../services/pokemon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {

  

  pesquisa = '';
  constructor(public pokemonService:Pokemon,
    private router: Router
  ){}
  filtrarPokemon() {

  const todosPokemons = this.pokemonService.familias.flatMap(
    familia => familia.pokemons
  );

  return todosPokemons.filter(pokemon =>
      pokemon.nome
      .toLowerCase()
      .includes(this.pesquisa.toLowerCase())
  );

}
  selecionarPokemon(pokemon: any) {
  this.router.navigate([
    '/pokemon',
    pokemon.id
  ]);

}
}
