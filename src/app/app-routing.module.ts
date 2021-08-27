import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteSelectorComponent } from './components/route-selector/route-selector.component';
import { TransitInfoGraphComponent } from './components/transit-info-graph/transit-info-graph.component';

const routes: Routes = [
  { path: 'route', component: RouteSelectorComponent },
  { path: 'departures', component: TransitInfoGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
