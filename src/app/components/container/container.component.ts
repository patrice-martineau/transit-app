import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

	appComponentDepartures: any;

	public routeSelectorOut(emittedValue: any): void {
		this.appComponentDepartures = emittedValue;
	}

}
