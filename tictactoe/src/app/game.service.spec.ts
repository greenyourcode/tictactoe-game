import { Player } from './player.enum';
import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';

describe('GameService', () => {
  let service: GameService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should winner is player 1', () => {
    const matrix = [
      Player.One,
      Player.One,
      Player.One,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ];

    const winner = service.isWinning(matrix);

    expect(winner).toEqual(Player.One);
  })

  it('should winner is player2', () => {
    const matrix = [
      Player.Two,
      Player.One,
      Player.Two,
      Player.Two,
      undefined,
      Player.One,
      Player.Two,
      undefined,
      undefined
    ];

    const winner = service.isWinning(matrix);

    expect(winner).toEqual(Player.Two);
  })
});
