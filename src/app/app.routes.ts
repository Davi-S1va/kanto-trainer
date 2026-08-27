import { Routes } from '@angular/router';
import { PokemonDetalhes } from './pokemon-detalhes/pokemon-detalhes';
import { Pokedex } from './pages/pokedex/pokedex';

export const routes: Routes = [

    {
        path: 'pokemon/:id',
        component: PokemonDetalhes
    },
    {
        path: 'pokedex',
        component: Pokedex
    }
];
