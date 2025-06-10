import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChessBoard } from '../../logic/chessboard';
import { Color, FENChar } from '../../logic/models';

@Component({
  selector: 'app-chess-board',
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.css',
  standalone: true,
  imports: [CommonModule]
})
export class ChessBoardComponent {
  private chessBoard = new ChessBoard();
  public chessBoardView: (FENChar | null)[][] = this.chessBoard.viewChessBoard;
  public get playerColor(): Color {return this.chessBoard.playerColor}
}
