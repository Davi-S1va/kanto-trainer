import { Component } from '@angular/core';
import { Pokemon } from '../../services/pokemon';

@Component({
  selector: 'app-pokedex',
  imports: [],
  templateUrl: './pokedex.html',
  styleUrl: './pokedex.css',
})
export class Pokedex { 

   constructor(public pokemonService: Pokemon) {

  }
  
}


