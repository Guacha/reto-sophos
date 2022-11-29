import { Component, Input } from '@angular/core';
import { Game } from 'src/app/models/game.models';

@Component({
	selector: 'app-cartitem',
	templateUrl: './cartitem.component.html',
	styleUrls: ['./cartitem.component.css'],
})
export class CartitemComponent {
	@Input() item: Game;
}
