import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game, Publisher } from 'src/app/models/game.models';
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

	constructor(
		private route: ActivatedRoute,
		private cart: CartService,
		private router: Router,
		private gameService: GameService
	) {
		console.log('GameviewComponent constructor called');
		console.log('this.id: ' + this.id);
		if (this.id) {
			this.game = this.gameService.getGame(Number(this.id));
		} else {
			this.game = this.gameService.getGames()[0];
		}
		console.log('this.game: ', this.game);
	}

	ngOnInit(): void {
		if (this.id) {
			this.game = this.gameService.getGame(Number(this.id));
		} else {
			this.game = this.gameService.getGames()[0];
		}
	}

	addToCart(): void {
		if (this.game) {
			this.cart.addToCart(this.game);
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
		if (this.game) {
			this.cart.setCart(this.game);
			this.router.navigate(['/cart']);
		}
	}

	joinPublishers() {
		return this.game?.publishers
			.map((publisher: Publisher) => {
				console.log('publisher: ', publisher);
				return publisher.name;
			})
			.join(', ');
	}
}
