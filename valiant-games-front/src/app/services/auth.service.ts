import { Injectable } from '@angular/core';
import { CartService } from './cart.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
	providedIn: 'root',
})
export class AuthService {
	isAuthenticated(): boolean {
		return !!localStorage.getItem('token');
	}

	login(email: string, password: string): Observable<any> {
		return this.http.post('http://localhost:3000/auth/login', {
			email,
			password,
		});
	}

	register(form: any): Observable<any> {
		return this.http.post('http://localhost:3000/auth/register', form);
	}

	logout(): void {
		localStorage.removeItem('token');
	}

	setToken(token: string): void {
		localStorage.setItem('token', token);
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}

	tokensAreEqual(token: string): boolean {
		return token === localStorage.getItem('token');
	}

	constructor(private http: HttpClient) {}
}
