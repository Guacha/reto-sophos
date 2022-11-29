import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
	@Input() title: string;

	constructor(private authService: AuthService) {}

	isLoggedIn(): boolean {
		return this.authService.isAuthenticated();
	}
}
