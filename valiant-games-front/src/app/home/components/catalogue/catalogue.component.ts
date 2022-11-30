import { Component } from '@angular/core';
import { Game } from 'src/app/models/game.models';
import { GameService } from 'src/app/services/game.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
	selector: 'app-catalogue',
	templateUrl: './catalogue.component.html',
	styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
	activeButton: string = '';
	sortDirection: 'asc' | 'desc' | string = '';
	searchQuery: string = '';

	ngOnInit(): void {
		this.route.queryParams.subscribe((params) => {
			console.log('searchQuery: ' + this.searchQuery);
			if (params['searchQuery']) {
				this.searchQuery = params['searchQuery'];
			} else {
				this.searchQuery = '';
			}
		});
		this.gameService.getGames().subscribe((games) => {
			this.games = games;
		});
	}

	games: Game[] = [];

	setActiveButton(button: string) {
		console.log('setActiveButton called');
		console.log('button: ' + button);
		console.log(button.split(' '));
		this.activeButton = button.split(' ')[0];
		this.sortDirection = button.split(' ')[1];
		this.gameService
			.getGamesFilteredAndSorted(this.searchQuery, this.activeButton, this.sortDirection)
			.subscribe((games) => {
				this.games = games;
			});
	}

	onSearchClick(query: string) {
		console.log('onSearchClick called');
		this.searchQuery = query;
		console.log('searchQuery: ' + this.searchQuery);
		this.gameService
			.getGamesFilteredAndSorted(this.searchQuery, this.activeButton, this.sortDirection)
			.subscribe((games) => {
				this.games = games;
			});
	}

	constructor(private gameService: GameService, private route: ActivatedRoute) {}
}
