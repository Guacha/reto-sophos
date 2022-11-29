import { Component, Input, Output, EventEmitter } from '@angular/core';

type SortDirection = 'asc' | 'desc' | '';

@Component({
	selector: 'app-sortbutton',
	templateUrl: './sortbutton.component.html',
	styleUrls: ['./sortbutton.component.css'],
})
export class SortbuttonComponent {
	direction: SortDirection = '';
	iconClass: string = 'fa-sort';
	@Input() column: string;
	@Input() isSelected: boolean = false;
	@Output() setSelected: EventEmitter<string> = new EventEmitter<string>();

	constructor() {}

	// When isSelected changes to false, reset the sort button
	ngOnChanges() {
		if (!this.isSelected) {
			this.direction = '';
			this.iconClass = 'fa-sort';
		}
	}

	activate() {
		switch (this.direction) {
			case 'asc':
				this.direction = 'desc';
				this.iconClass = 'fa-sort-down';
				this.setSelected.emit(`${this.column} ${this.direction}`);
				break;
			case 'desc':
				this.direction = '';
				this.iconClass = 'fa-sort';
				this.setSelected.emit(`${'none'} ${this.direction}`);
				break;
			default:
				this.direction = 'asc';
				this.iconClass = 'fa-sort-up';
				this.setSelected.emit(`${this.column} ${this.direction}`);
				break;
		}
	}
}
