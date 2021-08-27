import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitInfoGraphComponent } from './transit-info-graph.component';

describe('TransitInfoGraphComponent', () => {
  let component: TransitInfoGraphComponent;
  let fixture: ComponentFixture<TransitInfoGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransitInfoGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransitInfoGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
