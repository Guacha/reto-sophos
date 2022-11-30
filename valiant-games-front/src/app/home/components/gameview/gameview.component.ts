import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, Platform, Publisher } from 'src/app/models/game.models';
import { CartService } from 'src/app/services/cart.service';
import { GameService } from 'src/app/services/game.service';
import Swal from 'sweetalert2';

@Component({
	selector: 'app-gameview',
	templateUrl: './gameview.component.html',
	styleUrls: ['./gameview.component.css'],
})
export class GameviewComponent {
	id: string | null = this.route.snapshot.paramMap.get('id');
	game: Game | undefined;
	chosenPlatformId: string;
	chosenPlatform: Platform;
	dayAmount: number = 7;

	constructor(
		private route: ActivatedRoute,
		private cart: CartService,
		private router: Router,
		private gameService: GameService
	) {}

	ngOnInit(): void {
		if (this.id) {
			this.gameService.getGame(Number(this.id)).subscribe((game) => {
				this.game = game;
			});
		}
	}

	addToCart(): void {
		if (!this.chosenPlatformId) {
			Swal.fire({
				title: 'Error!',
				text: 'Por favor elige una plataforma para el alquiler',
				icon: 'error',
				confirmButtonText: 'OK',
			});
			return;
		}
		if (this.game) {
			this.gameService.getPlatform(parseInt(this.chosenPlatformId)).subscribe((platform) => {
				this.chosenPlatform = platform;
			});
			this.cart.addToCart(this.game, this.chosenPlatform, this.dayAmount);
			Swal.fire({
				title: 'El título ha sido agregado al carrito con éxito!',
				icon: 'success',
				showConfirmButton: true,
				confirmButtonColor: '#E76F51',
				cancelButtonColor: '#1A2F38',
				confirmButtonText: 'Ir al carrito',
				cancelButtonText: 'Seguir comprando',
				showCancelButton: true,
			}).then((result) => {
				if (result.isConfirmed) {
					this.router.navigate(['/cart']);
				}
			});
		}
	}

	buyNow(): void {
		if (!this.chosenPlatformId) {
			Swal.fire({
				title: 'Error!',
				text: 'Por favor elige una plataforma para el alquiler',
				icon: 'error',
				confirmButtonText: 'OK',
			});
			return;
		}
		if (this.game) {
			this.gameService.getPlatform(parseInt(this.chosenPlatformId)).subscribe((platform) => {
				this.chosenPlatform = platform;
			});
			this.cart.setCart(this.game, this.chosenPlatform, this.dayAmount);
			this.router.navigate(['/cart']);
		}
	}

	joinPublishers() {
		return this.game?.publishers
			.map((publisher: Publisher) => {
				return publisher.name;
			})
			.join(', ');
	}
}
