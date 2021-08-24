import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Observable } from 'rxjs';
import { RouteSelectorService } from 'src/app/shared/services/route-selector.service';

@Component({
  selector: 'app-route-selector',
  templateUrl: './route-selector.component.html',
  styleUrls: ['./route-selector.component.scss']
})

export class RouteSelectorComponent implements OnInit {

  public routes: any;
  public directions: any;
  public stops: any;
  public selectedRoute: string;
  public selectedDirection: string;

  constructor(private routeSelectorService: RouteSelectorService) { }

  ngOnInit(): void {
    // this.routesObservable = this.routeSelectorService.getRoutes();

    this.routeSelectorService.getRoutes()
    .subscribe(v => {
      this.routes = v
      return;
    });
  }

  changedRouteSelection(val: any) {
    console.log("changed route selection", val.value);
      this.routeSelectorService.getDirections(val.value)
      .subscribe(v => {
        this.directions = v
        return;
      });
  }

  changedDirectionSelection(val: any) {
    console.log("changed direction selection", val.value);
      this.routeSelectorService.getStops(this.selectedRoute, val.value)
      .subscribe(v => {
        this.stops = v
        return;
      });
  }

}
