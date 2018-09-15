import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentResponseTableComponent } from './incident-response-table.component';

describe('IncidentResponseTableComponent', () => {
  let component: IncidentResponseTableComponent;
  let fixture: ComponentFixture<IncidentResponseTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentResponseTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResponseTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
