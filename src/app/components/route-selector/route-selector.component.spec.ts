import { HttpClientModule } from '@angular/common/http/';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MaterialModule } from 'src/app/shared/material.module';
import { Router } from '@angular/router';

import { RouteSelectorComponent } from './route-selector.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { RouteSelectorService } from 'src/app/shared/services/route-selector.service';
import { of } from 'rxjs';

class MockRouteSelectorService {
  getRoutes = () => of([]);
}

describe('RouteSelectorComponent', () => {
  let component: RouteSelectorComponent;
  let fixture: ComponentFixture<RouteSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserDynamicTestingModule,
        HttpClientModule,
        MaterialModule,
        RouterTestingModule
      ],
      declarations: [
        RouteSelectorComponent
      ],
      providers: [
        {provide: RouteSelectorService, useClass: MockRouteSelectorService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
