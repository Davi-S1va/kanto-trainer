import {
  Component
} from '@angular/core';

import {
  FormsModule
} from '@angular/forms';

interface PokemonMini {
  id: number;
  nome: string;
  gifMini: string;
}

@Component({
  selector: 'app-meu-time',

  imports: [
    FormsModule
  ],

  templateUrl:
    './meu-time.html',

  styleUrl:
    './meu-time.css'
})
export class MeuTime {

  // =========================================================
  // LISTA DOS 151 POKÉMONS
  // =========================================================

  pokemons: PokemonMini[] = [

    { id: 1, nome: 'Bulbasaur', gifMini: 'Bulbasaur_mini.gif' },
    { id: 2, nome: 'Ivysaur', gifMini: 'Ivysaur_mini.gif' },
    { id: 3, nome: 'Venusaur', gifMini: 'Venusaur_mini.gif' },

    { id: 4, nome: 'Charmander', gifMini: 'Charmander_mini.gif' },
    { id: 5, nome: 'Charmeleon', gifMini: 'Charmeleon_mini.gif' },
    { id: 6, nome: 'Charizard', gifMini: 'Charizard_mini.gif' },

    { id: 7, nome: 'Squirtle', gifMini: 'Squirtle_mini.gif' },
    { id: 8, nome: 'Wartortle', gifMini: 'Wartortle_mini.gif' },
    { id: 9, nome: 'Blastoise', gifMini: 'Blastoise_mini.gif' },

    { id: 10, nome: 'Caterpie', gifMini: 'Caterpie_mini.gif' },
    { id: 11, nome: 'Metapod', gifMini: 'Metapod_mini.gif' },
    { id: 12, nome: 'Butterfree', gifMini: 'Butterfree_mini.gif' },

    { id: 13, nome: 'Weedle', gifMini: 'Weedle_mini.gif' },
    { id: 14, nome: 'Kakuna', gifMini: 'Kakuna_mini.gif' },
    { id: 15, nome: 'Beedrill', gifMini: 'Beedrill_mini.gif' },

    { id: 16, nome: 'Pidgey', gifMini: 'Pidgey_mini.gif' },
    { id: 17, nome: 'Pidgeotto', gifMini: 'Pidgeotto_mini.gif' },
    { id: 18, nome: 'Pidgeot', gifMini: 'Pidgeot_mini.gif' },

    { id: 19, nome: 'Rattata', gifMini: 'Rattata_mini.gif' },
    { id: 20, nome: 'Raticate', gifMini: 'Raticate_mini.gif' },

    { id: 21, nome: 'Spearow', gifMini: 'Spearow_mini.gif' },
    { id: 22, nome: 'Fearow', gifMini: 'Fearow_mini.gif' },

    { id: 23, nome: 'Ekans', gifMini: 'Ekans_mini.gif' },
    { id: 24, nome: 'Arbok', gifMini: 'Arbok_mini.gif' },

    { id: 25, nome: 'Pikachu', gifMini: 'Pikachu_mini.gif' },
    { id: 26, nome: 'Raichu', gifMini: 'Raichu_mini.gif' },

    { id: 27, nome: 'Sandshrew', gifMini: 'Sandshrew_mini.gif' },
    { id: 28, nome: 'Sandslash', gifMini: 'Sandslash_mini.gif' },

    { id: 29, nome: 'Nidoran ♀', gifMini: 'Nidoran_hembra_mini.gif' },
    { id: 30, nome: 'Nidorina', gifMini: 'Nidorina_mini.gif' },
    { id: 31, nome: 'Nidoqueen', gifMini: 'Nidoqueen_mini.gif' },

    { id: 32, nome: 'Nidoran ♂', gifMini: 'Nidoran_macho_mini.gif' },
    { id: 33, nome: 'Nidorino', gifMini: 'Nidorino_mini.gif' },
    { id: 34, nome: 'Nidoking', gifMini: 'Nidoking_mini.gif' },

    { id: 35, nome: 'Clefairy', gifMini: 'Clefairy_mini.gif' },
    { id: 36, nome: 'Clefable', gifMini: 'Clefable_mini.gif' },

    { id: 37, nome: 'Vulpix', gifMini: 'Vulpix_mini.gif' },
    { id: 38, nome: 'Ninetales', gifMini: 'Ninetales_mini.gif' },

    { id: 39, nome: 'Jigglypuff', gifMini: 'Jigglypuff_mini.gif' },
    { id: 40, nome: 'Wigglytuff', gifMini: 'Wigglytuff_mini.gif' },

    { id: 41, nome: 'Zubat', gifMini: 'Zubat_mini.gif' },
    { id: 42, nome: 'Golbat', gifMini: 'Golbat_mini.gif' },

    { id: 43, nome: 'Oddish', gifMini: 'Oddish_mini.gif' },
    { id: 44, nome: 'Gloom', gifMini: 'Gloom_mini.gif' },
    { id: 45, nome: 'Vileplume', gifMini: 'Vileplume_mini.gif' },

    { id: 46, nome: 'Paras', gifMini: 'Paras_mini.gif' },
    { id: 47, nome: 'Parasect', gifMini: 'Parasect_mini.gif' },

    { id: 48, nome: 'Venonat', gifMini: 'Venonat_mini.gif' },
    { id: 49, nome: 'Venomoth', gifMini: 'Venomoth_mini.gif' },

    { id: 50, nome: 'Diglett', gifMini: 'Diglett_mini.gif' },
    { id: 51, nome: 'Dugtrio', gifMini: 'Dugtrio_mini.gif' },

    { id: 52, nome: 'Meowth', gifMini: 'Meowth_mini.gif' },
    { id: 53, nome: 'Persian', gifMini: 'Persian_mini.gif' },

    { id: 54, nome: 'Psyduck', gifMini: 'Psyduck_mini.gif' },
    { id: 55, nome: 'Golduck', gifMini: 'Golduck_mini.gif' },

    { id: 56, nome: 'Mankey', gifMini: 'Mankey_mini.gif' },
    { id: 57, nome: 'Primeape', gifMini: 'Primeape_mini.gif' },

    { id: 58, nome: 'Growlithe', gifMini: 'Growlithe_mini.gif' },
    { id: 59, nome: 'Arcanine', gifMini: 'Arcanine_mini.gif' },

    { id: 60, nome: 'Poliwag', gifMini: 'Poliwag_mini.gif' },
    { id: 61, nome: 'Poliwhirl', gifMini: 'Poliwhirl_mini.gif' },
    { id: 62, nome: 'Poliwrath', gifMini: 'Poliwrath_mini.gif' },

    { id: 63, nome: 'Abra', gifMini: 'Abra_mini.gif' },
    { id: 64, nome: 'Kadabra', gifMini: 'Kadabra_mini.gif' },
    { id: 65, nome: 'Alakazam', gifMini: 'Alakazam_mini.gif' },

    { id: 66, nome: 'Machop', gifMini: 'Machop_mini.gif' },
    { id: 67, nome: 'Machoke', gifMini: 'Machoke_mini.gif' },
    { id: 68, nome: 'Machamp', gifMini: 'Machamp_mini.gif' },

    { id: 69, nome: 'Bellsprout', gifMini: 'Bellsprout_mini.gif' },
    { id: 70, nome: 'Weepinbell', gifMini: 'Weepinbell_mini.gif' },
    { id: 71, nome: 'Victreebel', gifMini: 'Victreebel_mini.gif' },

    { id: 72, nome: 'Tentacool', gifMini: 'Tentacool_mini.gif' },
    { id: 73, nome: 'Tentacruel', gifMini: 'Tentacruel_mini.gif' },

    { id: 74, nome: 'Geodude', gifMini: 'Geodude_mini.gif' },
    { id: 75, nome: 'Graveler', gifMini: 'Graveler_mini.gif' },
    { id: 76, nome: 'Golem', gifMini: 'Golem_mini.gif' },

    { id: 77, nome: 'Ponyta', gifMini: 'Ponyta_mini.gif' },
    { id: 78, nome: 'Rapidash', gifMini: 'Rapidash_mini.gif' },

    { id: 79, nome: 'Slowpoke', gifMini: 'Slowpoke_mini.gif' },
    { id: 80, nome: 'Slowbro', gifMini: 'Slowbro_mini.gif' },

    { id: 81, nome: 'Magnemite', gifMini: 'Magnemite_mini.gif' },
    { id: 82, nome: 'Magneton', gifMini: 'Magneton_mini.gif' },

    { id: 83, nome: 'Farfetch’d', gifMini: 'Farfetch’d_mini.gif' },

    { id: 84, nome: 'Doduo', gifMini: 'Doduo_mini.gif' },
    { id: 85, nome: 'Dodrio', gifMini: 'Dodrio_mini.gif' },

    { id: 86, nome: 'Seel', gifMini: 'Seel_mini.gif' },
    { id: 87, nome: 'Dewgong', gifMini: 'Dewgong_mini.gif' },

    { id: 88, nome: 'Grimer', gifMini: 'Grimer_mini.gif' },
    { id: 89, nome: 'Muk', gifMini: 'Muk_mini.gif' },

    { id: 90, nome: 'Shellder', gifMini: 'Shellder_mini.gif' },
    { id: 91, nome: 'Cloyster', gifMini: 'Cloyster_mini.gif' },

    { id: 92, nome: 'Gastly', gifMini: 'Gastly_mini.gif' },
    { id: 93, nome: 'Haunter', gifMini: 'Haunter_mini.gif' },
    { id: 94, nome: 'Gengar', gifMini: 'Gengar_mini.gif' },

    { id: 95, nome: 'Onix', gifMini: 'Onix_mini.gif' },

    { id: 96, nome: 'Drowzee', gifMini: 'Drowzee_mini.gif' },
    { id: 97, nome: 'Hypno', gifMini: 'Hypno_mini.gif' },

    { id: 98, nome: 'Krabby', gifMini: 'Krabby_mini.gif' },
    { id: 99, nome: 'Kingler', gifMini: 'Kingler_mini.gif' },

    { id: 100, nome: 'Voltorb', gifMini: 'Voltorb_mini.gif' },
    { id: 101, nome: 'Electrode', gifMini: 'Electrode_mini.gif' },

    { id: 102, nome: 'Exeggcute', gifMini: 'Exeggcute_mini.gif' },
    { id: 103, nome: 'Exeggutor', gifMini: 'Exeggutor_mini.gif' },

    { id: 104, nome: 'Cubone', gifMini: 'Cubone_mini.gif' },
    { id: 105, nome: 'Marowak', gifMini: 'Marowak_mini.gif' },

    { id: 106, nome: 'Hitmonlee', gifMini: 'Hitmonlee_mini.gif' },
    { id: 107, nome: 'Hitmonchan', gifMini: 'Hitmonchan_mini.gif' },

    { id: 108, nome: 'Lickitung', gifMini: 'Lickitung_mini.gif' },

    { id: 109, nome: 'Koffing', gifMini: 'Koffing_mini.gif' },
    { id: 110, nome: 'Weezing', gifMini: 'Weezing_mini.gif' },

    { id: 111, nome: 'Rhyhorn', gifMini: 'Rhyhorn_mini.gif' },
    { id: 112, nome: 'Rhydon', gifMini: 'Rhydon_mini.gif' },

    { id: 113, nome: 'Chansey', gifMini: 'Chansey_mini.gif' },

    { id: 114, nome: 'Tangela', gifMini: 'Tangela_mini.gif' },

    { id: 115, nome: 'Kangaskhan', gifMini: 'Kangaskhan_mini.gif' },

    { id: 116, nome: 'Horsea', gifMini: 'Horsea_mini.gif' },
    { id: 117, nome: 'Seadra', gifMini: 'Seadra_mini.gif' },

    { id: 118, nome: 'Goldeen', gifMini: 'Goldeen_mini.gif' },
    { id: 119, nome: 'Seaking', gifMini: 'Seaking_mini.gif' },

    { id: 120, nome: 'Staryu', gifMini: 'Staryu_mini.gif' },
    { id: 121, nome: 'Starmie', gifMini: 'Starmie_mini.gif' },

    { id: 122, nome: 'Mr. Mime', gifMini: 'Mr._Mime_mini.gif' },

    { id: 123, nome: 'Scyther', gifMini: 'Scyther_mini.gif' },
    { id: 124, nome: 'Jynx', gifMini: 'Jynx_mini.gif' },

    { id: 125, nome: 'Electabuzz', gifMini: 'Electabuzz_mini.gif' },
    { id: 126, nome: 'Magmar', gifMini: 'Magmar_mini.gif' },

    { id: 127, nome: 'Pinsir', gifMini: 'Pinsir_mini.gif' },

    { id: 128, nome: 'Tauros', gifMini: 'Tauros_mini.gif' },

    { id: 129, nome: 'Magikarp', gifMini: 'Magikarp_mini.gif' },
    { id: 130, nome: 'Gyarados', gifMini: 'Gyarados_mini.gif' },

    { id: 131, nome: 'Lapras', gifMini: 'Lapras_mini.gif' },
    { id: 132, nome: 'Ditto', gifMini: 'Ditto_mini.gif' },

    { id: 133, nome: 'Eevee', gifMini: 'Eevee_mini.gif' },
    { id: 134, nome: 'Vaporeon', gifMini: 'Vaporeon_mini.gif' },
    { id: 135, nome: 'Jolteon', gifMini: 'Jolteon_mini.gif' },
    { id: 136, nome: 'Flareon', gifMini: 'Flareon_mini.gif' },

    { id: 137, nome: 'Porygon', gifMini: 'Porygon_mini.gif' },

    { id: 138, nome: 'Omanyte', gifMini: 'Omanyte_mini.gif' },
    { id: 139, nome: 'Omastar', gifMini: 'Omastar_mini.gif' },

    { id: 140, nome: 'Kabuto', gifMini: 'Kabuto_mini.gif' },
    { id: 141, nome: 'Kabutops', gifMini: 'Kabutops_mini.gif' },

    { id: 142, nome: 'Aerodactyl', gifMini: 'Aerodactyl_mini.gif' },

    { id: 143, nome: 'Snorlax', gifMini: 'Snorlax_mini.gif' },

    { id: 144, nome: 'Articuno', gifMini: 'Articuno_mini.gif' },
    { id: 145, nome: 'Zapdos', gifMini: 'Zapdos_mini.gif' },
    { id: 146, nome: 'Moltres', gifMini: 'Moltres_mini.gif' },

    { id: 147, nome: 'Dratini', gifMini: 'Dratini_mini.gif' },
    { id: 148, nome: 'Dragonair', gifMini: 'Dragonair_mini.gif' },
    { id: 149, nome: 'Dragonite', gifMini: 'Dragonite_mini.gif' },

    { id: 150, nome: 'Mewtwo', gifMini: 'Mewtwo_mini.gif' },
    { id: 151, nome: 'Mew', gifMini: 'Mew_mini.gif' }

  ];


