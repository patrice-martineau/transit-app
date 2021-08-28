import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http/';
import { RouterTestingModule } from '@angular/router/testing';

import { of } from 'rxjs';

import { MaterialModule } from 'src/app/shared/material.module';
import { RouteSelectorComponent } from './route-selector.component';
import { RouteSelectorService } from 'src/app/shared/services/route-selector.service';

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
        { provide: RouteSelectorService, useClass: MockRouteSelectorService }
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

  it('should have disabled direction form field on init', () => {
    const directionSelector = fixture.debugElement.nativeElement.querySelector('#direction-select');
    expect(directionSelector.attributes.getNamedItem('ng-reflect-disabled').value).toBeTruthy();
  });

  it('should have disabled stop form field on init', () => {
    const stopSelector = fixture.debugElement.nativeElement.querySelector('#direction-select');
    expect(stopSelector.attributes.getNamedItem('ng-reflect-disabled').value).toBeTruthy();
  });
});
