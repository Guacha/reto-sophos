import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
	selector: 'app-cartsummary',
	templateUrl: './cartsummary.component.html',
	styleUrls: ['./cartsummary.component.css'],
})
export class CartsummaryComponent {
	@Output() onConfirm: EventEmitter<void> = new EventEmitter<void>();

	constructor(private cart: CartService) {}

	get itemCount(): number {
		return this.cart.itemCount();
	}

	get itemsTotal(): number {
		return this.cart.itemsTotal();
	}

	get insuranceCost(): number {
		return this.cart.getInsuranceCost();
	}

	getFixedCost(): number {
		return this.cart.getFixedCost();
	}

	get totalCost(): number {
		return this.itemsTotal + this.insuranceCost + this.getFixedCost();
	}
}
