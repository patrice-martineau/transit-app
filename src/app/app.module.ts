import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ContainerComponent } from './components/container/container.component';
import { MaterialModule } from './shared/material.module';
import { RouteSelectorComponent } from './components/route-selector/route-selector.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TransitInfoGraphComponent } from './components/transit-info-graph/transit-info-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    RouteSelectorComponent,
    ToolbarComponent,
    TransitInfoGraphComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
