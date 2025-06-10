import { Component } from '@angular/core';
import { ChessBoardComponent } from './modules/chess-board/chess-board.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [ChessBoardComponent],
  standalone: true
})
export class AppComponent {
  title = 'chess';
} 