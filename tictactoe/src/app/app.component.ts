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

  onClickCase(numberCase: number) {
    if (!this.winner) {
      this.matrix[numberCase] = this.playerTour;
      this.playerTour = this.playerTour === Player.One ? Player.Two : Player.One;
      this.isWinning();
    }
  }

  isWinning() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i<lines.length; i++) {
      const [a, b ,c] = lines[i];
      if (this.matrix[a] === this.matrix[b] && this.matrix[a] === this.matrix[c]) {
        this.winner = this.matrix[a];
      } 
    }
  }
}
