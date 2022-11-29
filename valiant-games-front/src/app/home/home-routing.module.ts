import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';
import { MainheroComponent } from './components/mainhero/mainhero.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { GameviewComponent } from './components/gameview/gameview.component';
import { CartviewComponent } from './components/cartview/cartview.component';

const routes: Routes = [
	{
		path: 'home',
		redirectTo: '',
	},
	{
		path: '',
		component: HomeComponent,
		children: [
			{
				path: 'games',
				component: CatalogueComponent,
			},
			{
				path: 'game/:id',
				component: GameviewComponent,
			},
			{
				path: 'cart',
				component: CartviewComponent,
			},
			{
				path: '',
				component: MainheroComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
})
export class HomeRoutingModule {}
