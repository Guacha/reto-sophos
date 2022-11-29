import { Injectable } from '@angular/core';
import { Game } from '../models/game.models';
import { AuthService } from './auth.service';

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart: Game[] = [];

	addToCart(game: Game) {
		this.cart.push(game);
		this.saveToLocalStorage();
	}

	removeFromCart(game: Game) {
		this.cart = this.cart.filter((g) => g.id !== game.id);
		this.saveToLocalStorage();
	}

	getCart() {
		return this.cart;
	}

	clearCart() {
		this.cart = [];
		this.saveToLocalStorage();
	}

	setCart(game: Game) {
		this.clearCart();
		this.addToCart(game);
	}

	getFromLocalStorage() {
		const cart = localStorage.getItem('cart');
		if (cart) {
			this.cart = JSON.parse(cart).items;
		}
	}

	saveToLocalStorage() {
		const token: string | null = this.authService.getToken();
		const cartInstance = {
			items: this.cart,
			owner: token ?? 'guest',
		};
		localStorage.setItem('cart', JSON.stringify(cartInstance));
	}

	itemCount() {
		return this.cart.length;
	}

	itemsTotal() {
		return this.cart.reduce((total, game) => total + game.price, 0);
	}

	getInsuranceCost() {
		return this.cart.length;
	}

	getFixedCost() {
		return 1;
	}

	currentCartHasOwner() {
		const storedCart = localStorage.getItem('cart');
		if (storedCart) {
			const parsedCart = JSON.parse(storedCart);
			return parsedCart.owner !== 'guest';
		}
		return false;
	}

	constructor(private authService: AuthService) {
		this.getFromLocalStorage();
	}
}
