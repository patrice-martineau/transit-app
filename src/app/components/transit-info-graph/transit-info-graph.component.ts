import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-transit-info-graph',
  templateUrl: './transit-info-graph.component.html',
  styleUrls: ['./transit-info-graph.component.scss'],
})

export class TransitInfoGraphComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['route', 'destination', 'departure-time'];
  // dataSource = new MatTableDataSource<any>(this.departures);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  @Input() departures: Departures = [];

  ngOnInit() {
  
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
  }
}

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

export type Departures = Departure[];

export interface Trip {
  route: string;
  destination: string;
  departure_time: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}