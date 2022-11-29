import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.models';

@Component({
	selector: 'app-gamecard',
	templateUrl: './gamecard.component.html',
	styleUrls: ['./gamecard.component.css'],
})
export class GamecardComponent {
	@Input() game: Game;
}
