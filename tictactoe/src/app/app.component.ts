import { GameService } from './game.service';
import { Player } from './player.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tictactoe';
  matrix = new Array(9);
  playerTour = Player.One;
  winner;

  constructor(private service: GameService) {}

  onClickCase(numberCase: number) {
    if (!this.winner) {
      this.matrix[numberCase] = this.playerTour;
      this.playerTour = this.playerTour === Player.One ? Player.Two : Player.One;
      this.winner = this.service.isWinning(this.matrix);
    }
  }
}
