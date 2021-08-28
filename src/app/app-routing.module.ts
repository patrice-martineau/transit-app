import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './components/container/container.component';
import { TransitInfoGraphComponent } from './components/transit-info-graph/transit-info-graph.component';

const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'departures', component: TransitInfoGraphComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
