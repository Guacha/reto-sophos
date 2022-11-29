export interface Platform {
	id: number;
	name: string;
}

export interface Publisher {
	id: number;
	name: string;
}

export interface Director {
	id: number;
	name: string;
}

export interface Game {
	id: number;
	name: string;
	description: string;
	releaseDate: Date;
	platforms: Platform[];
	publishers: Publisher[];
	directors: Director[];
	rating: number;
	picture: string;
	price: number;
}
