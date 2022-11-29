import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginviewComponent } from './components/loginview/loginview.component';
import { RegisterviewComponent } from './components/registerview/registerview.component';
import { LoginRoutingModule } from './login-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [LoginviewComponent, RegisterviewComponent],
	imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
