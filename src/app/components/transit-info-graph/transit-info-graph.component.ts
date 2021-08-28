import { Component, Input  } from '@angular/core';

@Component({
  selector: 'app-transit-info-graph',
  templateUrl: './transit-info-graph.component.html',
  styleUrls: ['./transit-info-graph.component.scss'],
})

export class TransitInfoGraphComponent {
  displayedColumns: string[] = ['route', 'destination', 'departure-time'];

  @Input() departures: Departures = [];
}

export type Departures = Departure[];
export interface Departure {
  actual: boolean;
  trip_id: string;
  stop_id: number;
  departure_text: string;
  departure_time: number;
  description: string;
  route_id: string;
  route_short_name: string;
  direction_id: number;
  direction_text: string;
  schedule_relationship: string;
}