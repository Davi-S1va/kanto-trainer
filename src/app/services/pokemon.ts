import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

import { Pokemon } from '../../models/pokemon';

import { PokemonApi } from '../../models/pokemon-api';




@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private readonly apiUrl =
    'https://pokeapi.co/api/v2/pokemon';


  constructor(
    private http: HttpClient
  ) {}


  buscarPokemonsKanto(): Observable<any> {

    return this.http.get<any>(
      `${this.apiUrl}?limit=151&offset=0`
    );

  }


  buscarPokemon(
    id: number
  ): Observable<PokemonApi> {

    return this.http.get<PokemonApi>(
      `${this.apiUrl}/${id}`
    );

  }


  private transformarPokemon(
    pokemonApi: PokemonApi
  ): Pokemon {

    return {

      id: pokemonApi.id,

      nome: pokemonApi.name,

      tipos: pokemonApi.types.map(
        tipo => tipo.type.name
      ),

      altura:
        `${pokemonApi.height / 10} m`,

      peso:
        `${pokemonApi.weight / 10} kg`,

      categoria: '',

      habilidade:
        pokemonApi.abilities[0]
          ?.ability.name ?? '',

      fraquezas: [],

      descricao: '',

      gif: '',

      estatisticas: {

        hp:
          pokemonApi.stats[0]
            ?.base_stat ?? 0,

        ataque:
          pokemonApi.stats[1]
            ?.base_stat ?? 0,

        defesa:
          pokemonApi.stats[2]
            ?.base_stat ?? 0,

        ataqueEspecial:
          pokemonApi.stats[3]
            ?.base_stat ?? 0,

        defesaEspecial:
          pokemonApi.stats[4]
            ?.base_stat ?? 0,

        velocidade:
          pokemonApi.stats[5]
            ?.base_stat ?? 0

      }

    };

  }

}