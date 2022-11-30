import { Component, Input } from '@angular/core';
import { CartItem } from 'src/app/services/cart.service';

@Component({
	selector: 'app-cartitem',
	templateUrl: './cartitem.component.html',
	styleUrls: ['./cartitem.component.css'],
})
export class CartitemComponent {
	@Input() item: CartItem;
}
