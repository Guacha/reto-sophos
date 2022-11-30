import { Component } from '@angular/core';
import { Game } from 'src/app/models/game.models';
import { GameService } from 'src/app/services/game.service';

@Component({
	selector: 'app-mainhero',
	templateUrl: './mainhero.component.html',
	styleUrls: ['./mainhero.component.css'],
})
export class MainheroComponent {
	games: Game[] = [];

	ngOnInit(): void {
		this.gameService.getGames().subscribe((games) => {
			this.games = games;
		});
	}

	constructor(private gameService: GameService) {}
}
