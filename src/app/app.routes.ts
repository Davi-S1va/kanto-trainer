import { Routes } from '@angular/router';

import { PokemonDetalhes }
  from './pokemon-detalhes/pokemon-detalhes';

import { Pokedex }
  from './pages/pokedex/pokedex';

import { Creditos }
  from './pages/cretidtos/credito';

import { MeuTime }
  from './pages/meu-time/meu-time';


export const routes: Routes = [

  {
    path: 'pokedex',
    component: Pokedex
  },

  {
    path: 'pokemon/:id',
    component: PokemonDetalhes
  },

  {
    path: 'meu-time',
    component: MeuTime
  },

  {
    path: 'creditos',
    component: Creditos
  },

  {
    path: '',
    redirectTo: 'pokedex',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'pokedex'
  }

];