import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonDetalhes } from './pokemon-detalhes';

describe('PokemonDetalhes', () => {
  let component: PokemonDetalhes;
  let fixture: ComponentFixture<PokemonDetalhes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PokemonDetalhes],
    }).compileComponents();

    fixture = TestBed.createComponent(PokemonDetalhes);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
