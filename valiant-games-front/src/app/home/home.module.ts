import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainheroComponent } from './components/mainhero/mainhero.component';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { GamecardComponent } from './components/gamecard/gamecard.component';
import { SearchComponent } from './components/search/search.component';
import { CatalogueComponent } from './components/catalogue/catalogue.component';
import { SortbuttonComponent } from './components/sortbutton/sortbutton.component';
import { GameviewComponent } from './components/gameview/gameview.component';
import { CartviewComponent } from './components/cartview/cartview.component';
import { CartitemComponent } from './components/cartitem/cartitem.component';
import { CartsummaryComponent } from './components/cartsummary/cartsummary.component';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		HeaderComponent,
		FooterComponent,
		MainheroComponent,
		HomeComponent,
		GamecardComponent,
		SearchComponent,
		CatalogueComponent,
		SortbuttonComponent,
		GameviewComponent,
		CartviewComponent,
		CartitemComponent,
		CartsummaryComponent,
	],

	imports: [CommonModule, HomeRoutingModule, FormsModule],
})
export class HomeModule {}
