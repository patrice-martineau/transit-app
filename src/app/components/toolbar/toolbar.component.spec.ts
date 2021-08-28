import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialModule } from 'src/app/shared/material.module';
import { ToolbarComponent } from './toolbar.component';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        BrowserDynamicTestingModule,
        MaterialModule
      ],
      declarations: [ ToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
