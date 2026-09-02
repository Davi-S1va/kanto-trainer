export interface Pokemon {
  id: number;
  nome: string;
  tipos: string[];

  altura: string;
  peso: string;
  categoria: string;
  habilidade: string;

  fraquezas: string[];

  descricao: string;

  gif: string;

  estatisticas: {
    hp: number;
    ataque: number;
    defesa: number;
    ataqueEspecial: number;
    defesaEspecial: number;
    velocidade: number;
  };
}