import { Injectable } from '@angular/core';
import { Game, Platform } from '../models/game.models';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class GameService {
	constructor(private http: HttpClient) {}

	getGames(): Observable<Game[]> {
		return this.http.get<Game[]>('http://localhost:3000/games');
	}

	getGame(id: number): Observable<Game> {
		console.log('getGame called');
		console.log('id: ' + id);
		return this.http.get<Game>('http://localhost:3000/games/' + id);
	}

	getGamesFilteredAndSorted(filter: string, sort: string, order: 'asc' | 'desc' | string): Observable<Game[]> {
		return this.http.get<Game[]>(
			`http://localhost:3000/games/search?filter=${filter}&orderby=${sort}&order=${order}`
		);
	}

	getPlatform(id: Number): Observable<Platform> {
		return this.http.get<Platform>(`http://localhost:3000/platform/${id}`);
	}
}
