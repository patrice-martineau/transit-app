import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss'],
})
export class AppComponent {
	title = 'Transit App';

	appComponentDepartures: any;

	public routeSelectorOut(emittedValue: any): void {
		this.appComponentDepartures = emittedValue;
	}
}
