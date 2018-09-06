import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApparatusDeptChartComponent } from './apparatus-dept-chart.component';

describe('ApparatusDeptChartComponent', () => {
  let component: ApparatusDeptChartComponent;
  let fixture: ComponentFixture<ApparatusDeptChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApparatusDeptChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApparatusDeptChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
