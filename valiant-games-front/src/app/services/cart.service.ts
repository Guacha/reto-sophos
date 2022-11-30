import { Injectable } from '@angular/core';
import { Game, Platform } from '../models/game.models';
import { AuthService } from './auth.service';

export interface CartItem {
	game: Game;
	chosenPlatform: Platform;
	dayAmount: number;
}

@Injectable({
	providedIn: 'root',
})
export class CartService {
	cart: CartItem[] = [];

	addToCart(game: Game, chosenPlatform?: Platform, dayAmount?: number) {
		const cartItem: CartItem = {
			game,
			chosenPlatform: chosenPlatform ?? game.platforms[0],
			dayAmount: dayAmount ?? 7,
		};

		if (this.cart.find((item) => item.game.id === game.id)) {
			return;
		}
		this.cart.push(cartItem);
		this.saveToLocalStorage();
	}

	removeFromCart(game: Game) {
		this.cart = this.cart.filter((item) => item.game.id !== game.id);
		this.saveToLocalStorage();
	}

	getCart() {
		return this.cart;
	}

	clearCart() {
		this.cart = [];
		this.saveToLocalStorage();
	}

	setCart(game: Game, chosenPlatform?: Platform, dayAmount?: number) {
		this.clearCart();
		this.addToCart(game, chosenPlatform, dayAmount);
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
		return this.cart.reduce((total, item) => total + item.game.price * item.dayAmount, 0);
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