  // =========================================================
  // TIME
  // =========================================================

  time: (PokemonMini | null)[] = [
    null,
    null,
    null,
    null,
    null,
    null
  ];

  slotSelecionado: number = 0;


  // =========================================================
  // COMPANHEIRO
  // =========================================================

  companheiro: PokemonMini | null = null;

  mostrarEscolhaCompanheiro: boolean = false;

  pesquisaCompanheiro: string = '';

  mostrarBalaoInstrucao: boolean = true;


  // =========================================================
  // TREINADOR
  // =========================================================

  generoTreinador: 'red' | 'leaf' = 'red';


  // =========================================================
  // FILTRO DO COMPANHEIRO
  // =========================================================

  get pokemonsCompanheiro(): PokemonMini[] {

    const pesquisa =
      this.pesquisaCompanheiro
        .trim()
        .toLowerCase();

    if (!pesquisa) {
      return this.pokemons;
    }

    return this.pokemons.filter(
      pokemon =>
        pokemon.nome
          .toLowerCase()
          .includes(pesquisa)
    );

  }


  // =========================================================
  // SELECIONAR POKÉMON PARA O TIME
  // =========================================================

  selecionarPokemon(
    pokemon: PokemonMini
  ): void {

    const pokemonJaExiste =
      this.time.some(
        membro =>
          membro?.id === pokemon.id
      );

    if (pokemonJaExiste) {
      return;
    }

    this.time[
      this.slotSelecionado
    ] = pokemon;

  }


