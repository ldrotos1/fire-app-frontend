import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncidentResponseComponent } from './incident-response.component';

describe('IncidentResponseComponent', () => {
  let component: IncidentResponseComponent;
  let fixture: ComponentFixture<IncidentResponseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncidentResponseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncidentResponseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
