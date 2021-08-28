import {
  Component,
  EventEmitter,
  OnInit,
  Output,
} from '@angular/core';
import { Router } from '@angular/router';

import { RouteSelectorService } from 'src/app/shared/services/route-selector.service';

@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss'],
})
export class RouteSelectorComponent implements OnInit {
  public routes: any;
  public directions: any;
  public stops: any;
  public departures: any;

  public selectedRoute: string;
  public selectedDirection: string;
  public selectedStop: string;

  @Output()
  departuresOut = new EventEmitter();

  constructor(
    private routeSelectorService: RouteSelectorService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.routeSelectorService.getRoutes().subscribe((v) => {
      this.routes = v;
      return;
    });
  }

  changedRouteSelection(val: any) {
    this.routeSelectorService.getDirections(val.value).subscribe((v) => {
      this.directions = v;
      return;
    });
  }

  changedDirectionSelection(val: any) {
    this.routeSelectorService
      .getStops(this.selectedRoute, val.value)
      .subscribe((v) => {
        this.stops = v;
        return;
      });
  }

  changedStopSelection(val: any) {
    this.routeSelectorService
      .getDepartures(this.selectedRoute, this.selectedDirection, val.value)
      .subscribe((v) => {
        this.departuresOut.emit(v);
        return;
      });
    // this.router.navigate(['/departures'])
  }
}
