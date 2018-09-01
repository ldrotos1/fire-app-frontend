import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitTypeChartComponent } from './unit-type-chart.component';

describe('UnitTypeChartComponent', () => {
  let component: UnitTypeChartComponent;
  let fixture: ComponentFixture<UnitTypeChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnitTypeChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitTypeChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