  // =========================================================
  // RESET TIME
  // =========================================================

  resetarTime(): void {

    this.time = [
      null,
      null,
      null,
      null,
      null,
      null
    ];

    this.slotSelecionado = 0;

  }


  // =========================================================
  // D-PAD
  // =========================================================

  moverEsquerda(): void {

    const coluna =
      this.slotSelecionado % 3;

    if (coluna === 0) {

      this.slotSelecionado += 2;

    } else {

      this.slotSelecionado--;

    }

  }


  moverDireita(): void {

    const coluna =
      this.slotSelecionado % 3;

    if (coluna === 2) {

      this.slotSelecionado -= 2;

    } else {

      this.slotSelecionado++;

    }

  }


  moverCima(): void {

    if (this.slotSelecionado < 3) {

      this.slotSelecionado += 3;

    } else {

      this.slotSelecionado -= 3;

    }

  }


  moverBaixo(): void {

    if (this.slotSelecionado >= 3) {

      this.slotSelecionado -= 3;

    } else {

      this.slotSelecionado += 3;

    }

  }


  // =========================================================
  // COMPANHEIRO
  // =========================================================

  abrirEscolhaCompanheiro(): void {

    this.pesquisaCompanheiro = '';

    this.mostrarEscolhaCompanheiro = true;

    this.mostrarBalaoInstrucao = false;

  }


