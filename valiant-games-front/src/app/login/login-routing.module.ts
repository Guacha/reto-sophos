import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginviewComponent } from './components/loginview/loginview.component';
import { RegisterviewComponent } from './components/registerview/registerview.component';
const routes: Routes = [
	{
		path: 'login',
		component: LoginviewComponent,
	},
	{
		path: 'register',
		component: RegisterviewComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class LoginRoutingModule {}
