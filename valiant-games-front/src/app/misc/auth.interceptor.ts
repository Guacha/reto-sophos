import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	constructor(private authService: AuthService) {}

	intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
		if (this.authService.isAuthenticated()) {
			const token = this.authService.getToken();
			const authReq = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
			return next.handle(authReq);
		}
		return next.handle(request);
	}
}

export const authInterceptorProviders = [{ provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }];
