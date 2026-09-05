import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

import { PokemonApi } from '../../../models/pokemon-api';

@Component({
  selector: 'app-pokedex-device',
  standalone: true,
  templateUrl: './pokedex-device.html',
  styleUrl: './pokedex-device.css'
})
export class PokedexDeviceComponent {

  @Input()
  pokemon: PokemonApi | null = null;

  @Output()
  previousPokemon =
    new EventEmitter<void>();

  @Output()
  nextPokemon =
    new EventEmitter<void>();

  telaAtual:
    'info'
    | 'tipo'
    | 'stats'
    | 'habilidade'
    = 'info';

  selecionarTela(
    tela:
      'info'
      | 'tipo'
      | 'stats'
      | 'habilidade'
  ): void {

    this.telaAtual = tela;

  }

  get numeroPokemon(): string {

    return String(
      this.pokemon?.id ?? 0
    ).padStart(3, '0');

  }

  get nomePokemon(): string {

    if (!this.pokemon) {
      return '';
    }

    return this.formatarNome(
      this.pokemon.name
    );

  }

  get gifPokemon(): string {

    return `pokemon/${this.numeroPokemon}.gif`;

  }

  get altura(): string {

    return (
      (this.pokemon?.height ?? 0) / 10
    ).toFixed(1);

  }

  get peso(): string {

    return (
      (this.pokemon?.weight ?? 0) / 10
    ).toFixed(1);

  }

  get habilidade(): string {

    return (
      this.pokemon
        ?.abilities?.[0]
        ?.ability?.name
      ?? ''
    );

  }

  traduzirTipo(tipo: string): string {

    const tipos: Record<string, string> = {

      normal: 'Normal',
      fire: 'Fogo',
      water: 'Água',
      electric: 'Elétrico',
      grass: 'Planta',
      ice: 'Gelo',
      fighting: 'Lutador',
      poison: 'Veneno',
      ground: 'Terrestre',
      flying: 'Voador',
      psychic: 'Psíquico',
      bug: 'Inseto',
      rock: 'Pedra',
      ghost: 'Fantasma',
      dragon: 'Dragão',
      dark: 'Sombrio',
      steel: 'Aço',
      fairy: 'Fada'

    };

    return tipos[tipo] ?? tipo;

  }

  traduzirStatus(status: string): string {

    const statusTraduzidos:
      Record<string, string> = {

      hp: 'HP',
      attack: 'Ataque',
      defense: 'Defesa',
      'special-attack': 'Ataque Especial',
      'special-defense': 'Defesa Especial',
      speed: 'Velocidade'

    };

    return (
      statusTraduzidos[status]
      ?? status
    );

  }

  porcentagemStatus(
    valor: number
  ): number {

    if (!Number.isFinite(valor)) {
      return 0;
    }

    return Math.min(
      Math.max(
        (valor / 255) * 100,
        0
      ),
      100
    );

  }

  corStatus(
    valor: number
  ): string {

    if (valor >= 120) {
      return '#3bc95f';
    }

    if (valor >= 80) {
      return '#f2c94c';
    }

    if (valor >= 50) {
      return '#f2994a';
    }

    return '#e74c3c';

  }

  formatarNome(
    nome: string
  ): string {

    if (!nome) {
      return '';
    }

    return nome
      .split('-')
      .map(
        parte =>
          parte.charAt(0).toUpperCase()
          + parte.slice(1)
      )
      .join(' ');

  }

}