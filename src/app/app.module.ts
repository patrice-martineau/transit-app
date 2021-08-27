import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './shared/material.module';
import { RouteSelectorComponent } from './components/route-selector/route-selector.component';
import { HttpClientModule } from '@angular/common/http';
import { TransitInfoGraphComponent } from './components/transit-info-graph/transit-info-graph.component';

@NgModule({
  declarations: [AppComponent, RouteSelectorComponent, TransitInfoGraphComponent],
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
