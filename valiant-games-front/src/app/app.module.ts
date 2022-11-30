import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';
import { LoginModule } from './login/login.module';
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './misc/auth.interceptor';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, AppRoutingModule, HomeModule, LoginModule, HttpClientModule],
	providers: [authInterceptorProviders],
	bootstrap: [AppComponent],
})
export class AppModule {
	title: string = 'Valiant Games';
}
