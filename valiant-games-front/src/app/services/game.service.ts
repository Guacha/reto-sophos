import { Injectable } from '@angular/core';
import { Game } from '../models/game.models';
import { GAMES, DIRECTORS, PLATFORMS, PUBLISHERS } from '../misc/store';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	constructor() {}

	getGames(): Game[] {
		return GAMES;
	}

	getGame(id: number): Game | undefined {
		console.log('getGame called');
		console.log('id: ' + id);
		return GAMES.find((game) => game.id === id);
	}

	getGamesByDirector(directorId: number): Game[] {
		return GAMES.filter((game) => game.directors.map((director) => director.id).includes(directorId));
	}

	getGamesByPlatform(platformId: number): Game[] {
		return GAMES.filter((game) => game.platforms.map((platform) => platform.id).includes(platformId));
	}

	getGamesFilteredAndSorted(filter: string, sort: string, order: 'asc' | 'desc' | string): Game[] {
		console.log('getGamesFilteredAndSorted called');
		let games = this.getGamesSorted(sort, order);
		if (filter) {
			filter = '';
		}
		games = games.filter((game) => game.name.toLowerCase().includes(filter.toLowerCase()));
		return games;
	}

	getGamesSorted(sort: string, order: 'asc' | 'desc' | string): Game[] {
		console.log('getGamesSorted called');
		console.log('sort: ' + sort);
		console.log('order: ' + order);
		switch (sort) {
			case 'Name':
				return this.getGames().sort((a, b) => {
					if (order === 'asc') {
						return a.name.localeCompare(b.name);
					} else {
						return b.name.localeCompare(a.name);
					}
				});
			case 'Price':
				return this.getGames().sort((a, b) => {
					if (order === 'asc') {
						return a.price - b.price;
					} else {
						return b.price - a.price;
					}
				});
			case 'Date':
				return this.getGames().sort((a, b) => {
					if (order === 'asc') {
						return a.releaseDate.getTime() - b.releaseDate.getTime();
					} else {
						return b.releaseDate.getTime() - a.releaseDate.getTime();
					}
				});
			default:
				return this.getGames();
		}
	}
}