  fecharEscolhaCompanheiro(): void {

    this.mostrarEscolhaCompanheiro = false;

  }


  selecionarCompanheiro(
    pokemon: PokemonMini
  ): void {

    this.companheiro = pokemon;

    this.mostrarEscolhaCompanheiro = false;

    this.pesquisaCompanheiro = '';

  }


  // =========================================================
  // TREINADOR
  // =========================================================

  alternarTreinador(): void {

    this.generoTreinador =
      this.generoTreinador === 'red'
        ? 'leaf'
        : 'red';

  }


  // =========================================================
  // IMAGEM DO TREINADOR
  // =========================================================

  get imagemTreinador(): string {

    return this.generoTreinador === 'red'
      ? 'pokeutil/red_mini.gif'
      : 'pokeutil/leaf_mini.gif';

  }


  // =========================================================
  // IMAGEM MINI DO COMPANHEIRO
  // =========================================================

  get imagemCompanheiro(): string {

    if (!this.companheiro) {
      return '';
    }

    return `gif_mini/${this.companheiro.gifMini}`;

  }


  // =========================================================
  // GIF NORMAL DOS POKÉMONS DO TIME
  // =========================================================

  imagemPokemon(
    pokemon: PokemonMini
  ): string {

    return `pokemon/${String(
      pokemon.id
    ).padStart(3, '0')}.gif`;

  }


  // =========================================================
  // NÚMERO
  // =========================================================

  numeroPokemon(
    pokemon: PokemonMini | null
  ): string {

    if (!pokemon) {
      return '';
    }

    return String(
      pokemon.id
    ).padStart(3, '0');

  }


  // =========================================================
  // VERIFICAR SE JÁ ESTÁ NO TIME
  // =========================================================

  pokemonEstaNoTime(
    pokemon: PokemonMini
  ): boolean {

    return this.time.some(
      membro =>
        membro?.id === pokemon.id
    );

  }

}