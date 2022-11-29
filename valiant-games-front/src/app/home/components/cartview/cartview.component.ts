import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.models';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-cartview',
	templateUrl: './cartview.component.html',
	styleUrls: ['./cartview.component.css'],
})
export class CartviewComponent {
	cartItems: Game[] = this.cartService.getCart();

	get total(): number {
		return this.cartService.itemsTotal() + this.cartService.getInsuranceCost() + this.cartService.getFixedCost();
	}

	constructor(private cartService: CartService, private route: Router, private authService: AuthService) {}

	onConfirm() {
		if (this.authService.isAuthenticated()) {
			Swal.fire({
				title: `Seguro deseas confirmar tu reserva por un total de $${this.total}?`,
				icon: 'question',
				showCancelButton: true,
				confirmButtonText: 'Confirmar',
				cancelButtonText: 'Cancelar',
				confirmButtonColor: '#E76F51',
			}).then((result) => {
				if (result.isConfirmed) {
					Swal.fire({
						title: 'Reserva confirmada!',
						icon: 'success',
						confirmButtonText: 'Ok',
						confirmButtonColor: '#E76F51',
					}).then(() => {
						this.cartService.clearCart();
						this.route.navigate(['/games']);
					});
				}
			});
		} else {
			this.route.navigate(['/login']);
		}
	}
}
