import { Injectable } from '@angular/core';
import { CartService } from './cart.service';

interface Login {
	email: string;
	password: string;
}

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	VALID_USERS: Login[] = [
		{
			email: 'admin@admin.com',
			password: 'admin',
		},
		{
			email: 'user@user.com',
			password: 'user',
		},
	];

	isAuthenticated(): boolean {
		return !!localStorage.getItem('token');
	}

	login(email: string, password: string): boolean {
		const user: Login | undefined = this.VALID_USERS.find(
			(user) => user.email === email && user.password === password
		);

		if (user) {
			localStorage.setItem('token', email);

			return true;
		}

		return false;
	}

	logout(): void {
		localStorage.removeItem('token');
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}

	tokensAreEqual(token: string): boolean {
		return token === localStorage.getItem('token');
	}

	constructor() {}
}
